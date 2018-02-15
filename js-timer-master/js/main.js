var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("miliseconds");

var startButton = document.getElementById("start_btn");
var clearButton = document.getElementById("clear_btn");  //берем в переменные все DOM обьекты

var counterTime = new Date(0);
counterTime.setHours(0);                 //для фикса разных часовых поясов
var condition = "pause";                 //флажок для старта-паузы
var count;                              //переменная для setInterval

function timerInit() {
    startButton.classList.toggle("start_btn_pause");
    if (condition == "pause") {                              //если таймер стоит- запускаем

        startButton.innerHTML = "Pause";
        condition = "work";
        count = setInterval( function() {

        if (counterTime.getHours() < 10 ) {
            hours.innerHTML = "0" + counterTime.getHours();
        }
        else hours.innerHTML = counterTime.getHours();

        if ( counterTime.getMinutes() < 10 ) {
            minutes.innerHTML = "0" + counterTime.getMinutes();
        }
        else minutes.innerHTML = counterTime.getMinutes();

        if (counterTime.getSeconds() < 10 ) {
        seconds.innerHTML = "0" + counterTime.getSeconds();
        }
        else seconds.innerHTML = counterTime.getSeconds();

        if (counterTime.getMilliseconds() < 100 ) {
        milliseconds.innerHTML = "0" + counterTime.getMilliseconds() / 10;
        }
        else milliseconds.innerHTML = counterTime.getMilliseconds() / 10;

        counterTime.setMilliseconds(counterTime.getMilliseconds() + 10);
    }, 10 );
    }
    else {                                                      //если работает-останавливаем
        startButton.innerHTML = "Continue";
        count = clearInterval(count);
        condition = "pause";
    }
}

function timerClear() {                               //все обнуляем
    count = clearInterval(count);

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliseconds.innerHTML = "00";

    startButton.innerHTML = "Start";

    counterTime = new Date(0);
    counterTime.setHours(0);
    condition = "pause";
    startButton.classList.remove("start_btn_pause");
}

startButton.addEventListener("click", timerInit );
clearButton.addEventListener("click", timerClear );
