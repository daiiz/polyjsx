'use strict';

var polyjsx = function polyjsx(name, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (name === null) return;
    var parent = document.createElement(name);
    if (props !== null) {
        var keys = Object.keys(props);
        keys.forEach(function (key) {
            if (key === 'className') key = 'class';
            parent.setAttribute(key, props[key]);
        });
    }
    children.forEach(function (c) {
        var child = c;
        if (typeof child == 'string') {
            Polymer.dom(parent).appendChild(document.createTextNode(child));
        } else {
            Polymer.dom(parent).appendChild(child);
        }
    });
    return parent;
};

