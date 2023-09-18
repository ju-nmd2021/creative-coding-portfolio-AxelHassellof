//reference video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

let vectorScale = 20;
const increment = 0.05;
//let zOff = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
}

function draw() {
  background(255);

  let cols = floor(width / vectorScale);
  let rows = floor(height / vectorScale);

  let yOff = 0;

  for (let y = 0; y < rows; y++) {
    let xOff = 0;

    for (let x = 0; x < cols; x += 1) {
      let perlRand = noise(xOff, yOff) * TWO_PI;
      let vect = p5.Vector.fromAngle(perlRand);

      stroke(0);

      push();
      translate(x * vectorScale, y * vectorScale);
      rotate(vect.heading());
      if (perlRand >= PI + 0.3) {
        for (let i = 0; i < 10 * perlRand; i += 1) {
          fill(255 / xOff, 255 / xOff, 255 / xOff);
          rotate(0.05);
          rect(i * perlRand, i * perlRand, vectorScale);
        }
      } else {
        fill(30);
        rect(0, 0, vectorScale, vectorScale);
      }
      pop();

      xOff += increment;
    }
    yOff += increment;
  }
  //zOff += increment *2;
}
