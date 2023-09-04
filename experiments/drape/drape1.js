let xOffset = 0;
//let canvasWidthh = 800;
let stepWidth = 0.5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(220);
  stroke(0, 0, 0, 60);
  for (i = 0; i < width; i += stepWidth) {
    line(i, 0, height, noise(i) * width);
  }

  xOffset += 0.01;
}
