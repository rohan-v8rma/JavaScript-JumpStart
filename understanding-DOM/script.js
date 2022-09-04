
const text = document.getElementById('fullheight');

text.addEventListener("wheel", function(event) {

    text.style.backgroundColor = "red";
    console.log(event);
} );