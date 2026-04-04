document.body.style.color = "#000";
let timer={a:0,b:0,cha:0};
let ifDown = false;
let ifBreak = false;
let score = 0;
//先設定//
let player = {
  x: 100,
  y: 600,
  width: 40,
  height: 40
};
//玩家預設位子//
let bullet = [];
let boss = {
  x:window.innerWidth/2-100,
  y:200
};
let mid = {
  x: boss.x+100,
  y: 280
};
let bulleta = [];
let playerPx = window.screen.width / 2 - player.width / 2;
let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = 1000;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
main = ctx.strokeRect(playerPx, player.y, player.width, player.height);
console.log(window.innerWidth)
console.log(window.innerHeight)
ctx.beginPath(window.innerWidth, 200);
ctx.moveTo(window.innerWidth, 200);
ctx.lineTo(window.innerWidth+50, 120);
ctx.lineTo(window.innerWidth+100, 120);
ctx.lineTo(window.innerWidth+50, 200);
ctx.lineTo(window.innerWidth-50, 280);
ctx.lineTo(window.innerWidth-100, 280);
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();
//畫出基礎物件//
function spawnB(x, y, vx, vy, type) {
  bullet.push({ x, y, vx, vy, type });
};
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
  canvas.addEventListener("pointermove", function(e) {
    player.x = e.clientX;
    player.y = e.clientY;
  });
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(360, 200);
  ctx.moveTo(boss.x, boss.y);
  ctx.lineTo(boss.x+50, boss.y-80);
  ctx.lineTo(boss.x+150, boss.y-80);
  ctx.lineTo(boss.x+200, boss.y);
  ctx.lineTo(boss.x+150, boss.y+80);
  ctx.lineTo(boss.x+50, boss.y+80);
  ctx.closePath();
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.strokeRect(player.x, player.y, 40, 40);
  ctx.strokeStyle = "#ffffff";
  
  timer.a++;
  timer.b++;
  timer.cha++;
  //以下使用計時器創造子彈//
  if(timer.a>=25){
    timer.a = 0;
    spawnB(mid.x,mid.y,0,5,"enemy");
  };
  if(timer.b>=25){
    timer.b = 0;
    spawnB(mid.x,mid.y,2,5,"enemy");
  };
  if(timer.cha>=30){
    timer.cha = 0;
    spawnB(player.x+player.width/2,player.y-player.height,0,-20,"player");
  };
  //再使用迴圈真的畫出子彈//
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < bullet.length; i++) {
    let b = bullet[i];
    b.x += b.vx;
    b.y += b.vy;
    ctx.beginPath();
    ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
    ctx.fill();
    if(b.type==="enemy"){
      if(b.x > player.x&&b.x < player.x+player.width&&b.y > player.y&&b.y < player.y+player.height){
        bullet.splice(i,1);
        i--;
        console.log("stop")
      };
    };
    if (b.type === "player") {
      if (b.x > boss.x && b.x < boss.x + 200 &&
        b.y > boss.y - 80 && b.y < boss.y + 80) {
      bullet.splice(i, 1);
      i--;
      score = score +100
        console.log("nice")
        document.getElementById("scores").innerText="your score="+score;
      };
    };
  };
  for (let i = 0; i < bullet.length; i++) {
  let b = bullet[i];

  // 檢查是否超出邊界（上下左右都要判斷）
  if (b.y < 0 || b.y > canvas.height || b.x < 0 || b.x > canvas.width) {
    bullet.splice(i, 1); 
    i--; 
  };
};
    requestAnimationFrame(draw);
};
draw();
//啟動//
