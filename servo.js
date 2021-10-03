const { Board, Servo } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;

const board = new Board({
  io: new Raspi(),
});

const servo = () => {
  board.on("ready", () => {
    const servo = new Servo({
      pin: "GPIO26",
    });

    servo.sweep({
      range: [0, 180],
      interval: 3000,
    });
  });
};

module.exports = servo;
