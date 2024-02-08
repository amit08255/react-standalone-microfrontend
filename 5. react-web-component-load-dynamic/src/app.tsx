import React from "react";
import RemoteComponent from "./remoteComponent";

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
        />
    </div>
    );
};
