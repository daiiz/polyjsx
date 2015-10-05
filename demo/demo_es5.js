// $ babel demo_es6.js > demo_es5.js

'use strict';

window.addEventListener('WebComponentsReady', function (e) {
    /** @jsx polyjsx */
    var message = ' 国産ビーフ';
    var steak = polyjsx(
        'price-tax',
        { price: '2500', rate: '8', switchable: true },
        '素敵なステーキ',
        polyjsx(
            'span',
            { style: 'color: red' },
            message
        )
    );

    document.querySelector('body').appendChild(steak);
});

