var lis = document.querySelectorAll("li");

lis.forEach(element => {
    element.addEventListener("mouseover", function() {
        element.classList.add("selected");
        });

    element.addEventListener("mouseout", function(){
            element.classList.remove("selected");
        });
    element.addEventListener("click", function(){
        this.classList.toggle("done");
    })

});

