idlepath = "http://chinykian.games-ignition.com/test/stickcharacter_idle.gif";
runpath = "http://chinykian.games-ignition.com/test/stickcharacter.gif";

// global variables
imgOffsetX = 36; //number of pixels to center of sprite
imgOffsetY = 72; //number of pixels to bottom of sprite
targetPosX = 980;
targetPosY = 280;
posX = 980;
posY = 280;

// set initial position
var man = document.getElementById("man");
man.style.left = posX + "px";
man.style.top = posY + "px";

document.getElementById("container").onclick = setTargetPosition;
setInterval(moveToTarget, 0.03);

function getDistanceBetween(x1, y1, x2, y2)
{
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt(dx*dx + dy*dy);
}

function moveToTarget()
{
  var man = document.getElementById("man");
  
  var distBetw = getDistanceBetween(targetPosX, targetPosY, posX, posY);
  if (distBetw < 10) //reached target
  {
    if (idlepath != man.src)
      man.src = idlepath;
    return;
  }
  else //keep moving
  {
    if (runpath != man.src)
      man.src = runpath;
    
    var dx = (targetPosX - posX) / distBetw;
    var dy = (targetPosY - posY) / distBetw;
    posX += dx;
    posY += dy;
    
    man.style.left = posX + "px";
    man.style.top = posY + "px";
  }
}

function setTargetPosition()
{
  targetPosX = event.clientX - imgOffsetX;
  targetPosY = event.clientY - imgOffsetY;
  
  var man = document.getElementById("man");
  if (targetPosX < posX)
  {
    man.className = "invert";
  }
  else
  {
    man.className = "standard";
  }
}