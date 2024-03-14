# ReactDOM & JSX

## Virtual DOM Instead of classical view / DOM

The view is passed into react and react figures out what needs to be updated.

## ES6

**ES6** is used which is updated **JavaScript**
`var` becomes `let` or `const`

## ReactDOM and Root

- This pseudo-code `index.js` file shows a react renderer

```js
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER)
```

The JavaScript we are going to write is simply going to be turned into elements
on the page. You can think of it as being inserted into an HTML page.

- This `index.html` file shows a basic HTML page

```html
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="index.pack.js"></script>
  </body>
</html>
```

React will put everything between the `"root"` div tags.
The root tag is like a container for the entire application.
With this knowledge we can update our react render function call.
Let's render a simple `<h1>` title element

## JSX

JSX allows us to use HTML inside our JavaScript code.
Usually this would lead to errors because JavaScript would interpret
the HTML symbols as operators. JSX is like a JavaScript version of HTML.
Most of JSX looks almost identical to HTML.

```js
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));
```

This is why we had to import react, because importing the react library
will allow us to use JSX. One important thing to note is that JSX doesn't
allow rendering multiple elements side by side, elements have to be wrapped
in a single element.

### This is not allowed

```js
ReactDOM.render(<h1>Hello world!</h1><p>This is a paragraph</p>, document.getElementById("root"))
```

### This is allowed

```js
ReactDOM.render(
  <p>
    <h1>Hello world!</h1>
  </p>,
  document.getElementById("root"),
);
```

Using JSX can take a little bit of getting used to but it's much nicer than
doing it the old way

### The old way of doing the same thing

```js
var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph"

...
```

The old way of doing things was very imperative, whereas now we are doing
things much more declaratively.

## Example Demo

Run the demo project with the following command

```sh
docker-compose up
```

Changes to the source code will automatically trigger a front-end update
