//mean value
const score = [0, 1, 2, 3, 4, 5];
const frequency = [3, 4, 4, 8, 5, 8];

//values
let totalFrequency = 0; //This will store frequency data
let totalFx = 0; // This will store both frequency and score data

//mean
for (let f = 0; f < score.length; f++) {
  totalFrequency += frequency[f];
  totalFx += score[f] * frequency[f];
}
console.log("Total Frequency:", totalFrequency);
console.log("Total fx:", totalFx);

const mean = totalFx / totalFrequency;
console.log("Value for finding the mean:", mean);

//standard deviation
let sumFdSquared = 0;
for (let f = 0; f < score.length; f++) {
  const d = score[f] - mean; // d is referred to as DEVIATION
  const deviationSquared = d * d;
  const fdSquared = frequency[f] * deviationSquared;
  sumFdSquared += fdSquared;
}
console.log("frequency Squared:", sumFdSquared);

const standardDeviation = Math.sqrt(sumFdSquared / totalFrequency);
console.log("Standard Deviation:", standardDeviation);
