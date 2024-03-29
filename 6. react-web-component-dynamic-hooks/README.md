# React Web Component Load Dynamic

This project is a simple example of loading `Web Component` dynamically at runtime in `React` application.

## Building the Standalone Component JS File

Run below command to build the standalone component. The built component is stored in `dist` directory

```sh
npm run build:standalone
```

## Adding Web Component URL to App

`useRemoteComponent` is a hook that loads the `Web Component` dynamically at runtime. It takes below props:

```tsx
import React from "react";
import useRemoteComponent from "./useRemoteComponent";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'standalone-component': any;
        }
    }
}

export const App: React.FC = () => {
    const [name, setName] = React.useState('Amit');
    const [email, setEmail] = React.useState('a@gmail.com');

    const { isLoaded , ref } = useRemoteComponent({
        url: "http://localhost:80/standalone.js",
        events: {
            submit: (event) => {
                console.log("form submitted: ", event.detail);
            },
            onChangeName: (event) => {
                setName(() => event.detail.name);
            },
            onChangeEmail: (event) => {
                setEmail(() => event.detail.email);
            },
        },
    });

    return (
    <div className="App">
      <header className="App-header">
        Welcome to our application!
      </header>
        {
            isLoaded && <standalone-component ref={ref} name={name} email={email} />
        }
    </div>
    );
};
```

## Creating Standalone Component

`toWebComponent` is a HOC that takes `React` component and returns `Web Component`. It takes below arguments:

```tsx
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
```

## Running the Dev Server

Run below command to run the dev server:

```sh
npm run dev:client
```
