*This repository is a mirror of the [component](http://component.io) module [jaycetde/text-dimensions](http://github.com/jaycetde/text-dimensions). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jaycetde-text-dimensions`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
