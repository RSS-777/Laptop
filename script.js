let startAnimation = false;
let time = 0;
let intervalAnimation;
let intervalTime;
let rotateY = 0,
    rotateX = 0;

function rotateLapTop(key) {
    document.querySelector('.wraper').style.perspective = '2500px';
    if (key.keyCode === 37) rotateY -= 4;
    else if (key.keyCode === 38) rotateX += 4;
    else if (key.keyCode === 39) rotateY += 4;
    else if (key.keyCode === 40) rotateX -= 4;

    let container = document.querySelector('.container');
    container.style.transformOrigin = 'center center';
    container.style.left = '0';
    container.style.top = '40px';
    container.style.transform =
        'rotateY(' + rotateY + 'deg) ' +
        'rotateX(' + rotateX + 'deg) ';
}

document.addEventListener('keydown', (event) => {
    rotateLapTop(event)
    clearInterval(intervalAnimation)
    time = 5;
    animationFunc()
});

function active() {
    time = 5;
    animationFunc()
    clearInterval(intervalAnimation);
    document.querySelector('.wraper').style.perspective = '1800px';
    const container = document.querySelector('.container');
    container.style.transform = 'rotateY(0deg) rotateX(-15deg)';
    container.style.top = '0';
};

function animationFunc() {
    clearInterval(intervalTime);
    if (time === 0) {
        intervalAnimation = setInterval(() => rotateLapTop({ keyCode: 39 }), 60);
        clearInterval(intervalTime);
    } else {
        intervalTime = setInterval(() => {
            time = time - 1;
            console.log(time);
            if (time === 0) {
                intervalAnimation = setInterval(() => rotateLapTop({ keyCode: 39 }), 60);
                clearInterval(intervalTime);
            }
        }, 1000)
    }
}

animationFunc()
