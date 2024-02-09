import * as React from "react";
import toWebComponent from "./toWebComponent";

type Props = {
    root: HTMLDivElement;
    name: string;
    email: string;
    onEvent: (event:string, detail:any) => void;
}

const Component = ({ root, name: initialName, email: initialEmail, onEvent }:Props) => {
    const [name, setName] = React.useState(initialName);
    const [email, setEmail] = React.useState(initialEmail);

    React.useEffect(() => {
        root.addEventListener("onAttributeChange", (e:any) => {
            setEmail(e.detail.email);
            setName(e.detail.name);
        });
    }, []);

    const onNameChange = (e:any) => {
        setName(e.target.value);
        onEvent("onChangeName", { name: e.target.value });
    };

    const onEmailChange = (e:any) => {
        setEmail(e.target.value);
        onEvent("onChangeEmail", {email: e.target.value})
    };

    const handleClick = (e:any) => {
        e.stopPropagation();
        onEvent("submit", { message: "Clicked the submit button" });
    };

    return (
        <form onSubmit={handleClick}>
            <label>
                Name:
                <input type="text" name="username" value={name} onChange={onNameChange}/>
            </label>
            <label>
                Email:
                <input type="text" name="email" value={email}
                       onChange={onEmailChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

const StandaloneComponent = toWebComponent(Component, "standalone-component");

export default StandaloneComponent;
