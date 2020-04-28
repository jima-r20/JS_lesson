'use strict'; //エラーチェック用

// 出力 console.log
console.log("Hello\n\tWorld");

// 定数 const
const price1 = 150;
console.log(`total(const) = ${price1 * 140}`);

// 変数 let
let price2 = 170;
console.log(`total(let_bef) = ${price2 * 140}`);
price2 += 30;
console.log(`total(let_aft) = ${price2 * 140}`);

// データの型
console.log(typeof "hello");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// データの扱い
console.log("5" + 3);
console.log(parseInt("5", 10) + 3); // 文字列"5"を10進数数値として扱う

// 条件分岐if文
const score = 40;
if(score >= 80){
    console.log("Great");
}else{
    console.log("OK...");
}
// 条件分岐簡略化Ver
score >= 80 ? console.log("Great") : console.log("OK...");

// 条件分岐swich文
const signal = "blue";
switch(signal){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
        break;
    case "blue":
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Wrong Signal");
        break;
}

// continueとbreak
for( let i = 1; i <= 10; i++){
    if(i === 4){
        continue;   // 処理をスキップ
    }
    if(i % 3 === 0){
        continue;   // 処理をスキップ
    }
    if(i === 7){
        break;  // for文の終了
    }
    console.log(i);
}
