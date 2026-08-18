const dialog = document.querySelector("#main-navigation");
const toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener("click", () => {
  if (dialog.open) {
    dialog.close();
    toggleButton.focus();
    toggleButton.setAttribute("aria-expanded", "false");
  } else {
    dialog.show();
    toggleButton.setAttribute("aria-expanded", "true");
  }
});

dialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dialog.close();
    toggleButton.focus();
    toggleButton.setAttribute("aria-expanded", "false");
  }
});
