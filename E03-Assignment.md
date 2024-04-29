## What is JSX?

### JSX is a syntax extension of JavaScript that lets us write HTML-like markup in JavaScript file. JSX is a specialized syntax which can be used to create React elements. It has HTML-like syntax and makes our code more readable when compared to using React code. In the build step, JSX we write converted into React.createElement using a tool like babel.

## Components

### Components are JavaScript functions that we can sprinkle with markup. Sprinkling markup is done by JSX. Rendering logic and markup lives together in the same place - Components.

- Each React component is a Javascript function with some markup and React renders this to browser.

- Component is a bundle of markup, style and logic that controls everything about a specific part of the UI. HTML uses partials to resuse chunk of HTML, CSS uses classes to resuse CSS and JS uses functions to reuse the code. In React, components are the mechanism of reuse.

## Superpowers of JSX

- Expression Slots:

Anything we put between open and closing tag in JSX is treated as an static string. For eg. If we try to reference a variable, JSX will print it's name and not the value of the variable.

Expression produces a value.
We can create Expression slots using curly braces {}. Anything placed between the curly braces will treated as pure Javascript, instead of string. With this we can add JavaScript logic or reference dynamic property inside the markup.

JSX doesn't check the validity of JS in expression slots. It acts as a messenger and forwards the content along to the pure JS output.

Functions only accepts expressions, expression will resolve to a value and this value can act as an input to function. Whereas statements don't produce a value and cannot be passed to a function. If we try and place statements in expression slots we will get JS syntax errors.

Attribute slots: with expression slots we can pass attribute values
