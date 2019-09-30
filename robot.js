
function Robot(options){
  if(!(this instanceof Robot))
    return new Robot();
};

Robot.prototype.install = function(fn) {
  const m = fn(this);
  console.log('install:', m);
  return this;
};

Robot.prototype.run = function() {
  return this;
};

module.exports = Robot;