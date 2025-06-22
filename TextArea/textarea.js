//TextArea with JS

const textArea = document.querySelector("#textArea");
const words = document.querySelector("#words");
const submit = document.querySelector("#submit");

//calling function
function countWords() {
    const text = textArea.value.trim(); // Remove extra spaces from start and end
    const wordLength = text; // Split text into words
    const wordCount = wordLength.length;

    words.innerText = `${wordCount}/300`;
    if (wordCount > 300) {
        words.style.color = "red";
    } else {
        words.style.color = "black";
    }
}

submit.addEventListener("click", function () {
    alert("Write Up Submitted");
});

//Hint on the work
// oninput="countWords()"	Runs the countWords() function as you type.

// trim()	Removes spaces at the start and end.

// split(/\s+/)	Splits the sentence into words using spaces, tabs, or new lines.

// filter(Boolean)	Removes any empty words caused by extra spaces.

// wordCount.length	Gives you the total number of actual words.

// innerText	Shows the word count on the page.
