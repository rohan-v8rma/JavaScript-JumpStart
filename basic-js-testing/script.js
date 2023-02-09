const buttonElement = document.querySelector(".first-button");

function makeInvisible(event) {
    
    // Logging the event object
    console.log(event); 

    // Logging the event target, i.e., the DOM representation of the button element.
    console.log(event.target);

    // Making the button invisible
    event.target.style.visibility = "hidden";
}

buttonElement.addEventListener("click", makeInvisible);