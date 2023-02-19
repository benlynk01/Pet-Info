const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    const petNum = parseInt(document.getElementById("petNum").value);
    if (petNum && petNum >= 1 && petNum <= petsData.length) {
        const selectedPet = petsData[petNum - 1];
        const {petName, age, weightInKilos, breed} = selectedPet;
        const petInfoString = `${petName} the ${breed} is ${age} years old. This pet weighs ${weightInKilos} kilos.`;
        document.querySelector(".selectedPetInfo").textContent = petInfoString;
    } else {
        alert("Please enter a valid pet number between 1 and " + petsData.length);
    }
}