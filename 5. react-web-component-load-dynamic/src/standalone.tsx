import * as React from "react";
import toWebComponent from "./toWebComponent";

const Component = ({ onEvent }:any) => {
    const handleClick = (e:any) => {
        e.stopPropagation();
        onEvent("click", { message: "Clicked the standalone component" });
    }

    return (<div onClick={handleClick}>Standalone Component</div>);
}

const StandaloneComponent = toWebComponent(Component, "standalone-component");

export default StandaloneComponent;
