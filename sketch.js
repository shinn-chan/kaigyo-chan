function setup() {
  createCanvas(windowWidth, windowHeight);
  //document.body.clientHeightで画面に収まりき習い部分もカバー
  canvas = createCanvas(windowWidth, document.body.clientHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');//canvasを後ろに移動する。
  canvas.style('position','fixed');//canvasの固定

  colorMode(HSB, 360, 100, 100, 100);
  frameRate(3);
  noStroke();
  let div = 15.0;
  let rectWidth = width / div;
    for (let i = 0; i < div; i++) {
    fill(random(360), 50, 100);
    rect(i * rectWidth, 0, rectWidth,height);
  }
}