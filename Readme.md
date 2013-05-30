
# text-dimensions

  Get the width and height of a string of text

## Installation

    $ component install JayceTDE/text-dimensions

## Usage

```javascript

var textDimensions = require('text-dimensions');

// No styles
textDimensions('Hello world');                                // { width: 71, height: 20 }

// Manually set styles
textDimensions('Hello world', { 'font-size': '24px' });       // { width: 113, height: 28 }

// Copy styles from an element
textDimensions('Hello world', document.querySelector('div')); // { width: 126, height: 20 }

// Use textContent and styling of an element
textDimensions(document.querySelector('div'));                // { width: 180, height: 40 }

```

## Available Styles

* font-size
* font-style
* font-weight
* font-family
* line-height
* text-transform
* letter-spacing

## License

  MIT
