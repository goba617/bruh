document.body.style.color="#000";
let player={
  x:100,
  y:600,
  width:40,
  height:40
};
let playerPx=window.screen.width/2 - player.width/2;
let canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.screen.height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffffff";
ctx.lineWidth=2;
main = ctx.strokeRect(playerPx,player.y, player.width, player.height);
console.log(window.screen.height)
canvas.addEventListener("pointerdown",function() {
  let ifDown = true;
});
canvas.addEventListener("pointerup",function(){
  let ifDown = false;
});
canvas.addEventListener("pointermove",function(e){
  
});
