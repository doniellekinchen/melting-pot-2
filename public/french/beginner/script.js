// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    const resourceContent = this.parentElement.nextElementSibling;

    // Toggle the display of resource content
    if (resourceContent.style.display === "block") {
      resourceContent.style.display = "none"; // Collapse
      this.textContent = "+"; // Reset button text
    } else {
      resourceContent.style.display = "block"; // Expand
      this.textContent = "-"; // Change button text
    }
  });
});
