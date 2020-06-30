// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById("app"));
const music = new Audio("images/saxy.mp3");
// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
};

let onClick = function (event) {
  console.log(event.target);
  gameEngine.gameLoop();
  startBtn.innerHTML = "Avoid the sax!";
  music.play();
  document.addEventListener("keydown", keydownHandler);
};

//start button + score
const here = document.getElementById("app");
const startBtn = document.createElement("button");
startBtn.style.position = "absolute";
startBtn.style.left = 2.66 * PLAYER_WIDTH;
startBtn.style.backgroundColor = "transparent";
startBtn.style.color = "white";
startBtn.style.border = "1px solid black";
startBtn.style.borderRadius = "28px";
startBtn.innerHTML = "start!";
here.append(startBtn);

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
// document.addEventListener("keydown", keydownHandler);
startBtn.addEventListener("click", onClick);

// We call the gameLoop method to start the game
// gameEngine.gameLoop();
