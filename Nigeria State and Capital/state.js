// 36 states and capital

let statesAndCapital = [
    {
        state: "Adamawa",
        capital: "Yola",
        population: "4.2 million",
        minerals: ["Gypsum", "Kaolin", "Bentonite"],
    },
    {
        state: "Abia",
        capital: "Umuahia",
        population: "3.7 million",
        minerals: ["Lead", "Zinc", "Limestone"],
    },

    {
        state: "Anambra",
        capital: "Awka",
        population: "4.4 million",
        minerals: ["Kaolin", "Salt", "Lignite"],
    },

    {
        state: "Bayelsa",
        capital: "Yenagoa",
        population: "2.3 million",
        minerals: ["Crude Oil", "Natural Gas"],
    },
    {
        state: "Akwa Ibom",
        capital: "Uyo",
        population: "5.5 million",
        minerals: ["Salt", "Clay", "Limestone"],
    },
    {
        state: "Bauchi",
        capital: "Bauchi",
        population: "6.5 million",
        minerals: ["Coal", "Limestone", "Iron Ore"],
    },
    {
        state: "Cross River",
        capital: "Calabar",
        population: "4.0 million",
        minerals: ["Salt", "Limestone", "Granite"],
    },
    {
        state: "Benue",
        capital: "Makurdi",
        population: "5.7 million",
        minerals: ["Limestone", "Gypsum", "Barite"],
    },

    {
        state: "Borno",
        capital: "Maiduguri",
        population: "5.8 million",
        minerals: ["Lignite", "Gypsum", "Uranium"],
    },

    {
        state: "Ekiti",
        capital: "Ado-Ekiti",
        population: "3.3 million",
        minerals: ["Granite", "Kaolin", "Feldspar"],
    },
    {
        state: "Delta",
        capital: "Asaba",
        population: "5.6 million",
        minerals: ["Crude Oil", "Natural Gas"],
    },
    {
        state: "Ebonyi",
        capital: "Abakaliki",
        population: "3.0 million",
        minerals: ["Lead", "Zinc", "Salt"],
    },
    {
        state: "Enugu",
        capital: "Enugu",
        population: "4.5 million",
        minerals: ["Coal", "Iron Ore", "Limestone"],
    },
    {
        state: "Edo",
        capital: "Benin City",
        population: "5.0 million",
        minerals: ["Limestone", "Clay", "Marble"],
    },
    {
        state: "Gombe",
        capital: "Gombe",
        population: "3.2 million",
        minerals: ["Coal", "Gypsum", "Limestone"],
    },
    {
        state: "Imo",
        capital: "Owerri",
        population: "5.4 million",
        minerals: ["Zinc", "Lead", "Natural Gas"],
    },
    {
        state: "Jigawa",
        capital: "Dutse",
        population: "6.0 million",
        minerals: ["Limestone", "Granite", "Silica"],
    },
    {
        state: "Kaduna",
        capital: "Kaduna",
        population: "8.0 million",
        minerals: ["Gold", "Iron Ore", "Tin"],
    },
    {
        state: "Kano",
        capital: "Kano",
        population: "13.4 million",
        minerals: ["Tin", "Granite", "Limestone"],
    },
    {
        state: "Katsina",
        capital: "Katsina",
        population: "7.6 million",
        minerals: ["Kaolin", "Clay", "Salt"],
    },

    {
        state: "Kebbi",
        capital: "Birnin Kebbi",
        population: "4.4 million",
        minerals: ["Gold", "Iron Ore", "Clay"],
    },
    {
        state: "Niger",
        capital: "Minna",
        population: "5.5 million",
        minerals: ["Gold", "Talc", "Granite"],
    },
    {
        state: "Kogi",
        capital: "Lokoja",
        population: "4.5 million",
        minerals: ["Coal", "Iron Ore", "Limestone"],
    },
    {
        state: "Kwara",
        capital: "Ilorin",
        population: "3.2 million",
        minerals: ["Limestone", "Marble", "Clay"],
    },

    {
        state: "Nasarawa",
        capital: "Lafia",
        population: "2.5 million",
        minerals: ["Bauxite", "Salt", "Zinc"],
    },
    {
        state: "Lagos",
        capital: "Ikeja",
        population: "21 million",
        minerals: ["Glass Sand", "Clay", "Bitumen"],
    },
    {
        state: "Osun",
        capital: "Osogbo",
        population: "4.8 million",
        minerals: ["Gold", "Granite", "Talc"],
    },
    {
        state: "Ogun",
        capital: "Abeokuta",
        population: "6.1 million",
        minerals: ["Limestone", "Granite", "Quartz"],
    },

    {
        state: "Ondo",
        capital: "Akure",
        population: "4.7 million",
        minerals: ["Bitumen", "Coal", "Glass Sand"],
    },
    {
        state: "Plateau",
        capital: "Jos",
        population: "4.2 million",
        minerals: ["Tin", "Zircon", "Columbite"],
    },
    {
        state: "Oyo",
        capital: "Ibadan",
        population: "7.8 million",
        minerals: ["Granite", "Kaolin", "Clay"],
    },
    {
        state: "Rivers",
        capital: "Port Harcourt",
        population: "7.0 million",
        minerals: ["Crude Oil", "Natural Gas"],
    },
    {
        state: "Taraba",
        capital: "Jalingo",
        population: "3.3 million",
        minerals: ["Barite", "Gypsum", "Marble"],
    },
    {
        state: "Sokoto",
        capital: "Sokoto",
        population: "5.3 million",
        minerals: ["Clay", "Gypsum", "Salt"],
    },
    {
        state: "Yobe",
        capital: "Damaturu",
        population: "2.8 million",
        minerals: ["Gypsum", "Kaolin", "Salt"],
    },
    {
        state: "Zamfara",
        capital: "Gusau",
        population: "4.0 million",
        minerals: ["Gold", "Lead", "Zinc"],
    },
    {
        state: "FCT",
        capital: "Abuja",
        population: "3.5 million",
        minerals: ["Granite", "Clay", "Sandstone"],
    },
];

console.log(statesAndCapital);

const states = document.getElementById("states");
displayStates(statesAndCapital);

function sortStates() {
    const sortStates = statesAndCapital.sort(function (a, b) {
        return a.state.localeCompare(b.state);
    });
    displayStates(sortStates);
}

function displayStates(statesAndCapital) {
    states.innerHTML = "";
    for (let index = 0; index < statesAndCapital.length; index++) {
        const each = statesAndCapital[index];
        states.innerHTML += `<li class="list-group-item">
        <strong class="fs-5">${each.state}</strong> - <strong class="fs-5">${each.capital}</strong><br>
        <small><strong>Population:</strong> <span>${each.population
            }</span></small><br>
         <small><strong>Minerals:</strong> <span>${each.minerals.join(
                ","
            )}</span></small>
    </li>`;
    }
}

function searchStates(e) {
    const userInput = e.value.toLowerCase();
    const values = statesAndCapital.filter(function (each) {
        const list = `${each.state}, ${each.capital}, ${each.population}, ${each.minerals.join(",")}`;
        const turning = list.toLowerCase();
        return turning.includes(userInput); 
    });
    if (values.length == 0) {
        states.innerHTML = `<li class="list-group-item text-danger">No results found.</li>`;
        return;
    }
    displayStates(values);
}
