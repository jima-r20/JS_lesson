'use strict';
alert('スクリプト「2-3.js」を読み込みます\n「2-3.js」はDOM操作です¥nページを操作してみてください');

{
    // 要素の取得
    // id属性がついている場合：getElementById('target')
    // １つの要素を取得するなら：querySelector('section h1')
    // 複数要素を取得するなら：querySelectorAll('ul > li');
    // 
    // const update = ()=>{
    //     document.getElementById('target').textContent = 'Changed!';
    //     document.querySelectorAll('p').forEach((p, index)=> {
    //         p.textContent = `${index}番目のpです。`;
    //     });
    // }
    // setTimeout(update, 1000);    // １秒後にupdate

    document.getElementById('btn1').addEventListener('click', ()=>{
        const targetNode1 = document.getElementById('target1');

        targetNode1.textContent = 'Changed';
        targetNode1.title = 'This is title';
        // targetNode.className = 'my-color my-border';
        // targetNode.classList.add('my-color');    //  上の行と同じ操作
        targetNode1.classList.toggle('my-color');
    });

    // カスタムデータ属性の扱い
    document.getElementById('btn2').addEventListener('click', ()=>{
        const targetNode2 = document.getElementById('target2');
        targetNode2.textContent = targetNode2.dataset.translation;
    });

    // 要素の追加
    document.getElementById('btn3').addEventListener('click', ()=>{
        const item3 = document.createElement('li');
        item3.textContent = 'add item'; // 追加する要素
        const list1 = document.getElementById('list1');
        list1.appendChild(item3);  // 追加した要素の格納先指定
    });

    // 要素の複製
    document.getElementById('btn4').addEventListener('click', ()=>{
        const list2 = document.getElementById('list2');
        const item0 = list2.querySelectorAll('li')[0];
        const copy = item0.cloneNode(true); //trueの場合は要素の中身も取得、falseの場合は中身が空の要素を取得
        const item2 = list2.querySelectorAll('li')[2];
        list2.insertBefore(copy, item2);  
    });
    
    // 要素の削除
    document.getElementById('btn5').addEventListener('click', ()=>{
        const list3 = document.getElementById('list3');
        const item1 = list3.querySelectorAll('li')[1];
        list3.removeChild(item1);
    });
    
    // input要素に入力された値を使って要素作成
    document.getElementById('btn6').addEventListener('click', ()=>{
        const li = document.createElement('li');
        const text = document.querySelector('input');
        li.textContent = text.value;
        document.getElementById('input-item').appendChild(li);

        text.value = '';    // textの値を空文字に
        text.focus();   // input要素へフォーカス
    });
    
    // セレクトアイテムで選択された値を使って要素を作成
    document.getElementById('btn7').addEventListener('click', ()=> {
        const li = document.createElement('li');
        const color = document.querySelector('select');
        li.textContent = `選択した色：${color.value} 選択肢番号：${color.selectedIndex}`;
        document.getElementById('select-item').appendChild(li);
    });

    // ラジオボタンで選択された値を使って要素を作成
    document.getElementById('btn8').addEventListener('click', ()=> {
        const colors = document.getElementById('radio').querySelectorAll('input');
        let selectedColor;
        
        colors.forEach(color => {   // (color) =>
            if(color.checked === true){
                selectedColor = color.value;
            }
        });
        const li = document.createElement('li');
        li.textContent = selectedColor;
        document.getElementById('radio-item').appendChild(li);
    });
    
    // チェックボックスで選択された値を使って要素を作成
    document.getElementById('btn9').addEventListener('click', ()=> {
        const colors = document.getElementById('checkbox').querySelectorAll('input');
        let selectedColors = [];

        colors.forEach(color => {
            if(color.checked === true){
                selectedColors.push(color.value);
            }
        });
        const li = document.createElement('li');
        li.textContent = selectedColors;    //selectedColors.join(',');
        document.getElementById('checkbox-item').appendChild(li);
    });

    // イベント要素
    // ダブルクリック
    document.getElementById('btn10').addEventListener('dblclick',()=> {
        console.log('Double Clicked');
    });
    // マウスムーブ
    document.getElementById('btn11').addEventListener('click', ()=> {
        document.addEventListener('mousemove', e => {
            console.log(`Mouse Moving Coordinate is ${e.clientX} ${e.clientY}`);    // 座標表示
        });
    });
    // キーボードの押されたボタン
    document.getElementById('btn12').addEventListener('click', ()=> {
        document.addEventListener('keydown', e => {
            console.log(`Keydown：${e.key}`);    // 座標表示
        });
    });
    // テキストエリアの状態と文字数カウント、入力確定検知
    const text = document.querySelector('textarea');
    text.addEventListener('focus', () => {
        console.log('Focused');
    });
    text.addEventListener('blur', () => {
        console.log('Blured');
    });
    text.addEventListener('input', () => {
        console.log(text.value.length);
    });
    text.addEventListener('change', () => {
        console.log('Changed');
    });

    // フォームの送信
    // document.querySelector('form').addEventListener('submit', () => {   // ページ遷移のある場合
    document.querySelector('form').addEventListener('submit', e => {   // ページ遷移のない場合
        e.preventDefault(); // ページ遷移を行わない設定

        console.log('Submnited');
    });

    // イベントの伝搬
    document.getElementById('todo').addEventListener('click', e => {
        if(e.target.nodeName === 'LI'){
            e.target.classList.toggle('done');
        }
    });

}