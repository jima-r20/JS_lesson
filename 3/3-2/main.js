'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function countUp() {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');  // .padStart：String型でのみ使える
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent = `${m}:${s}.${ms}`;

        timeoutId = setTimeout(() => {
            countUp();
        }, 10); //  10msec後にcountUp()を呼び出す処理
    }

    // 対象が<button>の場合のみ有効
    // function setButtonStateInitial(){
    //     start.disabled = false;  //disabledプロパティ：有効の場合false, 無効の場合true
    //     stop.disabled = true;
    //     reset.disabled = true;
    // }
    // function setButtonStateRunning(){
    //     start.disabled = true;
    //     stop.disabled = false;
    //     reset.disabled = true;
    // }
    // function setButtonStateStopped(){
    //     start.disabled = false;
    //     stop.disabled = true;
    //     reset.disabled = false;
    // }

    // 対象がボタンでない場合は以下のように記述
    function setButtonStateInitial(){
        start.classList.remove('inactive'); 
        stop.classList.add('inactive'); 
        reset.classList.add('inactive'); 
    }
    function setButtonStateRunning(){
        start.classList.add('inactive'); 
        stop.classList.remove('inactive'); 
        reset.classList.add('inactive');         
    }
    function setButtonStateStopped(){
        start.classList.remove('inactive'); 
        stop.classList.add('inactive'); 
        reset.classList.remove('inactive');         
    }

    setButtonStateInitial();

    start.addEventListener('click', () => {
        if(start.classList.contains('inactive') === true){
            return;
        }
        setButtonStateRunning();
        startTime = Date.now();
        countUp();
    });
    stop.addEventListener('click', () => {
        if(stop.classList.contains('inactive') === true){
            return;
        }
        setButtonStateStopped();
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    });
    reset.addEventListener('click', () => {
        if(reset.classList.contains('inactive') === true){
            return;
        }
        setButtonStateInitial();
        timer.textContent = '00:00.000';
        elapsedTime = 0;
    });
}