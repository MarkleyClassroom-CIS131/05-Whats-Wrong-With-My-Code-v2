const btn = document.getElementById("myBtn");
    const statusText = document.getElementById("status");

    btn.addEventListener("click", () {
        statusText.textContent = "Button was clicked!";
    });