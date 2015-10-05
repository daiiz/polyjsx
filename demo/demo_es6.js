// $ babel demo_es6.js > demo_es5.js

window.addEventListener('WebComponentsReady', (e) => {
    /** @jsx polyjsx */
    var message = ' 国産ビーフ';
    var steak = (
        <price-tax price="2500" rate="8" switchable>
            素敵なステーキ
            <span style="color: red">{message}</span>
        </price-tax>
    );

    document.querySelector('body').appendChild(steak);
});
