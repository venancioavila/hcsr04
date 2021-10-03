const { Board, Servo } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;

const board = new Board({
  io: new Raspi(),
});

const start = () => {
  board.on("ready", () => {
    const servo = new Servo({
      pin: "GPIO26",
      startAt: 0,
    });

    servo.to(-90, 1000);
  });
};

const stop = () => {
  board.on("ready", () => {
    const servo = new Servo({
      pin: "GPIO26",
      startAt: 0,
    });

    servo.to(90, 1000);
  });
};

module.exports = {
  start,
  stop,
};
