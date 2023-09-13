function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);

  translate(width / 2 - 100, height / 2 - 100);
  for (let i = 0; i < 6; i++) {
    rectString();
  }
}

function rectString() {
  let xOffset = 0;
  const xStep = 0.01;

  for (let i = 0; i < width; i += 1) {
    let randNoise = noise(xOffset);

    rotate(0.9);
    translate(0.5, -2);
    rect(
      i + noise(xOffset) * 200,
      0,
      noise(xOffset) * 200,
      noise(xOffset) * 200
    );

    xOffset += xStep;
  }
}

function mousePressed() {
  redraw();
}
