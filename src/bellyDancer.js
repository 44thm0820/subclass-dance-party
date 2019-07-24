var makeBellyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="belly-dancer dancer"></span>').css("position", "relative");
  // this.step();
  this.setPosition(top, left);
};

makeBellyDancer.prototype = Object.create(makeDancer.prototype);

makeBellyDancer.prototype.constructor = makeBellyDancer;

makeBellyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};