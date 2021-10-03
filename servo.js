const Gpio = require("pigpio").Gpio;

const start = () => {
  const motor = new Gpio(26, { mode: Gpio.OUTPUT });

  motor.servoWrite(1000);
};

const stop = () => {
  const motor = new Gpio(26, { mode: Gpio.OUTPUT });

  motor.servoWrite(0);
};

module.exports = {
  start,
  stop,
};
