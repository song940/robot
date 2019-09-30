const record = require('node-record-lpcm16')

const microphone = options => {
  return () => record.start({
    threshold: 0,
    verbose: false
  });
};

module.exports = microphone;