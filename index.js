const Gpio = require("pigpio").Gpio;

// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
const MICROSECDONDS_PER_CM = 1e6 / 34321;

// HC-SR0$
const trigger = new Gpio(23, { mode: Gpio.OUTPUT });
const echo = new Gpio(24, { mode: Gpio.INPUT, alert: true });

// LED
const led = new Gpio(20, { mode: Gpio.OUTPUT });
const buzzer = new Gpio(16, { mode: Gpio.OUTPUT });

while (true) {
  setInterval(() => {
    buzzer.digitalWrite(1); // Set trigger high for 10 microseconds
  }, 500);
  buzzer.digitalWrite(0);
}

led.digitalWrite(0);
trigger.digitalWrite(0); // Make sure trigger is low

const watchHCSR04 = () => {
  let startTick;

  echo.on("alert", (level, tick) => {
    if (level == 1) {
      startTick = tick;
    } else {
      const endTick = tick;
      const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
      const distance = diff / 2 / MICROSECDONDS_PER_CM;

      if (distance < 70) {
        led.digitalWrite(1);
      }
      if (distance > 70) {
        led.digitalWrite(0);
      }

      console.log(`${distance.toFixed(2)}cm`);
    }
  });
};

watchHCSR04();

// Trigger a distance measurement once per second
setInterval(() => {
  trigger.trigger(10, 1); // Set trigger high for 10 microseconds
}, 500);
