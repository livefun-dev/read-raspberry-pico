const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('/dev/tty.usbmodem0000000000001', {
  baudRate: 115200,
});

port.open(function (err) {
  if (err) {
    console.log('Error opening port: ', err);
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  console.log('ok');
  const lineStream = port.pipe(new Readline());
  lineStream.on('data', (data) => {
    console.log(new Date(), data);
  });
});
