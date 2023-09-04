let xOffset = 0;
//const canvasWidthh = 800;
const stepWidth = 10;
const noiseStep = 0.01;
const lineProxMult = 300;
const distance = 20;

function setup() {
  createCanvas(innerWidth, 600);
  noLoop();
}

function draw() {
  background(255);
  //translate(-noise(xOffset) * 900, 0);
  strokeWeight(5);

  for (i = 0; i < width * 2; i += stepWidth) {
    stroke(100, noise(xOffset) * 255, noise(xOffset) * 255, 100);

    line(width, 0, i + noise(xOffset) * lineProxMult, noise(xOffset) * height);

    stroke(noise(xOffset) * 255, 0, 0, 100);
    line(
      i + noise(xOffset) * lineProxMult - distance,
      noise(xOffset) * height + distance,
      width,
      height
    );

    xOffset += noiseStep;
  }
}
