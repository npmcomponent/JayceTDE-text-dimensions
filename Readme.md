
# text-dimensions

  Get the width and height of a string of text

## Installation

    $ component install JayceTDE/text-dimensions

## Usage

```javascript

var textDimensions = require('text-dimensions');

textDimensions('Hello world');                                // { width: 71, height: 20 }
textDimensions('Hello world', { 'font-size': '24px' });       // { width: 113, height: 28 }
textDimensions('Hello world', document.querySelector('div')); // { width: 126, height: 20 }

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
