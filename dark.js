const course = document.querySelector(".course")
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

window.addEventListener("DOMContentLoaded", (event) => {
    const dark = document.getElementById('dark');
    dark.addEventListener("click", ()=>{
        console.log("Button is clicked");
        myFunction();
    })
});