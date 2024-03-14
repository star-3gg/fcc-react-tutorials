# Functional Components

What are functional components in react and how do we write them?

## Functional Components

Functional components are functions which return `JSX` directly.
They become available as a custom tag.

```js
function MyApp() {
  return (
    <ul>
      <li>Anything</li>
      <li>you</li>
      <li>want</li>
    </ul>
  );
}
```

An instance of this component can then be rendered to the virtual DOM

```js
ReactDOM.render(<MyApp />, document.getElementById("root"));
```

### Code Conventions

There are a few strong conventions in react to improve code readability

- Use the constructor convention of capital camel-case for all react components
- Wrap the returned `JSX` in parentheses
- Put every `JSX` element tag on its own line such that it looks similar to HTML

## Example Demo

Run the demo project with the following command

```sh
docker-compose up
```

Changes to the source code will automatically trigger a front-end update
