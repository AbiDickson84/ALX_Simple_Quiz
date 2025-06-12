function checkAnswer() {
    // Set the correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById("feedback")
    // If nothing is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // Optional: red feedback for no selection
        return;
    }

    // Get user's answer
    const userAnswer = selectedOption.value;

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Optional: green feedback
    } else {
        feedbactextContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);