# React Component With ExpressJS API Integration

This project is a simple which integrates Express JS API. When the component is extracted, it can use API when loaded to fetch data.

## Running the Client Dev Server

Run below command to run the dev server:

```sh
npm run dev:client
```

## Running the ExpressJS Server

Run below command to run the API server:

```sh
npm run dev:server
```

## Building the Standalone Component JS File

Run below command to build the standalone component. The built component is stored in `dist` directory

```sh
npm run build:standalone
```


And we can use our script like:

```html
<html>
  <head>
    <script src="./client.js"></script>
  </head>

  <body>
    <standalone-component name="Web Component" />
  </body>
</html>
```

By including a script tag, it will fetch the JavaScript and register the Web Component, which allows us to run our component later in the page. Of course, we can follow a similar pattern in other languages and JavaScript frameworks, but I find that it's easiest to boil this down to the most simple case and stick with HTML when testing this out.

Part 1. Why Web Components
Part 2. Registering a Web Component in React, initial webpack configuration
Part 3. Importing a Web Component in Vue, importance of easy updates (src tag)
Part 4. Running a Web Worker from another domain
Part ?? Styled Components
