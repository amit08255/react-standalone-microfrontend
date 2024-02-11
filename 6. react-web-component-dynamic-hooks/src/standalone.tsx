import * as React from "react";
import toWebComponent from "./toWebComponent";

type Props = {
    name: string;
    email: string;
    onEvent: (event:string, detail:any) => void;
}

const Component = ({ name, email, onEvent }:Props) => {

    const onNameChange = (e:any) => {
        onEvent("onChangeName", { name: e.target.value });
    };

    const onEmailChange = (e:any) => {
        onEvent("onChangeEmail", { email: e.target.value });
    };

    const handleClick = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        onEvent("submit", { message: "Clicked the submit button" });
    };

    return (
        <form onSubmit={handleClick}>
            <label>
                Name:
                <input type="text" name="username" value={name} onChange={onNameChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={onEmailChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

const StandaloneComponent = toWebComponent({
    ChildComponent: Component,
    elementName: "standalone-component",
    attributesToMonitor: ["name", "email"],
});

export default StandaloneComponent;
