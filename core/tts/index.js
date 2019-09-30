
const { promisify } = require('util');
const { exec } = require('child_process');

const run = promisify(exec);

module.exports = () => {
  return text => run(`say ${text}`);
};