function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);

  for (let i = 0; i < 10; i++) {
    rectFungle(
      random(width),
      random(height),
      random(100, 500),
      random(360),
      random(30, 70)
    );
  }
  //rectFungle(random(width), random(height), 200, 69, 30);
  //rectFungle(random(width), random(height), 400, 60, 10);
  //rectFungle(random(width), random(height), 400, 99, 10);
}

function rectFungle(initialX, initialY, itterations, rotations, sizeMult) {
  let sqrPosX = 0;
  let sqrPosY = 0;
  let xOffset = random(100);
  let xStep = 0.1;

  push();

  translate(initialX, initialY);

  for (let i = 0; i < itterations; i++) {
    translate(sqrPosX, sqrPosY);
    rotate(rotations);

    if (random(10) < 3) {
      fill(0);
    } else {
      noStroke();
      fill(255, 255, 255, i);
    }

    rect(0, 0, noise(xOffset) * sizeMult, noise(xOffset) * sizeMult);
    sqrPosY += 1.3;
    xOffset += xStep;
  }
  pop();
}
