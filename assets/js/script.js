let game1Rules = document.querySelector(".how-to-play-game-1");
let game2Rules = document.querySelector(".how-to-play-game-2");

/*function showHideRulesGame1() {
    game1Rules.classList.toggle("hide");
}

function showHideRulesGame2() {
    game2Rules.classList.toggle("hide");
}
*/

function showHideRulesGame1() {
  // If game2Rules is open, close it before toggling game1Rules
  if (!game2Rules.classList.contains("hide")) {
    game2Rules.classList.add("hide");
  }
  // Toggle game1Rules visibility
  game1Rules.classList.toggle("hide");
}

function showHideRulesGame2() {
  // If game1Rules is open, close it before toggling game2Rules
  if (!game1Rules.classList.contains("hide")) {
    game1Rules.classList.add("hide");
  }
  // Toggle game2Rules visibility
  game2Rules.classList.toggle("hide");
}