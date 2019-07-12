
var squareDivs = document.querySelectorAll(".square");
var colorDisplaySpan = document.getElementById("colorDisplay");
var messageDisplaySpan = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".selectMode")

var numberOfSquare = 6;
var colors = generateRandomColors(numberOfSquare);
var pickedColor = pickColor();

gameInit();

function gameInit() {
    setUpListners();
    reset();
}

function addSquareColor() {
    for (var i = 0; i < squareDivs.length; i++) {
        if (colors[i]) {
            squareDivs[i].style.backgroundColor = colors[i]
            squareDivs[i].style.display = "block";
        }
        else {
            squareDivs[i].style.display = "none";
        }
    }
}

function changeColors(currentColor) {
    squareDivs.forEach(square => {
        square.style.backgroundColor = currentColor
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateRandomColors(numberOfSquare);
    pickedColor = pickColor();
    colorDisplaySpan.textContent = pickedColor;
    messageDisplaySpan.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    addSquareColor();
}

function gameRulesImplementation(square) {
    var clickedColor = square.style.backgroundColor;
    if (clickedColor === pickedColor) {
        messageDisplaySpan.textContent = "Correct"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play again?"
    }
    else {
        square.style.backgroundColor = "#232323"
        messageDisplaySpan.textContent = "Try Again"
    }
}

function setUpListners() {
    setUpSquareDivsListeners();
    setUpModeButtonsListeners();
    setUpResetButtonListeners();
}

function setUpSquareDivsListeners() {
    squareDivs.forEach(square => {
        square.addEventListener("click", function () {
            gameRulesImplementation(square);
        })

    });
}

function setUpModeButtonsListeners() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            this.textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
            //Pas super... 
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            reset();
        })
    }
}

function setUpResetButtonListeners() {
    resetButton.addEventListener("click", function () {
        reset();
    })
}