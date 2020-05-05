'use strict';

{
    let t = 0;

    function draw1(){
        const cvs1 = document.getElementById('cvs1');
        if(typeof cvs1.getContext === 'undefined'){
            return;
        }
        const ctx1 = cvs1.getContext('2d');
        
        
        ctx1.fillStyle = 'pink'; // 塗り潰しの色変更
        ctx1.strokeStyle = '#f00';   // 線の色変更
        //ctx1.lineWidth = 8;  // 線の太さ変更
        // ctx1.lineJoin = 'round';  // 枠線の角のスタイル変更
        //ctx1.lineJoin = 'bevel';  // 枠線の角のスタイル変更
        
        // ctx1.fillRect(x, y, width, height);
        ctx1.fillRect(50, 50, 50, 50);    // 塗り潰された四角
        ctx1.strokeRect(50, 50, 50, 50);     // 枠のみの四角
        
        // .fillStyleや.strokeStyleは引き継がれるため
        // 変更したい場合には再度設定すれば良い
        ctx1.fillStyle = 'skyblue';
        ctx1.strokeStyle = '#00b';
        ctx1.fillRect(70, 70, 50, 50);
        ctx1.strokeRect(70, 70, 50, 50);
        
        // 線を引く
        ctx1.strokeStyle = '#000';
        ctx1.beginPath();
        ctx1.moveTo(150, 50);
        ctx1.lineTo(200, 50);
        ctx1.lineTo(200, 100);
        ctx1.closePath();
        ctx1.stroke();

        // 線を引き、線で囲まれた内部を塗りつぶす
        ctx1.fillStyle = 'black';
        ctx1.strokeStyle = '#000';
        ctx1.beginPath();
        ctx1.moveTo(250, 50);
        ctx1.lineTo(300, 50);
        ctx1.lineTo(300, 100);
        ctx1.closePath();
        ctx1.fill();

        // 線のスタイル変更
        ctx1.beginPath();
        ctx1.moveTo(350, 50);
        ctx1.lineTo(450, 50);
        ctx1.setLineDash([5, 10]);  // 点線
        ctx1.stroke();

        ctx1.beginPath();
        ctx1.moveTo(350, 100);
        ctx1.lineTo(450, 100);
        ctx1.setLineDash([]);   // 実線に戻す
        ctx1.stroke();

        ctx1.beginPath();
        ctx1.moveTo(350, 150);
        ctx1.lineTo(450, 150);
        ctx1.lineWidth = 16;
        ctx1.lineCap = 'round'; // 線の端のスタイル変更
        ctx1.stroke();

        // 円弧を描く
        // ctx1.arc(x, y, r, start, end);
        ctx1.beginPath();
        ctx1.arc(520, 100, 50, 0, 2 * Math.PI);
        ctx1.lineWidth = 2;
        ctx1.stroke();
        
        ctx1.beginPath();
        ctx1.moveTo(520, 200);
        ctx1.arc(520, 200, 50, 0, 300 / 360 * 2 * Math.PI, true);    // ctx1.arc(x, y, r, start, end);
        ctx1.lineWidth = 2;
        ctx1.closePath();
        ctx1.fill();

        // 楕円を描く
        // ctx1.ellipse(x, y, rx, ry, rotation, start, end);
        ctx1.beginPath();
        ctx1.ellipse(270, 150, 50, 30, 0, 0, 2 * Math.PI);
        ctx1.stroke();

        
        // 影をつける
        ctx1.shadowOffsetX = 4;
        ctx1.shadowOffsetY = 4;
        ctx1.shadowBlur = 4;    // ぼかし度合い
        ctx1.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx1.fillRect(150,150, 50, 50);
    }

    function draw2(){
        // 線形グラデーション
        // ctx.createLinearGradient(x0, y0, x1, x2);
        const cvs2 = document.getElementById('cvs2');
        if(typeof cvs2.getContext === 'undefined'){
            return;
        }
        const ctx2 = cvs2.getContext('2d');
        const g2 = ctx2.createLinearGradient(0, 0, cvs2.width, 0);
        g2.addColorStop(0, '#f00');
        g2.addColorStop(1, '#00f');
        ctx2.fillStyle = g2;
        ctx2.fillRect(0, 0, cvs2.width, cvs2.height);
    }

    function draw3(){
        // 円形グラデーション
        // ctx.createRadialGradient(
        //  x0, y0, r0,
        //  x1, y1, r1
        // );
        const cvs3 = document.getElementById('cvs3');
        if(typeof cvs3.getContext === 'undefined'){
            return;
        }
        const ctx3 = cvs3.getContext('2d');
        const g3 = ctx3.createRadialGradient(
            cvs3.width / 2, cvs3.height / 2, 50,
            cvs3.width / 2, cvs3.height / 2, 500,    
        );
        g3.addColorStop(0, '#f00');
        g3.addColorStop(0.3, '#0f0');
        g3.addColorStop(1, '#00f');
        ctx3.fillStyle = g3;
        ctx3.fillRect(0, 0, cvs3.width, cvs3.height);
    }

    function draw4(){
        // テキストの描画
        const cvs4 = document.getElementById('cvs4');
        if(typeof cvs4.getContext === 'undefined'){
            return;
        }
        const ctx4 = cvs4.getContext('2d');

        ctx4.beginPath();
        ctx4.moveTo(0, 100);
        ctx4.lineTo(cvs4.width, 100);
        ctx4.moveTo(100, 0);
        ctx4.lineTo(100, cvs4.height);
        ctx4.stroke();
        
        ctx4.font = 'bold 64px Verdana';
        ctx4.fillText('Tokyo', 100, 100);   // ('Text', x, y)
        ctx4.textAlign = 'right';
        ctx4.textBaseline = 'top';
        ctx4.fillText('Tokyo', 100, 100, 100);   // ('Text', x, y, width)
        ctx4.textAlign = 'left';
        ctx4.textBaseline = 'top';
        ctx4.strokeText('Tokyo', 100, 100, 200);
    }

    function draw5(){
        // 画像の描画
        const cvs5 = document.getElementById('cvs5');
        if(typeof cvs5.getContext === 'undefined'){
            return;
        }
        const ctx5 = cvs5.getContext('2d');

        const img1 = document.createElement('img');
        img1.src = 'img/logo.png';
        img1.addEventListener('load', () => {
            // ctx5.drawImage(img, 0, 0);
            const pattern = ctx5.createPattern(img1, 'repeat-x');    // repeat, repeat-x, repeat-y, no-repeat
            ctx5.fillStyle = pattern;
            ctx5.fillRect(0, 0, cvs5.width, cvs5.height);
        });
    }

    function draw6(){
        // 画像の切り出し
        const cvs6 = document.getElementById('cvs6');
        if(typeof cvs5.getContext === 'undefined'){
            return;
        }
        const ctx6 = cvs6.getContext('2d');
        const img2 = document.createElement('img');
        img2.src = 'img/sprite.png';
        img2.addEventListener('load', ()=> {
            ctx6.drawImage(
                img2,
                // sx, sy, sw, sh,
                70 * 2, 70, 70, 70,
                // dx, dy, dw, dh
                0, 0, 35, 35
            );
        });
    }

    function draw7(){
        // 座標とスケーリング、
        const cvs7 = document.getElementById('cvs7');
        if(typeof cvs7.getContext === 'undefined'){
            return;
        }
        const ctx7 = cvs7.getContext('2d');
        ctx7.strokeStyle = 'red';
        ctx7.strokeRect(0, 0, 200, 200);
        ctx7.beginPath();
        ctx7.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
        ctx7.fillStyle = 'black';
        ctx7.fill();
        ctx7.beginPath();
        ctx7.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx7.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx7.fillStyle = 'skyblue';
        ctx7.fill();
        
        ctx7.save();    // 現在の座標やスケーリング情報をセーブ

        ctx7.scale(0.5, 0.5);   // 宣言以降の数値や座標をスケーリング
        ctx7.translate(400, 0); // 座標移動
        ctx7.rotate(45 / 360 * 2 * Math.PI);    //座標回転
        ctx7.strokeStyle = 'olive';
        ctx7.strokeRect(0, 0, 200, 200);
        ctx7.beginPath();
        ctx7.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
        ctx7.fillStyle = 'black';
        ctx7.fill();
        ctx7.beginPath();
        ctx7.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx7.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx7.fillStyle = 'skyblue';
        ctx7.fill();

        ctx7.restore(); // セーブしてあった情報を読み込み
        ctx7.fillStyle = 'black';
        ctx7.fillRect(80, 120, 40, 40);
    }
        
    function draw8(){
        // アニメーション
        const cvs8 = document.getElementById('cvs8');
        if(typeof cvs8.getContext === 'undefined'){
            return;
        }
        const ctx8 = cvs8.getContext('2d');
        ctx8.clearRect(0, 0, cvs8.width, cvs8.height);
        ctx8.beginPath();
        ctx8.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
        ctx8.fillStyle = 'black';
        ctx8.fill();
        ctx8.beginPath();
        ctx8.ellipse(80 + Math.sin(t/30), 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx8.ellipse(120+ Math.sin(t/30), 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx8.fillStyle = 'skyblue';
        ctx8.fill();

        // t++;
        // setTimeout(draw8(), 10);
        
    }

    function draw9(){
        const cvs9 = document.getElementById('cvs9');
        if(typeof cvs9.getContext === 'undefined'){
            return;
        }
        const ctx9 = cvs9.getContext('2d');
        // 高解像度ディスプレイ対応
        const CANVAS_WIDTH = 600;
        const CANVAS_HEIGHT = 240;
        const dpr = window.devicePixcelRatio || 1;  //devicePixcelRatioが取得できなかった場合には等倍である1を返す
        cvs9.width = CANVAS_WIDTH * dpr;
        cvs9.height = CANVAS_HEIGHT * dpr;
        ctx9.scale(dpr, dpr);
        cvs9.style.width = CANVAS_WIDTH + 'px';
        cvs9.style.height = CANVAS_HEIGHT + 'px';

        ctx9.font = 'bold 48px Verdana';
        ctx9.strokeText('Tokyo', 100, 100);
    }

    draw1();
    draw2();
    draw3();
    draw4();
    draw5();
    draw6();
    draw7();
    draw8();
    draw9();

}
