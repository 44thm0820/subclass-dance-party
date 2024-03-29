var makeBreakDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="break-dancer dancer"><img src="breakDancer.jpg"></img></span>').css("position", "relative");
  this.setPosition(top, left);
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);

makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};