import * as React from "react";
import * as ReactDOM from "react-dom";

type Options = {
  ChildComponent: React.FC<any>,
  elementName: string,
  attributesToMonitor:string[],
};

function toWebComponent({ ChildComponent, attributesToMonitor, elementName }:Options) {
  class StandaloneComponent extends HTMLElement {
    mountPoint!:HTMLDivElement;

    static get observedAttributes() {
      return attributesToMonitor;
    }

    onEvent = (event:string, detail:any) => {
      this.dispatchEvent(new CustomEvent(event, { detail }));
    };

    convertAttributesToMap = () => {
      const argumentsMap:any = {};

      for (let i = 0; i < this.attributes.length; i++) {
        const { name, value } = this.attributes[i];
        argumentsMap[name] = value;
      }

      return argumentsMap;
    };

    createCollapsed() {
      return React.createElement(ChildComponent, { ...this.convertAttributesToMap(), onEvent: this.onEvent });
    }

    connectedCallback() {
      this.mountPoint = document.createElement('div');
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(this.mountPoint);

      ReactDOM.render(this.createCollapsed(), this.mountPoint);
    }

    attributeChangedCallback(name:string, oldValue:any, newValue:any) {
      if (this.mountPoint) {
        ReactDOM.render(this.createCollapsed(), this.mountPoint);
      }
    }
  }

  window.customElements.get(elementName) ||
  window.customElements.define(elementName, StandaloneComponent);

  return StandaloneComponent;
}

export default toWebComponent;
