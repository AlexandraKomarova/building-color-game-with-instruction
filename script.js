var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares  = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners 
    squares[i].addEventListener("click", function(){
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        } 
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i <squares.length; i++){
        // change color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // pick a random index number of elements in the array
    var random = Math.floor(Math.random() * colors.length);
    // use that number to access the color out of this array and return that color
    return colors[random]; 
}