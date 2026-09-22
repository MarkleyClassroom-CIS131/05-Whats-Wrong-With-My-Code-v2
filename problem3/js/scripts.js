function addItem() {
  // Create the new list item
  const li = document.createElement("li");
  li.textContent = "New Item";

  li.appendChild(li); 
}
