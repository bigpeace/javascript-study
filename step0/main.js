console.log('ファイル読み込みのテストです')
var element = document.getElementById('innerTest');
element.innerHTML = '<strong>Javascript</strong>で書きました';

var buttonElm = document.getElementById('testButton');
buttonElm.addEventListener('click', function() {
    var numberElm = document.getElementById('number');
    var val = numberElm.value;
    var num = parseInt(val);
    if (num % 2 == 0) {
        alert('偶数です');
    } else {
        alert('偶数ではありません');
    }
});

var fruits = ['りんご', 'もも', 'みかん'];
var fruitsStr = '';
for(var i = 0; i < fruits.length; i++) {
    fruitsStr += '<li class="fruit">' + fruits[i] + '</li>';
}

var arrayElm = document.getElementById('arrayTest');
arrayElm.innerHTML = fruitsStr;

var fruitElms = document.getElementsByClassName('fruit');
for (var i = 0; i < fruitElms.length; i++) {
    var fruitElm = fruitElms[i];
    console.log(fruitElm.textContent);
}

var colorsObj = {
    red: 'あか',
    green: 'みどり',
    'blue': 'あお'
};

console.log(colorsObj);

console.log(colorsObj['red']);
console.log(colorsObj.red);
console.log(colorsObj.blue);

colorsObj['red'] = 'レッド';
console.log(colorsObj.red);

colorsObj.blue = 'ブルー';
console.log(colorsObj.blue);