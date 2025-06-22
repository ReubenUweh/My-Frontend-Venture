const students = ["Mercy", "Jessica", "Samuel", "Jovison", "Favour", "Reuben", "Emmanuel", "Gabriel","David"];

for (let x = 0; x < students.length; x++){
    console.log(x);
}

// const message = "Welcome to my page";
// const h1 = document.getElementById("welcome");
// h1.textContent = message;

const studentOl = document.getElementById("students");
for (let i = 0; i < students.length; i++){
    //  console.log(students[i]);
    studentOl.innerHTML += `<li>${students[i]}</li>`;
    
}