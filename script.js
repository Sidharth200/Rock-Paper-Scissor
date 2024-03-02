let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1 = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Tie";
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice(); // Corrected typo here

    // Add logic to determine the winner
    if (userChoice === compChoice) {
        drawGame();
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        msg.innerText = "You win!";
        userScore++;
        userScore1.innerText = userScore;
        msg.style.backgroundColor = "green";

    } else {
        msg.innerText = "Computer wins!";
        compScore++;
        compScoreEl.innerText = compScore;
        msg.style.backgroundColor = "red";
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
