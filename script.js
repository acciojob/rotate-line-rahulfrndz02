//your JS code here. If required.

var line = document.getElementById("line");
var ctx = line.getContext('2d');

    // Set the center point and initial angle
    var centerX = line.width / 2;
    var centerY = line.height / 2;
    var angle = 0;

function rotateLine(){
      // Clear the line
      ctx.clearRect(0, 0, line.width, line.height);

      // Update the angle for rotation
      angle += 0.01;

      // Calculate the line endpoints
      var lineLength = 100;
      var x1 = centerX - lineLength / 2;
      var y1 = centerY;
      var x2 = centerX + lineLength / 2;
      var y2 = centerY;

      // Rotate the line around the center point
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.translate(-centerX, -centerY);

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Reset the transformations
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Request animation frame to create a smooth animation
      requestAnimationFrame(drawLine);
    }

    // Start the animation
    rotateLine();