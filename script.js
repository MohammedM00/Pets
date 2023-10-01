import petsData from './animals.js';

document.addEventListener('DOMContentLoaded', function () {
    const maxPetNumberSpan = document.getElementById('max-pet-number');
    const petNumInput = document.getElementById('petNum');
    const petInfoDiv = document.getElementById('selectedPetInfo');

    // Set the max value for the input field
    maxPetNumberSpan.textContent = petsData.length;

    function showInfo() {
        const petNum = parseInt(petNumInput.value);

        if (isNaN(petNum) || petNum < 1 || petNum > petsData.length) {
            petInfoDiv.textContent = 'Please enter a valid number.';
        } else {
            const selectedPet = petsData[petNum - 1];
            const petInfoString = `${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. This ${selectedPet.breed} weighs ${selectedPet.weightInKilos} kilos.`;
            petInfoDiv.textContent = petInfoString;
        }
    }

    document.querySelector('button').addEventListener('click', showInfo);
});
