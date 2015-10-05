# polyjsx
You can write JSX &lt;polymer-element> tags in JavaScript.

```javascript
/** @jsx polyjsx */
var message = '国産ビーフ';
var steak = (
    <price-tax price="2500" rate="8" switchable>
        素敵なステーキ
        <span style="color: red">{message}</span>
    </price-tax>
);

document.querySelector('body').appendChild(steak);
```

Equals:
```javascript
var message = '国産ビーフ';
var steak = document.createElement('price-tax');
var msg = document.createElement('span');

msg.innerHTML = message;
msg.setAttribute('style', 'color: red');

Polymer.dom(steak).appendChild(document.createElement('素敵なステーキ'));
Polymer.dom(steak).appendChild(msg);
Polymer.dom(steak).setAttribute('price', 2500);
Polymer.dom(steak).setAttribute('rate', 8);
Polymer.dom(steak).setAttribute('switchable', true);

document.querySelector('body').appendChild(steak);
```

## Demo

```
$ cd demo/
$ bower install
$ babel demo_es6.js > demo_es5.js
```

then,
```
$ python -m SimpleHTTPServer 8000
$ open http://localhost:8000/demo/
```
