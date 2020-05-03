'use strict';

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        // 表示中の画像のサムネイルにcurrentクラスを追加
        const li = document.createElement('li');
        if(index === currentIndex){
            li.classList.add('current');
        }

        // クリックした画像をmainに表示
        li.addEventListener('click', ()=> {
            mainImage.src = image;
            // サムネイルのopacity変更
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        // 配列images内の画像をリストに追加(サムネイル表示)
        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);

    });

    const next = document.getElementById('next');
    next.addEventListener('click', ()=> {
        let target = currentIndex + 1;
        if(target === images.length){
            target = 0;
        }
        // 上ですでに.thumbnails > liに対してclickが発生したときの処理を登録しているため
        // .click()とすることで登録した処理を呼び出せる
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', ()=> {
        let target = currentIndex - 1;
        if(target < 0){
            target = images.length - 1;
        }
        // 上ですでに.thumbnails > liに対してclickが発生したときの処理を登録しているため
        // .click()とすることで登録した処理を呼び出せる
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(()=> {
            next.click();
            playSlideshow();
        }, 1000);
    }

    let isPlaying = false;

    // スライドショーの自動再生
    const play = document.getElementById('play');
    play.addEventListener('click', ()=> {
        if(isPlaying === false){
            playSlideshow();
            play.textContent = 'Pause';
        }else{
            clearTimeout(timeoutId);
            play.textContent = 'Play';
        }
        isPlaying = !isPlaying;
    });

}