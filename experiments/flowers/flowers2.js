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
      355,
      random(30, 100)
    );
  }
  translate(width / 2, height / 2);
  rectString();
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

    if (random(10) < 2) {
      fill(0);
    } else {
      fill(255);
    }

    rect(0, 0, noise(xOffset) * sizeMult, noise(xOffset) * sizeMult);
    sqrPosY += 1.1;
    xOffset += xStep;
  }
  pop();
}

function rectString() {
  let xOffset = 0;
  const xStep = 0.01;

  for (let i = 0; i < width; i += 1) {
    let randNoise = noise(xOffset);

    rotate(0.9);
    translate(0.5, -2);
    rect(
      i + noise(xOffset) * 100,
      0,
      noise(xOffset) * 100,
      noise(xOffset) * 100
    );

    xOffset += xStep;
  }
}
