import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'standalone-component': any;
        }
    }
}

export const App: React.FC = () => {
    const ref = React.useRef(null);

    const onClick = () => {
        const component:any = ref.current;
        if (component) {
            component.logger();
        }
    };

    return (
    <div className="App">
      <header className="App-header">
        Welcome to our application!
      </header>
        <standalone-component onClick={onClick} ref={ref} name="Hello, World!"></standalone-component>
    </div>
  );
};
