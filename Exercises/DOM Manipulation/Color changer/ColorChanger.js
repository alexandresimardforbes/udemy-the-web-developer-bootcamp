var buttons = document.querySelectorAll("button");
var isPurple = false;

// button.addEventListener("click", function() {
 
//     if (isPurple) {
//         document.body.style.background = "white";
//     }
//     else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// })

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        document.body.classList.toggle("bgColor");
    });
 
}
