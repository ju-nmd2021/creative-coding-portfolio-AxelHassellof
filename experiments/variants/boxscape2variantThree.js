//reference video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

let vectorScale = 10;
let increment = 0.05;
let zOff = 0;
let layerDistMult = 50;
const sizeMult = 3;
function setup() {
  createCanvas(innerWidth, innerHeight);
  //noLoop();
  noStroke();
}

function draw() {
  background(10, 10, 50, 10);

  let cols = floor(innerWidth / vectorScale);
  let rows = floor(innerHeight / vectorScale);

  let yOff = 0;

  for (let y = 0; y < rows; y++) {
    let xOff = 0;

    for (let x = 0; x < cols; x += 1) {
      let perlRand = noise(xOff, yOff, zOff) * TWO_PI;
      // let vect = p5.Vector.fromAngle(perlRand);

      push();
      translate(x * vectorScale, y * vectorScale);
      // rotate(vect.heading());
      // fill(255 - noise(xOff, yOff, zOff) * 300);
      fill(
        noise(xOff, yOff, zOff) * 0,
        255 - noise(xOff, yOff, zOff) * 400,
        255 - noise(xOff, yOff, zOff) * 255
      );
      // if (Math.random() < 0.001) {
      //   fill(255, 100, 100);
      // }

      layerDist = noise(xOff, yOff, zOff) * layerDistMult;

      if (noise(xOff, yOff, zOff) > 0.35) {
        rect(
          layerDist * 2 + xOff,
          layerDist * 2 + yOff,
          perlRand * sizeMult,
          perlRand * sizeMult
        );
      }
      if (noise(xOff, yOff, zOff) > 0.4) {
        //fill(0, 255 - noise(xOff, yOff, zOff) * 300, 0);
        if (noise(xOff, yOff, zOff) > 0.4 && noise(xOff, yOff, zOff) < 0.409) {
          fill(255, 255, 255);
        } else {
          fill(
            noise(xOff, yOff, zOff) * 0,
            255 - noise(xOff, yOff, zOff) * 400,
            255 - noise(xOff, yOff, zOff) * 255
          );
        }
        rect(
          layerDist + xOff,
          layerDist + yOff,
          perlRand * sizeMult,
          perlRand * sizeMult
        );
      }
      if (noise(xOff, yOff, zOff) > 0.5) {
        // fill(0);

        rect(xOff, yOff, perlRand * sizeMult, perlRand * sizeMult);
      }

      if (noise(xOff, yOff, zOff) > 0.6) {
        // fill(255, 255, 255, 40);
        rect(xOff - layerDist, yOff - layerDist, vectorScale * 2);
      }
      pop();

      // layerDistMult = 100 * noise(xOff, yOff, zOff);
      increment = noise(xOff, yOff, zOff) / 15;
      xOff += increment;
    }
    yOff += increment;
  }
  zOff += increment / 2;
}
