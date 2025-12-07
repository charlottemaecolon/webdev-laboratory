// Initial fruit list
const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Grapes"];

// Get the <ul> element
const fruitList = document.getElementById("fruit-list");

// Function to generate the fruit list
function generateList() {
  // Clear existing list
  fruitList.innerHTML = "";

  // Loop through fruits array and add <li> items with fade-in
  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    li.style.opacity = 0;             // Start invisible
    li.style.transition = "opacity 0.5s ease, transform 0.3s ease";
    fruitList.appendChild(li);

    // Small delay to trigger fade-in
    setTimeout(() => {
      li.style.opacity = 1;
      li.style.transform = "translateY(0)";
    }, 50);
  });
}


function addFruit() {
  const input = document.getElementById("newFruit");
  const newFruit = input.value.trim();

  if (newFruit) {
    fruits.push(newFruit);   
    input.value = "";    

    
    const li = document.createElement("li");
    li.textContent = newFruit;
    li.style.opacity = 0;
    li.style.transform = "translateY(-10px)";
    li.style.transition = "opacity 0.5s ease, transform 0.3s ease";
    fruitList.appendChild(li);


    setTimeout(() => {
      li.style.opacity = 1;
      li.style.transform = "translateY(0)";
    }, 50);
  } else {
    alert("Please enter a fruit name! 🍓");
  }
}


generateList();
