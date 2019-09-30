## robot2

```js
const robot = require('robot2');

robot()
.install(microphone())
.install(snowbody())
.install(asr())
.install(nlu())
.install(action())
.install(tts())
.install(speaker())
.run();
```