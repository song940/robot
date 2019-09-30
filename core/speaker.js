
const speaker = () => {
  return voice => {
    console.log('play:', voice);
  };
};

module.exports = speaker;