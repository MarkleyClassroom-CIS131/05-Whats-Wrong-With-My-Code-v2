function updateDom() {
  document.getElementById("title").textContent = "Aloha, DOM!";
  const paras = document.getElementsByTagName("p");
  console.log(paras);
  paras.classList.add("highlight");
}
