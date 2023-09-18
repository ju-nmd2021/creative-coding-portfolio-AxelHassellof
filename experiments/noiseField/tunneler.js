// Priciples learned in: https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=3&ab_channel=TheCodingTrain

let xOffsetOne = 0;
let xOffsetTwo = 4000;
const xStep = 0.015;
const startSize = 1;
//const sizeStep = 30;

let tunnel = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  //noStroke();
  fill(0, 0, 0, 12);
}

function draw() {
  background(255);

  let x = noise(xOffsetOne) * width;
  let y = noise(xOffsetTwo) * height;

  tunnel.unshift({
    x: x,
    y: y,
    size: startSize,
  });

  for (let i = 0; i < tunnel.length; i++) {
    stroke(255 - i * 6);
    strokeWeight(1);
    ellipse(tunnel[i].x, tunnel[i].y, tunnel[i].size);

    tunnel[i].size += tunnel[i].size / 6;

    if (tunnel[i].size > width * 2) {
      tunnel.splice(i, 1);
    }
  }

  //console.log(tunnel);

  xOffsetOne += xStep;
  xOffsetTwo += xStep;
}
