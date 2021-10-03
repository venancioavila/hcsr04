const { Board, Servo } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;

const board = new Board({
  io: new Raspi(),
});

const servo = () => {
  board.on("ready", () => {
    const servo = new Servo({
      pin: "GPIO26",
      fps: 100,
    });

    board.repl.inject({
      servo,
    });
    servo.sweep();
  });
};

module.exports = servo;
