function filterBy(category) {
  let category = "all";

  const cards = document.getElementsByClassName("card");
  if (category === "all") {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "";
    }
    return;
  }
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    c.style.display = c.classList.contains(category) ? "" : "none";
  }
}
