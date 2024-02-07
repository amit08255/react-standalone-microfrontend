# React Standalone Component

This project is a simple example of building standalone React component that can be exported as single .js file and integrated in other web application using the technique called `Web Component`.

## Web Components to the Rescue

From the docs on MDN, Web Components are defined as:

> Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

The React component can be registered as a Web Component, which can be imported and used from another application (or just a plain HTML page in fact). With this approach, components are encapsulated within a shadow DOM and can't interfere with the rest of the application.

This sounded like a perfect fit for our needs.

## Running the Dev Server

Run below command to run the dev server:

```sh
npm run dev:client
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
