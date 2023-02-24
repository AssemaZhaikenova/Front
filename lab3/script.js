// Task1 
function py(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
let Finland = py("Finland", "6 million", "Helsinki");
let Kazakhstan = py("Kazakhstan", "17 million", "Astana");
let Germany = py("Germany", "40 million", "Berlin");

console.log(Finland);
console.log(Kazakhstan);
console.log(Germany);

// Task 2
let worldPopulation = 7900000000;

function percentageOfWorld1(population) {
    return Number(population) * 100 / worldPopulation;
}

let FinlandPer = percentageOfWorld1("6000000");
let KazakhstanPer = percentageOfWorld1("17000000");
let GermanyPer = percentageOfWorld1("40000000");

console.log(FinlandPer);
console.log(KazakhstanPer);
console.log(GermanyPer);

let percentageOfWorld2 = function (population) {
    return Number(population) * 100 / worldPopulation;
}

let FinlandPer2 = percentageOfWorld2("6000000");
let KazakhstanPer2 = percentageOfWorld2("17000000");
let GermanyPer2 = percentageOfWorld2("40000000");

console.log(FinlandPer2);
console.log(KazakhstanPer2);
console.log(GermanyPer2);

// Task 3
let percentageOfWorld3 = population => Number(population) * 100 / worldPopulation;

let FinlandPer3 = percentageOfWorld2("6000000");
let KazakhstanPer3 = percentageOfWorld2("17000000");
let GermanyPer3 = percentageOfWorld2("40000000");

console.log(FinlandPer3);
console.log(KazakhstanPer3);
console.log(GermanyPer3);


// Task 4
function describeCountry(country, population) {
    return `${country} has ${population} people`;
}

function describePopulation(country, population) {
    let overall = describeCountry(country, population);
    let percentage = String(percentageOfWorld1(population));
    return `${overall}, which is about ${percentage}% of the world`;
}

let Germanyx = describePopulation("Germany", "40000000");
let Findlandx = describePopulation("Finland", "6000000");
let Kazakhstanx = describePopulation("Kazakhstan", "17000000");
console.log(Germanyx);
console.log(Findlandx);
console.log(Kazakhstanx);

// Task 5

function days_of_a_year(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return 366;
    } else {
        return 365;
    }
}

console.log(days_of_a_year(2021));
console.log(days_of_a_year(2022));
console.log(days_of_a_year(2020));


