const gameImg = document.querySelector("img");
gameImg.src="./resources/images/gameImage.jpg";
gameImg.alt="Game Image";
gameImg.style.border = "5px dashed hsla(20, 25%, 50%, 0.9)";
gameImg.style.width = "25rem";
gameImg.style.height = "10rem";
gameImg.style.display = "block";

const header = document.querySelector("header");
header.style.backgroundColor = "hsla(20, 86%, 53%, 0.90)";
header.style.color = "white";
header.style.padding = "1rem";
header.style.textAlign = "center";

function hide_header() {
    header.style.display = "none";
}
function show_header() {
    header.style.display = "block";
}
function toggle_header() {
    if (header.style.display === "none") {
        show_header();
    } else {
        hide_header();
    }
}
const headerhide_button = document.getElementById("layoutButton");
headerhide_button.addEventListener("click", toggle_header);