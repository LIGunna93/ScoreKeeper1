const pageTheme = document.querySelector("html").style.backgroundColor;

function changeTheme() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("click", function() {
    document.querySelector("html").style.backgroundColor = changeTheme();
    document.querySelector("html").style.color = changeTheme();
    document.querySelector("header").style.backgroundColor = changeTheme();
    document.querySelector("header p").innerText = `Current Theme: ${document.querySelector("html").style.backgroundColor}`;
    document.querySelector("header p").style.color = changeTheme();
});

//function changeLayout() {
//    document.querySelectorAll(".scoreboard").
  //  forEach(scoreboard => {
    //    scoreboard.style.backgroundColor = changeTheme();
   // });
//}
//const scoreboards = document.querySelectorAll(".scoreboard");
