{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("darkTheme");

        themeName.innerText = body.classList.contains("darkTheme") ? "jasne" : "ciemne";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
