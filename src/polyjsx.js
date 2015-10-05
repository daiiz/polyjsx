// $ babel --no-comments src/polyjsx.js > polyjsx.js

var polyjsx = (name, props, ...children) => {
    if (name === null) return;
    var parent = document.createElement(name);
    if (props !== null) {
        var keys = Object.keys(props);
        keys.forEach((key) => {
            if (key === 'className') key = 'class';
            parent.setAttribute(key, props[key]);
        });
    }
    children.forEach(c => {
        var child = c;    // polyjsx()を再帰呼び出し
        if (typeof(child) == 'string') {
            Polymer.dom(parent).appendChild(document.createTextNode(child));
        } else {
            Polymer.dom(parent).appendChild(child);
        }
    });
    return parent;
};
