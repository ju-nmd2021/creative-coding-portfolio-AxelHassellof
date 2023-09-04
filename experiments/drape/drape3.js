let xOffset = 0;
//const canvasWidthh = 800;
const stepWidth = 2;
const noiseStep = 0.007;
const lineProxMult = 300;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(255);
  translate(-noise(xOffset) * 400, 0);
  strokeWeight(2);

  for (i = 0; i < width * 2; i += stepWidth) {
    line(
      i + noise(xOffset) * lineProxMult,
      0,
      i + noise(xOffset) * lineProxMult,
      noise(xOffset) * height
    );

    xOffset += noiseStep;
  }
}

function mousePressed() {
  redraw();
}
