
     let activeValue = true;

     let rotateY = 0,
         rotateX = 0;
 
     function rotateLapTop(key) {
         document.querySelector('.wraper').style.perspective = '2000px';
         if (key.keyCode === 37) rotateY -= 4;
         else if (key.keyCode === 38) rotateX += 4;
         else if (key.keyCode === 39) rotateY += 4;
         else if (key.keyCode === 40) rotateX -= 4;
 
         let container = document.querySelector('.container');
         container.style.transformOrigin = 'center center';
         container.style.left = '0';
         container.style.top = '0';
         container.style.transform =
             'rotateY(' + rotateY + 'deg) ' +
             'rotateX(' + rotateX + 'deg) ';
     }

     document.addEventListener('keydown', rotateLapTop);

     if(activeValue === true) {
         setInterval(() => rotateLapTop({keyCode: 39}), 80)
     };

 function active() {
     document.querySelector('.container').style.transform = 'rotateY(0deg) rotateX(-20deg) translate(-50%, -50%)';
     document.querySelector('.wraper').style.perspective = '1800px';
     activeValue = false;
 }
