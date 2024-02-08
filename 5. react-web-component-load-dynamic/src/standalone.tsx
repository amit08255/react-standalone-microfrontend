import * as React from "react";
import toWebComponent from "./toWebComponent";

const Component = () => (<div>Standalone Component</div>);

const StandaloneComponent = toWebComponent(Component, "standalone-component");

export default StandaloneComponent;
