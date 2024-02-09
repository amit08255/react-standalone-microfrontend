import React from "react";
import RemoteComponent from "./remoteComponent";
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
