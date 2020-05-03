'use strict';

{
    class Panel {
        constructor(){
            const section = document.createElement('section');
            section.classList.add('panel');

            this.img = document.createElement('img');   // 画像領域の作成
            this.img.src = this.getRandomImage();   // 初期画像の取得

            this.timeoutId = undefined;

            this.stop = document.createElement('div');  // STOPボタン領域の作成
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop', 'inactive');
            this.stop.addEventListener('click', ()=> {  // STOPボタンが押されたときの処理
                if(this.stop.classList.contains('inactive')){
                    return;
                }
                this.stop.classList.add('inactive');
                clearTimeout(this.timeoutId);

                panelsLeft--;

                if(panelsLeft === 0){
                    spin.classList.remove('inactive');
                    panelsLeft = 3;
                    checkResult();
                }
            });

            section.appendChild(this.img);  // 画像領域の追加
            section.appendChild(this.stop); //STOPボタン領域の追加

            const main = document.querySelector('main');
            main.appendChild(section);
        }

        // 画像のランダム表示(戻り値)
        getRandomImage(){
            const images = [
                'img/seven.png',
                'img/bell.png',
                'img/cherry.png',
            ];
            return images[Math.floor(Math.random() * images.length)];
        }

        // スピン処理
        spin(){
            this.img.src = this.getRandomImage();
            this.timeoutId =setTimeout(()=> {
                this.spin();
            }, 50);
        }

        isUnmatched(p1, p2){
            // if((this.img.src !== p1.img.src) && (this.img.src !== p2.img.src)){
            //     return true;
            // }else{
            //     return false;
            // }
            return (this.img.src !== p1.img.src) && (this.img.src !== p2.img.src);
        }

        unmatch(){
            this.img.classList.add('unmatched');
        }

        activate(){
            this.img.classList.remove('unmatched');
            this.stop.classList.remove('inactive');
        }

    }   //classここまで

    // 結果判定処理
    function checkResult(){
        if(panels[0].isUnmatched(panels[1], panels[2])){
            panels[0].unmatch();
        }
        if(panels[1].isUnmatched(panels[0], panels[2])){
            panels[1].unmatch();
        }
        if(panels[2].isUnmatched(panels[0], panels[1])){
            panels[2].unmatch();
        }
    }

    const panels = [
        new Panel(),
        new Panel(),
        new Panel(),
    ];

    let panelsLeft = 3;

    const spin = document.getElementById('spin');
    spin.addEventListener('click', ()=> {
        if(spin.classList.contains('inactive')){
            return;
        }
        spin.classList.add('inactive');
        panels.forEach(panel => {
            panel.activate();
            panel.spin();
        });
    });

}