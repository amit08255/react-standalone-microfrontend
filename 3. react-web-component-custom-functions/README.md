# React Web Component Custom Function

This project is a simple example of calling custom function created inside the `Web Component`.

## Building the Standalone Component JS File

Run below command to build the standalone component. The built component is stored in `dist` directory

```sh
npm run build:standalone
```

## Adding Web Component URL to App

Open `index.html`. Add hosted component URL in `script` tag like below:

```html
<script type="text/javascript" src="http://localhost:80/standalone.js"></script>
```

## Rendering Web Component in React

```tsx
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
```

## Running the Dev Server

Run below command to run the dev server:

```sh
npm run dev:client
```
