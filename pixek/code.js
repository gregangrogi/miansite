var canv = document.getElementById('canvas'),
  g = canv.getContext('2d')
var scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop = scrollingElement.scrollHeight;

var scx = 1280;
var scy = 640;
var ps = 10;
var pxls = new Array();
var clrs = ["#000000"];

function rnd(min, max) {
  return min + Math.random() * (max - min);
}

function rct(x, y, c){
  g.fillStyle = c;
  g.fillRect(x*ps, y*ps, ps, ps);
}

function create(x, y){
  for (let ix = 0; ix < x; ix++){
    pxls.push(new Array());
    for (let iy = 0; iy < y; iy++){
      pxls[ix].push(0);
    }}
}
function rfill(ver){
  for (let ix = 0; ix < pxls.length; ix++){
    for (let iy = 0; iy < pxls[0].length; iy++){
      if(Math.ceil(rnd(0, ver)) == ver){
        pxls[ix][iy] = 1;
    }}}
}
function rend1(){
  for (let ix = 0; ix < pxls.length; ix++){
    for (let iy = 0; iy < pxls[0].length; iy++){
      if (pxls[ix][iy+1] == 0){
        pxls[ix][iy] = 2;
}}}}
function rend2(){
  for (let ix = 0; ix < pxls.length; ix++){
    for (let iy = 0; iy < pxls[0].length; iy++){
      if (pxls[ix][iy] == 2){
        pxls[ix][iy+1] = pxls[ix][iy];
        pxls[ix][iy] = 0;

}}}}
function draw(){
  for (let ix = 0; ix < pxls.length; ix++){
    for (let iy = 0; iy < pxls[0].length; iy++){
      if (pxls[ix][iy]>0){
        rct(ix, iy, clrs[Math.ceil(pxls[ix][iy]/2)]);
      }
    }}
}
create(scx/ps, scy/ps);
rfill(10);

function mianloop(){
  //rend1();
  //rend2();
  draw();
  requestAnimationFrame(mianloop);
}

 mianloop();
