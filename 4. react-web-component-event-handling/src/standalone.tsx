import * as React from "react";
import * as ReactDom from "react-dom";
import Form from "./form";

class StandaloneComponent extends HTMLElement {

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        name: event.currentTarget.username.value,
        email: event.currentTarget.email.value
      },
    }));
  };

  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    ReactDom.render(<Form onSubmit={this.onSubmit} /> , mountPoint);
  }
}
export default StandaloneComponent;

window.customElements.get("standalone-component") ||
  window.customElements.define("standalone-component", StandaloneComponent);
