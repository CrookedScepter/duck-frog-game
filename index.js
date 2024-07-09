//Establishing cell coordinates

for(var i = 1; i < 101; i++){
    
    let xValueChecker = 0;

    if (i % 10 === 0) {
        xValueChecker = 10; 
    } else {
        xValueChecker = i % 10;
    }

    document.querySelectorAll("div.cell")[i-1].classList.add("x" + (xValueChecker), "cell", "y" + (Math.floor(((i - 1) * 0.1)) + 1));

}

$(".cell").fadeOut();



//Icons

let playerIcon = './images';



//Variables

let playerXPosition = 5;
let playerYPosition = 5;

let xPositionVictory = 1;
let yPositionVictory = 1;

function setVictoryCoordinates() {
    xPositionVictory = Math.floor(Math.random() * 10) + 1;
    yPositionVictory = Math.floor(Math.random() * 10) + 1;
}

function checkVictoryCoordinates() {
    if (xPositionVictory === playerXPosition && yPositionVictory === playerYPosition) {
        setVictoryCoordinates();
        checkVictoryCoordinates();
    } else {
        console.log(xPositionVictory);
        console.log(yPositionVictory);
        $(".x" + xPositionVictory + ".y" + yPositionVictory).addClass("victory");
    }
}

setVictoryCoordinates();

checkVictoryCoordinates();



let xPositionHazard = 0;
let yPositionHazard = 0;

function setHazardCoordinates() {
    for (var i = 0; i < 30; i++){
        xPositionHazard = Math.floor(Math.random() * 10) + 1;
        yPositionHazard = Math.floor(Math.random() * 10) + 1;
    
        if (playerXPosition === xPositionHazard && playerYPosition === yPositionHazard) {}
        else if (xPositionVictory === xPositionHazard && yPositionVictory === yPositionHazard) {}
        else {$(".x" + xPositionHazard + ".y" + yPositionHazard).addClass("hazard");}
    }
}

setHazardCoordinates();

function removeHazards() {
    $(".cell").removeClass("hazard");
}

setInterval(function() {
    removeHazards();
    setHazardCoordinates();
}, 1000)


//Start Button

$("#start").on("click", function() {

    var fadeInDelay = 10;

    $(".cell").each(function() {
        $(this).addClass("green");
        fadeInDelay = fadeInDelay + 10;
        $(this).delay(fadeInDelay).fadeIn();
    })

    $(".x" + playerXPosition + ".y" + playerYPosition).addClass("player");

    $("#start").hide();

})

    

//Movement

function clearPlayerBlack() {
    $(".cell").removeClass("player black");
}

$(document).on("keydown", function(event) {

    clearPlayerBlack();

    if (event.key === "ArrowRight" && playerXPosition < 10) {
        playerXPosition = playerXPosition + 1;
        $(".x" + playerXPosition + ".y" + playerYPosition).addClass("player");
    }

    if (event.key === "ArrowLeft" && playerXPosition > 1) {
        playerXPosition = playerXPosition - 1;
        $(".x" + playerXPosition + ".y" + playerYPosition).addClass("player");
    }

    if (event.key === "ArrowUp" && playerYPosition > 1) {
        playerYPosition = playerYPosition - 1;
        $(".x" + playerXPosition + ".y" + playerYPosition).addClass("player");
    }

    if (event.key === "ArrowDown" && playerYPosition < 10) {
        playerYPosition = playerYPosition + 1;
        $(".x" + playerXPosition + ".y" + playerYPosition).addClass("player");
    }

})


//Hazards and Victory Checker

$(document).on("keydown", function() {
    
    if ($(".x" + playerXPosition + ".y" + playerYPosition).hasClass("hazard")) {
        alert("Loser!");
    }

    if ($(".x" + playerXPosition + ".y" + playerYPosition).hasClass("victory")) {
        alert("big 'ol win");
    }

})

