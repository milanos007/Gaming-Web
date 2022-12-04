document.getElementById("win").style.visibility='hidden';
let pirate = document.getElementById("pirate");
let bruh = document.getElementById("bruh");
let nice = document.getElementById("nice");
let winning = document.getElementById("winning");
let GunShot = document.getElementById("shoot")


function iShoot(enemy) {
    GunShot.play();
    enemy.classList.add("dead");
    updateHealthPoints(healthPoints + 3);

    if(!livingEnemies().length) {
        document.getElementById("win").style.visibility='visible';
        pirate.pause();
        winning.play();
        alert("YOUR SO GOOD! Victory!").window.location.reload();
    }
}

function enemyAttacksMe(enemy) {
    enemy.classList.add("showing");
    setTimeout(()=> { 
        enemyShootsMe(enemy);
    }, 600);

    setTimeout( ()=> {
        enemy.classList.remove("showing");
    }, 1200);
}

let healthPoints = 100;

function updateHealthPoints(points) {
    healthPoints = points;
    let healthBar = document.querySelector("#healthBar");

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
    let randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    let enemy = livingEnemies() [randomEnemyNo];

    let randomDelay = Math.random() * 200 + 100;

    setTimeout( ()=> {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}

function newGame() {
    pirate.play();
    pirate.volume = 0.5
    randomEnemyAttacks();
    document.querySelector("button").style.display = "none";
}


