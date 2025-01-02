const toggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function toggleAnswer(id) {
  const answer = document.getElementById("answer-" + id);
  const chevron = document.getElementById("chevron-" + id);
  answer.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");
}
