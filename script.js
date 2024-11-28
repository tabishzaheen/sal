



const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input; // Append the clicked button's value
}

// Function to clear the display
function cleardisplay() {
    display.value = ""; // Reset the display to an empty string
}

// Function to evaluate the expression on the display
function calculate() {
    try {
        // Evaluate the mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        // Display "error" if the input is invalid
        display.value = "error";
    }
}
function backspace(){
    display.value = display.value.slice(0, -1)
}