# Task 18: JavaScript - DOM and Event Handling

A simple interactive page built with HTML, CSS and JavaScript. It has a greeting header, four colour boxes, a name input and a Greet button.

## Files

- `index.html` - page structure (header, four boxes, input and button)
- `style.css` - styling, linked from the HTML
- `script.js` - DOM and event handling, linked from the HTML
- `Readme.md` - this file

## How it works

- **Header:** shows "Hello" at the start.
- **Greet button:** when clicked, the header text changes to "Hello, [name]" using the name typed in the input field. If the input is empty, the header stays "Hello".
- **Boxes:** the four boxes say Red, Blue, Green and Yellow. When a box is clicked, its background colour changes to the colour written in it.
- **DOM used:** `getElementById`, `querySelectorAll`, `addEventListener`, `textContent` and `style.backgroundColor`.

## How to run

Open `index.html` in a browser. Click the boxes to fill them with colour, type a name and click **Greet**.
