const microphone = require('./core/microphone');
const snowboy    = require('./core/snowboy');
const asr        = require('./core/asr');
const nlu        = require('./core/nlu');
const tts        = require('./core/tts');

(function next() {
  Promise
  .resolve()
  .then(microphone())
  .then(snowboy())
  .then(asr())
  .then(nlu())
  .then(tts())
  .then(next)
})();