import React from "react";
import RemoteComponent from "./remoteComponent";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'standalone-component': any;
        }
    }
}

export const App: React.FC = () => {
    return (
    <div className="App">
      <header className="App-header">
        Welcome to our application!
      </header>
        <RemoteComponent
            url="http://localhost:80/standalone.js"
            elementName="standalone-component"
            props={{}}
            events={{
                click: (event) => {
                    console.log("Clicked the standalone component");
                },
            }}
        />
    </div>
    );
};
