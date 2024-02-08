# React Web Component Load Dynamic

This project is a simple example of loading `Web Component` dynamically at runtime in `React` application.

## Building the Standalone Component JS File

Run below command to build the standalone component. The built component is stored in `dist` directory

```sh
npm run build:standalone
```

## Adding Web Component URL to App

`RemoteComponent` is a component that loads the `Web Component` dynamically at runtime. It takes below props:

```tsx
<RemoteComponent
        url="http://localhost:80/standalone.js"
        elementName="standalone-component"
        props={{}}
/>
```

## Creating Standalone Component

`toWebComponent` is a HOC that takes `React` component and returns `Web Component`. It takes below arguments:

```tsx
import * as React from "react";
import toWebComponent from "./toWebComponent";

const Component = () => (<div>Standalone Component</div>);

const StandaloneComponent = toWebComponent(Component, "standalone-component");

export default StandaloneComponent;
```

## Running the Dev Server

Run below command to run the dev server:

```sh
npm run dev:client
```
