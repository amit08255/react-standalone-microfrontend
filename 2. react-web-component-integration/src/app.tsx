import React from "react";

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
        <standalone-component name="Hello, World!"></standalone-component>
    </div>
  );
};
