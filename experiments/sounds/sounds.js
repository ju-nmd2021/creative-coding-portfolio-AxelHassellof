// controller input tutorial: https://www.youtube.com/watch?v=GOjMP6WY8CU&ab_channel=CodingWithAdam
// easy controller tester: https://codingwith-adam.github.io/gamepad-tester/
// gamepad api mozilla: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API

// let controller = {
//   ctrlIndex: null,
//   btnOne: false,
//   btnTwo: false,
//   btnThree: false,
//   btnFour: false,
//   btnFive: false,
//   btnSix: false,
// };

// window.addEventListener("gamepadconnected", (e) => {
//   controller.ctrlIndex = e.gamepad.index;
//   controller.btnOne = e.gamepad.buttons[0];

//   const gamepad = navigator.getGamepads()[controller.ctrlIndex];
//   console.log(navigator.getGamepads()[controller.ctrlIndex]);
// });

// window.addEventListener("load", () => {
//   const synth = new Tone.MonoSynth().toDestination();
//   synth.triggerAttackRelease("C4", "8n");
// });

// window.addEventListener("keydown", (event) => {
//   if (event.key === "g") {
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease("C4", "4n");
//   }
// });

// window.addEventListener("keydown", (event) => {
//   if (event.key === "h") {
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease("E4", "4n");
//   }
// });
