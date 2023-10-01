// Define the petsData array
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

// Function to show pet information in the specified format
function showInfo() {
    // Get the input element
    const inputElement = document.getElementById("petNum");

    // Get the selected pet index from user input
    const petIndex = parseInt(inputElement.value) - 1; // Subtract 1 to account for 0-based indexing

    // Check if the input is a valid index
    if (petIndex >= 0 && petIndex < petsData.length) {
        // Get the pet data for the selected index
        const selectedPet = petsData[petIndex];

        // Format the pet information string
        const petInfoString = `${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. This ${selectedPet.breed.toLowerCase()} weighs ${selectedPet.weightInKilos} kilos and is a ${selectedPet.breed} breed.`;

        // Display the formatted pet information
        const selectedPetInfoElement = document.querySelector(".selectedPetInfo");
        selectedPetInfoElement.textContent = petInfoString;
    } else {
        alert("Please enter a valid pet number between 1 and " + petsData.length);
    }
}

