document.getElementById("win").style.visibility='hidden';
var pirate = document.getElementById("pirate");
var bruh = document.getElementById("bruh");
var nice = document.getElementById("nice");

function iShoot(enemy) {
    enemy.classList.add("dead");
    updateHealthPoints(healthPoints + 5);

    if(!livingEnemies().length) {
        document.getElementById("win").style.visibility='visible';
        alert("YOUR SO GOOD! Victory!").window.location.reload();
        pirate.pause();
        nice.play();
    }
}

function enemyAttacksMe(enemy) {
    enemy.classList.add("showing");
    setTimeout(()=> {
        enemyShootsMe(enemy);
    }, 500);

    setTimeout( ()=> {
        enemy.classList.remove("showing");
    }, 1000);
}

var healthPoints = 100;

function updateHealthPoints(points) {
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%";

    if(healthPoints < 1) {
        pirate.pause();
        bruh.play();
        alert("YOUR SUCKS! reload the page (can't be automatic)");
    }
}

function enemyShootsMe(enemy) {
    enemy.classList.add("shooting");
    updateHealthPoints(healthPoints - 1);

    if(!enemy.classList.contains("dead")) {
        enemy.classList.add("shooting");
    
    setTimeout(()=> {
        enemy.classList. remove("shooting");
    }, 200);
    }
}

function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
}
function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies() [randomEnemyNo];

    var randomDelay = Math.random() * 200 + 100;

    setTimeout( ()=> {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}

function newGame() {
    pirate.play();
    randomEnemyAttacks();
    document.querySelector("button").style.display = "none";
}


