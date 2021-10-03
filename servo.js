const { Board, Servo } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;

const board = new Board({
  io: new Raspi(),
});

const servo = () => {
  board.on("ready", () => {
    const servo = new Servo({
      pin: "GPIO26",
      type: "continuous",
    });

    servo.sweep({
      range: [-90, 90],
      interval: 1000,
    });
  });
};

module.exports = servo;
