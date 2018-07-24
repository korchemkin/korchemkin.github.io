(function() {
  'use strict';
    
  function Ball() {
      var div = document.createElement('div');
      div.classList.add('ball');
      document.body.appendChild(div);
  }

  Ball.prototype.move = function(event) {
    console.log(event.target.pageX, event.target.pageY);
  };

  var ball = new Ball();
  document.body.addEventListener('mousemove', ball.move);
}());
