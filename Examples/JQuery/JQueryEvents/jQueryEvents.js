/*$("h1").click(function (){
    alert("h1 clicked!")
})

$("button").click(function(){
    alert("button cl")
})

$("button").click(function(){
    $(this).css("background","pink")
})

$("input[type='text']").keypress(function() {
    console.log("You presse a key")
})

$("input[type='text']").keypress(function(event) {
if(event.which === 13){
    alert("you hit enter!")
}})*/

$("h1").on("click", function() {
    $(this).css("color", "purple")
})

$("input").on("keypress", function() {
    console.log("Key press!")
})

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold")
})

$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal")
})