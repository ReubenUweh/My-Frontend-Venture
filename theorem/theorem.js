// Solving for pythagoras Theorem
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const inputThree = document.getElementById("inputThree");

//values to be gotten
const solutionOne = document.getElementById("solutionOne");
const solutionTwo = document.getElementById("solutionTwo");
const solutionThree = document.getElementById("solutionThree");
const submit = document.getElementById("submit");



submit.addEventListener("click", function add(){
    const opp = Number(inputOne.value);
    const adj = Number(inputTwo.value);

    const hyp = Math.sqrt(opp * opp + adj * adj);
    solutionTwo.textContent = `value for hyp: ${hyp}`;
    solutionOne.textContent = `${opp}`;
    solutionThree.textContent = `${adj}`;
    inputThree.value = hyp;
});

inputOne.addEventListener("input")