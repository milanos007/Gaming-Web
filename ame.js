function iShoot(enemy) {
    enemy.classList.add("dead");
    updateHealthPoints(healthPoints + 3);

    if(!livingEnemies().length) {
        alert("Victory").window.location.reload();
        window.location.reload();
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
        alert("YOUR SUCKS! reload the page for some reason it does weird things");
        window.location.reload();
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
    randomEnemyAttacks();

    document.querySelector("button").style.display = "none";
}