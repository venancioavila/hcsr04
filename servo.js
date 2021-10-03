const Gpio = require("pigpio").Gpio;

const motor = new Gpio(26, { mode: Gpio.OUTPUT });

const start = () => {
  motor.servoWrite(180);
};

const stop = () => {
  motor.servoWrite(0);
};

module.exports = {
  start,
  stop,
};
