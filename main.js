document.body.style.color = "#000";
let ifDown=false;
//先設定//
let player = {
  x: 100,
  y: 600,
  width: 40,
  height: 40
};
//玩家預設位子//
let playerPx = window.screen.width / 2 - player.width / 2;
let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
main = ctx.strokeRect(playerPx, player.y, player.width, player.height);
console.log(window.innerWidth)
console.log(window.innerHeight)
ctx.beginPath(360, 200);
ctx.moveTo(360, 200);
ctx.lineTo(410, 120);
ctx.lineTo(510, 120);
ctx.lineTo(560, 200);
ctx.lineTo(510, 280);
ctx.lineTo(410, 280);
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();
//畫出基礎物件//
canvas.addEventListener("pointerdown", function() {
  ifDown = true;
});
canvas.addEventListener("pointerup", function() {
  ifDown = false;
});
canvas.addEventListener("pointermove", function(e) {
  player.x = e.clientX;
  player.y = e.clientY;
});
//先判斷是否落指//
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath(360, 200);
  ctx.moveTo(360, 200);
  ctx.lineTo(410, 120);
  ctx.lineTo(510, 120);
  ctx.lineTo(560, 200);
  ctx.lineTo(510, 280);
  ctx.lineTo(410, 280);
  ctx.closePath();
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.strokeRect(player.x,player.y,40,40);
  ctx.strokeStyle="#ffffff";
  requestAnimationFrame(draw);
  canvas.addEventListener("pointermove", function(e) {
  player.x = e.clientX;
  player.y = e.clientY;
});
};
draw();
//角色移動//