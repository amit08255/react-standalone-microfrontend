import * as React from "react";
import * as ReactDom from "react-dom";

function toWebComponent(ChildComponent: React.FC<any>, elementName: string) {
  class StandaloneComponent extends HTMLElement {
    mountPoint!:HTMLDivElement;
    rootId = `${Math.random().toString(36).substring(7)}-${elementName}`;

    convertAttributesToMap = () => {
      const argumentsMap:any = {};

      for (let i = 0; i < this.attributes.length; i++) {
        const { name, value } = this.attributes[i];
        argumentsMap[name] = value;
      }

        return argumentsMap;
    };

    onAttributeChange = () => {
      if (this.shadowRoot) {
        this.shadowRoot?.getElementById(this.rootId)?.dispatchEvent(new CustomEvent("onAttributeChange", {
          detail: this.convertAttributesToMap(),
        }));
      }
    }

    onEvent = (event:string, detail:any) => {
        this.dispatchEvent(new CustomEvent(event, { detail }));
    };

    observeAttributes = () => {
      const onAttributeChange = this.onAttributeChange.bind(this);
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === "attributes") {
            onAttributeChange();
          }
        });
      });

      observer.observe(this, {
        attributes: true //configure it to listen to attribute changes
      });
    };

    connectedCallback() {
      const mountPointObj = document.createElement("div");
      mountPointObj.setAttribute("id", this.rootId);
      this.attachShadow({ mode: "open" }).appendChild(mountPointObj);
      this.mountPoint = mountPointObj;

      this.observeAttributes();

      ReactDom.render(<ChildComponent {...this.convertAttributesToMap()} root={mountPointObj} onEvent={this.onEvent} />, mountPointObj);
    }
  }

  window.customElements.get(elementName) ||
  window.customElements.define(elementName, StandaloneComponent);

  return StandaloneComponent;
}

export default toWebComponent;
