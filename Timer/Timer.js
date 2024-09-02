// Создай переменную кнопки в которой лежит физическиая кнопка из HTML с ID (#) "start"
// Создай переменную в которой лежат все данные класса (.) "time". По сути создаётся массив с данными к которому надо обратиться в будущем
// Создай переменную в которой лежит строка вывода

let btn = document.querySelector(`#start`);
let timeinput = document.querySelectorAll(`.time`);
let timeoutput = document.querySelector(`#outputtext`);
let soundStop = document.querySelector(`#soundstop`);
let soundEnd = document.querySelector(`#soundend`);
let timerInterval;
let stop = false; // Переменная которая выключает таймер

let y;
let d;
let h;
let m;
let s;
let year;



btn.addEventListener("click", checkStartTimer); // Если в переменной btn добавиться событие "клик", то выполни функцию "startTimer".
soundStop.addEventListener("click", stopSound);
function stopSound() {
    soundEnd.src='';
}
function checkStartTimer() {
    if (timerInterval >= 1) {
        clearInterval(timerInterval);
        startTimer();
    } else {
        startTimer();
    }
}
console.log(y);

function startTimer() {

    //добавь в переменную то, что лежит  в пункте массива входных данных.
    //y - это число из первого input если ничего нет то ноль
    y = +timeinput[0].value || 0;
    d = +timeinput[1].value || 0;
    h = +timeinput[2].value || 0;
    m = +timeinput[3].value || 0;
    s = +timeinput[4].value || 0;
    year = Math.floor(y/4);
    d = d+year;
    if (s == 0){
        s++;
    }


    timerInterval = setInterval(changeTimer, 1000); // переменная для включения (изменения времени в таймере) таймера с интервалом в 1 секунду

}

function changeTimer() { //Функция измени время в таймере

    // Убери одну секунду, в переменную выключения запиши значение, если всё == 0, то выключи, если нет, то нет.
    // Если переменная изменилать на выключи, то убери интервал из переменной, дабы таймер перестал работать

    if (s == 1 && m > 0) {
        s = 60;
        m--;
    }else if (s == 1 && m == 0 && h > 0) {
        m = 59;
        s = 60;
        h--;
    }else if (s == 1 && m == 0 && h == 0 && d > 0) {
        h = 23;
        m = 59;
        s = 60;
        d--;
    }else if (s == 1 && m == 0 && h == 0 &&d == 0 && y > 0) {
        d = 364;
        h = 23;
        m = 59;
        s = 60;
        y--;
    }
    // Фрагменты кода таймера позволяют проверить условие для остановки таймера, останавливают его если условие выполнено, изменяют отображаемый текст с временем, и воспроизводят звуковой файл при окончании работы таймера. 
    s--;
    stop = checkTimer(y, d, h, m, s); // Функция `checkTimer` проверяет условие времени и возвращает `true`, если время для остановки таймера достигнуто.
    if (stop == true) { 
        clearInterval(timerInterval); // Останавливает таймер, представленный переменной `timerInterval`
        changeText(y, d, h, m, s); // Функция `changeText` изменяет отображаемый текст для периода времени `y` (год), `d` (день), `h` (час), `m` (минута), `s` (секунда).
        soundEnd.src = "./sounds/08 - Scott Jopin - The Entertainer.mp3"; // Указывает источник звукового файла, который будет проигран по завершении таймера.
        soundEnd.play(); // Воспроизводит звуковой файл.
    } else {
        changeText(y, d, h, m, s); 
    }
}

function changeText(y, d, h, m, s) {
    timeoutput.innerHTML = `${y} : ${d} : ${h} : ${m} :  ${s}`; // Найди переменные из тела и перенеси их в поле вывода
}

function checkTimer(y, d, h, m, s) {
    if (y == 0 && d == 0 && h == 0 && m == 0 && s == 0) { // В данной строке происходит проверка условия: если все значения времени равны нулю, то функция возвращает `true` (время для остановки таймера достигнуто), иначе функция возвращает `false`.
        return true; // Возвращает `true`, если условие времени для остановки таймера выполнено.
    } else {
        return false; // Возвращает `false`, если условие времени для остановки таймера не выполнено.
    } //Можно ли убрать полность else, по сути же если не истина, то не входи, а значит ничего не делай
}