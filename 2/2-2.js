'use strict';

{
    // 配列
    const otherScores = [10, 20];
    // スプレッド演算子
    const scores = [80, 90, 40, 70, ...otherScores];
    // 配列の操作(先頭or末尾)
    scores.push(60, 50);    //配列末尾に追加
    scores.shift(); //先頭から要素削除
    // 配列の操作(配列の途中)
    scores.splice(2, 1, 25, 35);

    for(let i = 0; i < scores.length; i++){
        console.log(`for文 ${i}: ${scores[i]}`);
    }

    // forEach()
    scores.forEach((score, index) => {  //  2つ目の引数でインデックス情報を受け取ることが可能
        console.log(`forEach ${index}: ${score}`);
    });

    // 配列の分割代入
    const prices = [200, 450, 180, 320];
    const [a, b, ...others] = prices;
    console.log(a);
    console.log(b);
    console.log(others);
    
    // 数値の入れ替え
    let x = 30;
    let y = 70;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);

    // map()
    const updatedPrices = prices.map((price) => {
        return price + 20;
    });
    console.log(`map: ${updatedPrices}`);

    // filter(): trueを返した要素だけが抽出される
    const numbers = [1, 4, 7, 8, 10];
    const evenNumbers = numbers.filter(number => {
        return number % 2 === 0;
    });
    console.log(`filter: ${evenNumbers}`);
}

{
    // オブジェクト
    const point = {
        x: 100, // 行全体:プロパティ  x:名前(キー), 100:値
        y: 180,
    };
    // 値の変更
    point.x = 120;

    console.log(point);
    console.log(point.x);

    // プロパティの追加と削除
    point.z = 90;   // 追加
    delete point.y; // 削除
    console.log(point);

    // プロパティの列挙(オブジェクトにforEach()は使えない)
    // Object.keys()でオブジェクトのキーを配列で取得(配列にはforEach()が使える)
    const keys = Object.keys(point);
    keys.forEach((key) => {
        console.log(`Key: ${key}, Value: ${point[key]}`);
    })

    // オブジェクトの配列
    const points = [
        {x: 30, y: 20},
        {x: 10, y: 50},
        {x: 40, y: 40},
    ];
    console.log(points[1].y);   // 2つ目のオブジェクトのyの値を表示

    // 複雑なデータの扱い
    let x = [1, 2];
    let y = x;  // この場合配列xのアドレスが参照される
    x[0] = 5;
    console.log(x, y);

    //  値そのものを代入したい場合: スプレッド演算子
    let a = [1, 2];
    let b = [...a]; // ここ
    a[0] = 5;
    console.log(a, b);

}

{
    // 文字列操作
    const str = 'hello';
    console.log(str.length);
    // .substring(開始位置, 終了位置)
    console.log(str.substring(2, 4));   // 'll'を取得
    // 1文字取得
    console.log(str[1]);

    // 文字列の結合
    const d = [2019, 4, 27];
    console.log(d.join("/"));
    // 文字列の分割
    const t = "12:05:33";
    console.log(t.split(":"));
    const [hour, minute, second] = t.split(":");    // 分割代入する方法
    console.log(hour, minute, second);
}

{
    // 数値操作
    const scores = [10, 3, 9];
    let sum = 0;
    scores.forEach((score) =>{
        sum += score;
    });
    const avg = sum/scores.length;

    console.log(avg);
    console.log(Math.floor(avg));   // 小数点以下切り捨て
    console.log(Math.ceil(avg));    // 小数点以下繰り上げ
    console.log(Math.round(avg));   // 四捨五入
    console.log(avg.toFixed(3));    // 小数点以下3桁まで表示

    console.log(Math.random()); // 0以上1未満の範囲でランダム
    
    // サイコロの実装 Math.floor()：整数値で表現
    console.log(Math.floor(Math.random() * 6) + 1);

}

{
    // 日時
    const d = new Date();
    console.log(d);
    console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);

    const date = new Date(2020, 3); // 2020/04/01 00:00:00
    console.log(date);  
    date.setHours(10, 20, 30);  // 2020/04/01 10:20:30
    date.setDate(date.getDate() + 3);   // 2020/04/04 10:20:30
    console.log(date);
}

{
    // ダイアログ表示
    alert("hello");

    const answer = confirm("削除しますか？");
    if(answer){
        alert("削除しました");
    }else{
        console.log("キャンセルしました");
    }
}

{
    let i = 0;

    function showTime(){
        console.log(new Date());        
        const timeoutId = setTimeout(showTime, 1000);
        i++;
        if(i > 2){
            clearTimeout(timeoutId);  // 3回時刻を表示したら止める
        }
    }
    showTime();
}

{
    const name1 = "ryuji";
    const name2 = 420;
    try{
        console.log(name1.toUpperCase());
        console.log(name2.toUpperCase());       
    }catch(e){
        console.log("エラーが発生しました");
    }
    console.log("Finish");
}

{
    // クラスとインスタンス
    class Post {    // 親クラス
        constructor(text){
            this.text = text;
            this.likeCount = 0;
        }
        show(){
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }
        like(){
            this.likeCount ++;
            this.show();
        }

        // 静的メソッド
        // thisは使えない
        static showInfo(){
            console.log("Information");
        }
    }

    // クラスの継承
    class SponsoredPost extends Post {  //子クラス
        constructor(text, sponsor){
            super(text);
            this.sponsor = sponsor;
        }
        show(){
            super.show();
            console.log(`...sponsored by ${this.sponsor}`);
        }
    }

    const posts = [
        new Post("hoge"),
        new Post("baz"),
        new SponsoredPost("bar", "SPON"),
    ];

    Post.showInfo();
    posts[2].show();
    posts[0].like();
    
}