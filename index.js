'use strict';

var style = require('computed-style')
  , el = document.createElement('div')
  , styleList = [
      'font-size'
    , 'font-style'
    , 'font-weight'
    , 'font-family'
    , 'line-height'
    , 'text-transform'
    , 'letter-spacing'
  ]
;

el.className = 'text-dimensions';

document.body.appendChild(el);

function setStyles(el, styles) {
    
    styles = styles || {};
    
    var i = 0
      , l = styleList.length
    ;
    while (i < l) {
        el.style[styleList[i]] = styles[styleList[i]] !== undefined ? styles[styleList[i]] : null;
        i += 1;
    }
}

function extractStyles(el) {
    var ret = {}
      , i = 0
      , l = styleList.length
    ;
    while (i < l) {
        ret[styleList[i]] = style(el)[styleList[i]];
        i += 1;
    }
    return ret;
}

function dimensions(text, styles) {
    
    if (text instanceof HTMLElement) {
        styles = extractStyles(text);
        text = text.textContent;
    }
    
    if (styles instanceof HTMLElement) {
        styles = extractStyles(styles);
    }
    
    setStyles(el, styles);
    
    el.textContent = text;
    
    return {
        width: el.clientWidth
      , height: el.clientHeight
    };
    
}

module.exports = dimensions;