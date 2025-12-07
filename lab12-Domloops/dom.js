function changeTitle() {
  const heading = document.getElementById("page-title");
  heading.innerText = "You just changed this title using JavaScript!";
  heading.style.color = "#d98880";
  heading.style.transform = "scale(1.1)";
  setTimeout(() => {
    heading.style.transform = "scale(1)";
  }, 400);
}