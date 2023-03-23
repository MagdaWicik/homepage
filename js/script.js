console.log("Cześć!");

let changeBackgroundButton = document.querySelector(".changeBackgroundButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme");

    themeName.innerText = body.classList.contains("darkTheme") ? "jasne" : "ciemne";
});