const path = require('path');
const { Detector, Models } = require('snowboy');

module.exports = options => {
  const models = new Models();
  models.add({
    sensitivity: '0.5',
    hotwords: 'leon-en',
    file: path.resolve('leon-en.pmdl')
  });
  return stream => new Promise((resolve, reject) => {
    console.log('snowboy');
    const detector = new Detector({
      models,
      audioGain: 2.0,
      applyFrontend: true,  
      resource: path.resolve('node_modules/snowboy/resources/common.res')
    });
    detector.on('error', reject);
    detector.on('sound', () => {
      // console.log('snow:sound', new Date);
    });
    detector.on('silence', () => {
      // console.log('snow:silence');
    });
    detector.on('hotword', (index, hotword, buffer) => {
      console.log('Hotword detected', index, hotword);
      resolve(buffer);
    });
    stream.pipe(detector);
  });
};
;