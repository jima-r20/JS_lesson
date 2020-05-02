'use strict';

{
    const words = [
        'marlboro',
        'peace',
        'lucky strike',
        'mebius',
        'lark',
        'kent',
        'winston',
        'seven star',
        'hope',
        'echo',
        'parliament',
        'kool',
        'hi-lite',
        'american spirit',
        'jps',
        'che',
        'pall mall',
    ];
    let word;
    const target = document.getElementById('target');
    let loc;
    let score;
    let miss;
    const timeLimit = 30 * 1000;
    let startTime;
    let isPlaying = false;
    let n = 0;
 
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    const memoryLabel = document.getElementById('memory');

    // 正しい文字が入力された場合の処理
    function updateTarget(){
        let placeholder = '';
        for(let i = 0; i < loc; i++){
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc); // word.substring(): '_'に置き換わっていない残りの文字列を取得
    }

    // タイマー処理
    function updateTimer(){
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutId = setTimeout(() =>{
            updateTimer();
        }, 10);

        if(timeLeft < 0){
            isPlaying = false;
            clearTimeout(timeoutId);
            timerLabel.textContent = '0.00';
            setTimeout(() =>{   // ブラウザで Time leftが0.00になるように調整
                showResult();
            }, 100);
            target.textContent = 'Click to Start';
        }
    }

    // 結果表示処理
    function showResult(){
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100; //分母が0の場合の条件分岐
        alert(`${score} Letters, ${miss} Misses, ${accuracy.toFixed(2)}% Accuracy`);
        addMemory(accuracy);
    }
    
    // 結果リストの追加
    function addMemory(accuracy){
        const memoryList = document.createElement('li');
        memoryList.textContent = `Take${n} ： ${score} Letters, ${miss} Misses, ${accuracy.toFixed(2)}% Accuracy`;
        memoryLabel.appendChild(memoryList);
    }

    // スタート時の処理
    window.addEventListener('click', () => {
        if(isPlaying === true){
            return;
        }

        // 初期化処理
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word = words[Math.floor(Math.random() * words.length)];

        isPlaying = true;
        n++;
        target.textContent = word;
        startTime = Date.now();
        updateTimer();
    });

    // ゲーム中の処理
    window.addEventListener('keydown', e => {
        if(isPlaying !== true){
            return;
        }
        if(e.key === word[loc]){
            loc++;
            if(loc === word.length){
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            updateTarget();
            score++;
            scoreLabel.textContent = score;
        }else{
            miss++;
            missLabel.textContent = miss;
        }
    });
}