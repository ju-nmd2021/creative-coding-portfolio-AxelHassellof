//reference video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6&ab_channel=TheCodingTrain

let vectorScale = 10;
const increment = 0.02;
let zOff = 0;

const synthBlack = new Tone.AMSynth().toDestination();
const synthWhite = new Tone.AMSynth().toDestination();
const synthGrey = new Tone.AMSynth().toDestination();

function setup() {
  createCanvas(400, 400);
  //noLoop();
  noStroke();
  frameRate(30);
}

window.addEventListener("click", function () {
  Tone.Transport.start();
});

function draw() {
  background(255);

  let nrOfBlack = 0;
  let nrOfWhite = 0;
  let nrOfGrey = 0;

  let cols = floor(width / vectorScale);
  let rows = floor(height / vectorScale);

  let yOff = 0;

  for (let y = 0; y < rows; y++) {
    let xOff = 0;

    for (let x = 0; x < cols; x += 1) {
      let perlRand = noise(xOff, yOff, zOff) * TWO_PI;
      //console.log(noise(xOff, yOff, zOff));
      //let vect = p5.Vector.fromAngle(perlRand);
      push();
      translate(x * vectorScale, y * vectorScale);
      // rotate(vect.heading());
      // line(0, 0, vectorScale, 0);

      if (noise(xOff, yOff, zOff) >= 0.5) {
        fill(0);
        nrOfBlack++;
      } else if (noise(xOff, yOff, zOff) >= 0.35) {
        fill(255);
        nrOfWhite++;
      } else {
        fill(100, 100, 100);
        nrOfGrey++;
      }
      rect(0, 0, vectorScale, vectorScale);
      pop();

      xOff += increment;
    }
    yOff += increment;
  }
  zOff += increment;

  if (Tone.Transport.state == "started") {
    let volumeBlack = map(
      nrOfBlack,
      0,
      (width / vectorScale) * (height / vectorScale),
      -17,
      0
    );
    let volumeWhite = map(
      nrOfWhite,
      0,
      (width / vectorScale) * (height / vectorScale),
      -17,
      0
    );
    let volumeGrey = map(
      nrOfGrey,
      0,
      (width / vectorScale) * (height / vectorScale),
      -17,
      0
    );

    synthBlack.volume.value = volumeBlack;
    synthWhite.volume.value = volumeWhite;
    synthGrey.volume.value = volumeGrey;
    synthBlack.triggerAttackRelease("C3", "16n");
    synthWhite.triggerAttackRelease("E2", "16n");
    synthGrey.triggerAttackRelease("A3", "16n");

    // if (noise(zOff) > 0.6) {
    //   synthBlack.triggerAttackRelease("C3", "16n");
    //   synthWhite.triggerAttackRelease("E3", "16n");
    //   synthGrey.triggerAttackRelease("A3", "16n");
    // } else if (noise(zOff) > 0.3) {
    //   synthBlack.triggerAttackRelease("A3", "16n");
    //   synthWhite.triggerAttackRelease("G3", "16n");
    //   synthGrey.triggerAttackRelease("F3", "16n");
    // } else {
    //   synthBlack.triggerAttackRelease("B4", "16n");
    //   synthWhite.triggerAttackRelease("B3", "16n");
    //   synthGrey.triggerAttackRelease("B2", "16n");
    // }
  }
  // console.log(nrOfBlack);
}
