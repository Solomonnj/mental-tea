document.addEventListener("DOMContentLoaded", () => {
    const moodForm = document.getElementById("moodForm");
    const moodSelect = document.getElementById("mood");
    const resultDisplay = document.getElementById("result");

    // Suggestions based on mood
    const moodSuggestions = {
        happy: "That's wonderful! Keep spreading positivity and joy. Consider sharing your happiness with others through kind gestures.",
        stressed: "Take a deep breath and relax. Try mindfulness exercises, listen to soothing music, or take a short walk to clear your mind.",
        sad: "It's okay to feel sad sometimes. Reach out to a loved one, write down your feelings, or watch a movie that lifts your spirits.",
        anxious: "Focus on grounding exercises like deep breathing or meditation. Remember, small steps make a big difference in managing anxiety."
    };

    // Event listener for form submission
    moodForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const selectedMood = moodSelect.value;

        // Display the appropriate suggestion
        resultDisplay.textContent = moodSuggestions[selectedMood] || "Please select a valid mood.";
    });
});
