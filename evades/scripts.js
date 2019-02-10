
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext("2d");

    var deltaX = 0;
    var deltaY = 0;

    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

    var keys = [];

    function keysPressed(e) {
        // store an entry for every key pressed
        keys[e.keyCode] = true;

        // left
        if (keys[37]||keys[65]) {
          deltaX -= 2;
        }

        // right
        if (keys[39]||keys[68]) {
          deltaX += 2;
        }

        // down
        if (keys[38]||keys[87]) {
          deltaY -= 2;
        }

        // up
        if (keys[40]||keys[83]) {
          deltaY += 2;
        }

		e.preventDefault();
    }

    function keysReleased(e) {
        // mark keys that were released
        keys[e.keyCode] = false;
    }

    function drawTriangle(x, y) {
      // the triangle
      context.beginPath();
      context.moveTo(x + 200, y + 100);
      context.lineTo(x + 170, y + 150);
      context.lineTo(x + 230, y + 150);
      context.closePath();

      // the outline
      context.lineWidth = 10;
      context.strokeStyle = "rgba(102, 102, 102, 1)";
      context.stroke();

      // the fill color
      context.fillStyle = "rgba(255, 204, 0, 1)";
      context.fill();
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawTriangle(deltaX, deltaY);

      requestAnimationFrame(animate);
    }
    animate();


// var canvas = document.querySelector("#mycanvas");
// var context = canvas.getContext("2d");
// var X = 0;
// var Y = 0;
//
// // window.addEventListener("keydown", moveSomething, false);
// function moveSomething(e){
//   switch(e.keyCode){
//     case 37:
//       X-=2;
//       break;
//     case 38:
//       Y-=2;
//       break;
//     case 39:
//       X+=2;
//       break;
//     case 40:
//       Y+=2;
//       break;
//   }
//   e.preventDefault();
//   drawTriangle();
// }
// function drawTriangle() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   // the triangle
//   context.beginPath();
//   context.moveTo(100+X, 100+Y);
//   context.lineTo(70+X, 150+Y);
//   context.lineTo(130+X, 150+Y);
//   context.closePath();
//
//   // the outline
//   context.lineWidth = 10;
//   context.strokeStyle = "rgba(102, 102, 102, 1)";
//   context.stroke();
//
//   // the fill color
//   context.fillStyle = "rgba(255, 204, 0, 1)";
//   context.fill();
// }
// drawTriangle();
//
// var canvas = document.querySelector("#mycanvas");
// var context = canvas.getContext("2d");
// var X = 0;
// var Y = 0;
//
// window.addEventListener("keydown",moveSomething,false);
// function moveSomething(e){
//   switch(e.keyCode){
//     case 37:
//       X-=2;
//       break;
//     case 38:
//       Y-=2;
//       break;
//     case 39:
//       X+=2;
//       break;
//     case 40:
//       Y+=2;
//       break;
//   }
//   e.preventDefault();
//   drawTriangle();
// }
// function drawTriangle() {
//   // the triangle
//   contect.clearRect(0,0,canvas.width,canvas.height);
//   context.beginPath();
//   context.moveTo(200+X, 100+Y);
//   context.lineTo(170+X, 150+Y);
//   context.lineTo(230+X, 150+Y);
//   context.closePath();
//
//   // the outline
//   context.lineWidth = 10;
//   context.strokeStyle = "rgba(102, 102, 102, 1)";
//   context.stroke();
//
//   // the fill color
//   context.fillStyle = "rgba(255, 204, 0, 1)";
//   context.fill();
// }
// drawTriangle();
