const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");
const card = document.getElementsByClassName("card");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        header.style.background = "#0D0D0D";
        header.style.color = "#fff";
        nav.style.background = "#0D0D0D";
        main.style.background = "#262626";
        main.style.color = "#fff";

        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#262626";
        }

        footer.style.background = "#0D0D0D";
        footer.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        header.style.background = "#a4b8c4";
        header.style.color = "#141414";
        nav.style.background = "#a4b8c4";
        main.style.background = "#fcfafa";
        main.style.color = "#000";

        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "#c8d3d5";
        }

        footer.style.background = "#a4b8c4";
        footer.style.color = "#141414";
        modeButton.textContent = "🕶️";
    }
});
