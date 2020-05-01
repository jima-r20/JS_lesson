'use strict';

{
    const btn1  = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
        const results = ['大吉', '中吉', '吉', '末吉', '凶', '大凶'];
        const n = Math.floor(Math.random() * results.length);
        btn1.textContent = results[n];
    });
}

{
    const btn2  = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        const n = Math.random();
        if(n < 0.1){ // 10%
            btn2.textContent = '大吉';
        }else if(n < 0.4){  // 30%
            btn2.textContent = '吉';
        }else{  // 60%
            btn2.textContent = '凶';
        }
    });
}