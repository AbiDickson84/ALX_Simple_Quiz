// Define the function that checks the answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer

    // Retrieve the selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        // If no option is selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "#dc3545";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Green color
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Red color
    }
}

// Attach event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);