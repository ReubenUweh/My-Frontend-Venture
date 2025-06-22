// Event in JS
// callback (annonymous function)
//Events are ASSIGNED OR ARE PART OF THE LIST OF PROPERTIES
const user_input = document.getElementById("user_input");
const output = document.getElementById("output")

user_input.addEventListener("keyup", function(event){
    const value = event.target.value;
    if (value > 0) {
        if (value % 2 == 0) {
            output.textContent = "Even Number";
        } else {
            output.textContent = "Odd Number";
        }
    } else {
        output.textContent = "invalid Number";
    }
});
