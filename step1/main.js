// alert('test');
var displayElm = document.getElementsByClassName('display')[0];
var timer = null;

var startButton = document.getElementsByClassName('startButton')[0];
startButton.addEventListener('click', function(){
    if (timer === null) {
        var seconds = 0;
        timer = setInterval(function(){
            seconds++;
            displayElm.innerText = seconds;
            console.log(seconds);
        }, 1000);
        console.log('start:' + timer)
    }
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function(){
    if (timer !== null) {
        console.log('stop:' + timer);
        clearInterval(timer);
        timer = null;
    }
})