import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'standalone-component': any;
        }
    }
}

export const App: React.FC = () => {
    const ref:any = React.useRef(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('submit', (event: CustomEvent) => {
                console.log('Form submitted with', event.detail);
            });
        }
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        Welcome to our application!
      </header>
        <standalone-component ref={ref} />
    </div>
  );
};
