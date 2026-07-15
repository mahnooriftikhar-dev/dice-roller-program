// const dicenumber = document.getElementById("dice-no").value;
// const roll_dice = document.getElementById("roll-dice");
// const result = document.getElementById("result");
// const dice_images = document.getElementById("dice_images");

// function roll() {
//     //for storing multiple values in this array
//     const values = [];
//     //for storing multiple images in this array
//     const images = [];
//     //button click will start the function
//     for (i = 0; i > dicenumber; i++){
//     const value = Math.floor(Math.random *6)+1;
//     value.push(values)
//     images.push(`<img src="dice_images/${value}.png"></img>`)
//     }

//     result.textContent = `dice ${values.join(',')}`;
//     dice_images.innerHTML=images.join('');
// }

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