# Move Components Into Separate Files

## Why?

To make our codebase more maintainable so that we can find and update
our components faster. This will also make our components reusable
across multiple projects.

### Conventions

- One File per react component

## Functional Component Files

Define a function component in `MyInfo.tsx`.

```js
function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  );
}
```

Let's also make our function component available to the outside by exporting it as
a default.

```js
export default MyInfo;
```

## Directory Structure

As the project complexity grows, having a well thought out directory structure
is key. One simple but effective strategy is putting all of your file components
into a directory called `components`. This helps with keeping all of your
components neatly organized.

This directory structure can be somewhat over-simplified but you and your team
need to define a structure which suits your projects needs.

## Example Demo

Run the demo project with the following command

```sh
docker-compose up
```

Changes to the source code will automatically trigger a front-end update
