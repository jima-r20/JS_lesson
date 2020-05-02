'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([   //問題の出題順をシャッフル
        {q: '４月を英語で？', c: ['April', 'May', 'August']},   //0番目の要素が正解
        {q: 'G○○gle：○に入る文字は？', c: ['o', 'e', 'c']},
        {q: 'コ□ナウイルス：□に入る文字は？', c: ['ロ', 'リ', 'ル']},
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;


    //フィッシャー・イェーツのシャッフルアルゴリズム
    function shuffle(arr){  
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    // 解答の正誤表示
    function checkAnswer(li){
        if(isAnswered){
            return;
        }
        isAnswered = true;
        if(li.textContent === quizSet[currentNum].c[0]){
            li.classList.add('correct');
            score++;
        }else{
            li.classList.add('wrong');
        }

        // Nextボタンの有効化
        btn.classList.remove('disabled');
    }

    // クイズのセット処理
    function setQuiz(){
        isAnswered = false;
        question.textContent = quizSet[currentNum].q;

        // 現在表示している問題を削除
        while(choices.firstChild){
            choices.removeChild(choices.firstChild);
        }

        // shuffleの引数をquizeSet[currentNum].cのままにすると
        // 配列の中身自体も入れ替わってしまうのでスプレッド演算子[...]を用いて
        // quizeSet[currentNum].cのコピーを渡してあげる
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach( choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);
        });
        
        // 最終問題のNextボタン表示
        if(currentNum === quizSet.length -1){
            btn.textContent = 'Show Score';
        }
    }

    setQuiz();

    // Nextボタンを押した際の処理
    btn.addEventListener('click', () => {
        if(btn.classList.contains('disabled')){
            return;
        }
        btn.classList.add('disabled');

        if(currentNum === quizSet.length - 1){
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');  // スコア表示
        }else{
            currentNum++;
            setQuiz();
        }
    });

}