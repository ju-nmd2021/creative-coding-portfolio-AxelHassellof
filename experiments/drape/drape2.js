let xOffset = 0;
const canvasWidthh = 800;
const stepWidth = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(220);

  makeChaos(1, -1, width, 1);
  makeChaos(0, 0, width, 1);
}

function makeChaos(a, b, c, d) {
  stroke(0, 0, 0, 30);
  for (i = 0; i < width; i += stepWidth) {
    line(a * i, b * i, c, noise(i) * width * d);
    //line(i, 0, height, noise(i) * width);
  }
  xOffset += 0.01;
}
