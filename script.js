const diceNumber = document.getElementById("dice-no");
const result = document.getElementById("result");
const diceImages = document.getElementById("dice_images");

function roll() {

    // Get the current value entered by the user
    const count = Number(diceNumber.value);

    // Arrays to store dice values and images
    const values = [];
    const images = [];

    // Roll the dice 'count' number of times
    for (let i = 0; i < count; i++) {

        // Generate a random number between 1 and 6
        const value = Math.floor(Math.random() * 6) + 1;

        // Store the number
        values.push(value);

        // Store the image
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    // Display the dice numbers
    result.textContent = `Dice: ${values.join(", ")}`;

    // Display the dice images
    dice_images.innerHTML = images.join("");
}