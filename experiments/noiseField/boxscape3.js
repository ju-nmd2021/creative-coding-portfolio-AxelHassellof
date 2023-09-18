//reference video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

let vectorScale = 10;
const increment = 0.02;
let zOff = 0;

function setup() {
  createCanvas(300, 300);
  //noLoop();
  noStroke();
}

function draw() {
  background(255);

  let cols = floor(width / vectorScale);
  let rows = floor(height / vectorScale);

  let yOff = 0;

  for (let y = 0; y < rows; y++) {
    let xOff = 0;

    for (let x = 0; x < cols; x += 1) {
      let perlRand = noise(xOff, yOff, zOff) * TWO_PI;
      let vect = p5.Vector.fromAngle(perlRand);

      stroke(0);

      push();
      translate(x * vectorScale, y * vectorScale);
      rotate(vect.heading());
      if (perlRand >= PI) {
        for (let i = 0; i < 2 * perlRand; i++) {
          fill(255);
          rect(i * 3, i * 3, vectorScale, vectorScale * perlRand);
        }
      } else {
        fill(255);
      }
      pop();

      xOff += increment;
    }
    yOff += increment;
  }
  zOff += increment;
}
