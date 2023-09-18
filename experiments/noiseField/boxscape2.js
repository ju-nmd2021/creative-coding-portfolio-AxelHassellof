//reference video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

let vectorScale = 10;
const increment = 0.02;
let zOff = 1110;

function setup() {
  createCanvas(500, 500);
  //noLoop();
  noStroke();
}

function draw() {
  background(255);

  let cols = floor(300 / vectorScale);
  let rows = floor(300 / vectorScale);

  let yOff = 0;

  for (let y = 0; y < rows; y++) {
    let xOff = 12;

    for (let x = 0; x < cols; x += 1) {
      let perlRand = noise(xOff, yOff, zOff) * TWO_PI;
      let vect = p5.Vector.fromAngle(perlRand);

      push();
      translate(x * vectorScale + 100, y * vectorScale + 100);
      rotate(vect.heading());
      fill(noise(xOff, yOff, zOff) * 255);
      rect(30 + xOff, 30 + yOff, perlRand * 3, perlRand * 3);
      pop();

      xOff += increment;
    }
    yOff += increment;
  }
  zOff += increment / 2;
}
