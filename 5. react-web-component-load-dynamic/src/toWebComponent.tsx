import * as React from "react";
import * as ReactDom from "react-dom";

function toWebComponent(ChildComponent: React.FC<any>, elementName: string) {
  class StandaloneComponent extends HTMLElement {
    mountPoint!:HTMLDivElement;
    onEvent = (event:string, detail:any) => {
        this.dispatchEvent(new CustomEvent(event, { detail }));
    };

    connectedCallback() {
      const mountPointObj = document.createElement("div");
      this.attachShadow({ mode: "open" }).appendChild(mountPointObj);
      this.mountPoint = mountPointObj;
      ReactDom.render(<ChildComponent onEvent={this.onEvent} />, mountPointObj);
    }
  }

  window.customElements.get(elementName) ||
  window.customElements.define(elementName, StandaloneComponent);

  return StandaloneComponent;
}

export default toWebComponent;
