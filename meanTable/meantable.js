const table = document.querySelector("#table ")


const inputF = document.querySelectorAll(".inputF");

const fx = document.querySelectorAll(".fx");
const dValue = document.querySelectorAll(".d");
const d2 = document.querySelectorAll(".d2");
const fd = document.querySelectorAll(".fd");

const xSum = document.querySelector(".xSum");
const fSum = document.querySelector(".fSum");
const fxSum = document.querySelector(".fxsum");
const fdSum = document.querySelector(".fdSum");

const meanValue = document.querySelector("#meanValue")
const meanDeviation = document.querySelector("#meanDeviation")
console.log(table);



function calculateMean() {
    const inputX = document.querySelectorAll(".inputX");
    let storeXSum = 0;
    let storeFSum = 0;
    let storefxValue = 0;
    let storeFd = 0;

    let deviationOutput1 = 0; 
    let deviationOutput2 = 0;

    let meanOutput = 0;

    for (let i = 0; i < inputX.length; i++) {
        const fValue = parseFloat(inputF[i].value) || 0;
        const xValue = parseFloat(inputX[i].value) || 0;
        const fxValue = fValue * xValue;

        fx[i].innerHTML = `<td>${fxValue}</td>`;


        storeFSum += fValue
        storeXSum += xValue
        storefxValue += fxValue
        // console.log(storeFSum);
        xSum.innerHTML = `<td>${storeXSum}</td>`;
        fSum.innerHTML = `<td>${storeFSum}</td>`;
        fxSum.innerHTML = `<td>${storefxValue}</td>`;

        let mean = storefxValue / storeFSum;
        // console.log(mean);
        meanOutput = mean
        meanValue.textContent = `${mean}`;
    }
    for (let i = 0; i < fx.length; i++) {
        const fValue = parseFloat(inputF[i].value) || 0;
        const xValue = parseFloat(inputX[i].value) || 0;

        let d1 = xValue - meanOutput;
        let absoluteD = Math.abs(d1);
        let Fd = fValue * absoluteD;

        dValue[i].innerHTML = `<td>${d1}</td>`;
        d2[i].innerHTML = `<td>${absoluteD}</td>`;
        fd[i].innerHTML = `<td>${Fd}</td>`;
        // console.log(d1);

        storeFd += Fd;
        fdSum.innerHTML = `<td>${storeFd}</td>`

        deviationOutput1 += Fd;
        deviationOutput2 += fValue;

        let deviationPrint = deviationOutput1 / deviationOutput2;
        console.log(deviationPrint);
        
        meanDeviation.innerHTML = `<td>${deviationPrint}</td>`;



    }
}
document.querySelectorAll(".inputX, .inputF").forEach(input => {
    input.addEventListener("input", calculateMean)
});


function addRow() {
    const rowCount = table.rows.length;
    const insertNewRow = rowCount -1;

    const newRow = table.insertRow(insertNewRow);

    const newX = newRow.insertCell(0);
    const newF = newRow.insertCell(1);
    const newFx = newRow.insertCell(2);
    const newD = newRow.insertCell(3);
    const newAbsD = newRow.insertCell(4);
    const newFD = newRow.insertCell(5);

    


    // const X = newX.querySelector(".inputX");
    // const F = newX.querySelector(".inputF");


    

    newX.innerHTML = `<input type="text" class="inputX">`
    newF.innerHTML = `<input type="text" class="inputF">`
    newFx.innerHTML = `<td class="fx"></td>`
    newD.innerHTML = `<td class="d"></td>`
    newAbsD.innerHTML = `<td class="d2"></td>`
    newFD.innerHTML = `<td class="fd"></td>`

          
}



