let xOffset = 0;
//const canvasWidthh = 800;
const stepWidth = 2;
const noiseStep = 0.01;
const lineProxMult = 300;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(255);

  strokeWeight(5);

  for (i = 0; i < width * 2; i += stepWidth) {
    stroke(100, noise(xOffset) * 255, noise(xOffset) * 255, 100);

    line(
      i + noise(xOffset) * lineProxMult,
      0,
      i + noise(xOffset) * lineProxMult,
      noise(xOffset) * height
    );

    stroke(noise(xOffset) * 255, 0, 0, 100);
    line(
      i + noise(xOffset) * lineProxMult - 20,
      noise(xOffset) * height + 20,
      width,
      height
    );

    xOffset += noiseStep;
  }
}
