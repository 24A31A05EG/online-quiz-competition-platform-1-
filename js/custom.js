// custom.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customQuizForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 THIS LINE STOPS PAGE REFRESH

    const selectedCategories = Array.from(
      document.querySelectorAll('input[name="categories"]:checked')
    ).map(cb => cb.value);

    const selectedDifficulty =
      document.querySelector('input[name="difficulty"]:checked')?.value || "all";

    if (selectedCategories.length === 0) {
      alert("Please select at least one category");
      return;
    }

    // Save selections
    localStorage.setItem("customCategories", JSON.stringify(selectedCategories));
    localStorage.setItem("customDifficulty", selectedDifficulty);

    // Redirect to quiz page
    window.location.href = "custom_quiz.html";
  });
});