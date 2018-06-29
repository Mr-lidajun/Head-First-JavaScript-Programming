var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) { // 检查用户的猜测
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1; // 用户的猜测是有效的，因此将猜测次数加1
    }

    // 如果用户猜测的是战舰位置之一，就将击中计数器加1
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("HIT!");
        hits = hits + 1;
        if (hits == 3) { //首先检查是否击中了三次
            isSunk = true;
            alert("You sank my battleship!");
        }
    } else {
        alert("MISS");
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, "
    + "which means your shooting accuracy was " + (3/guesses);
alert(stats);