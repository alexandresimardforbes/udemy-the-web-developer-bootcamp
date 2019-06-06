var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.background = "orange";
});

var ul = document.querySelector("ul");
ul.addEventListener("click", function() {
console.log("CLICK DE UL!");
});

var lis = document.getElementsByTagName("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink"
    });
    
}
