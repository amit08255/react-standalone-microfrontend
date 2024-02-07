# React Standalone Component

This project is a simple example of building standalone React component that can be exported as single .js file and integrated in other web application using the technique called `Web Component`.

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
