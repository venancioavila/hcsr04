const { Board, Servo } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;
const Gpio = require("pigpio").Gpio;

const board = new Board({
  io: new Raspi(),
});

const servo = () => {
  const motor = new Gpio(26, { mode: Gpio.OUTPUT });

  let pulseWidth = 1000;
  let increment = 100;

  setInterval(() => {
    motor.servoWrite(180);
  }, 1000);
};

module.exports = servo;
