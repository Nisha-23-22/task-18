// JavaScript DOM and Event Handling

// Get the elements from the page (DOM)
var greeting = document.getElementById("greeting");
var nameInput = document.getElementById("nameInput");
var greetBtn = document.getElementById("greetBtn");
var boxes = document.querySelectorAll(".box");


// Greet button: change the header text to "Hello, [name]"
greetBtn.addEventListener("click", function () {
    var name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Hello";
        nameInput.focus();
    } else {
        greeting.textContent = "Hello, " + name;
    }
});


// Boxes: fill each box with the colour written in it when it is clicked
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        var colour = box.textContent.trim().toLowerCase();

        box.style.backgroundColor = colour;

        // keep the text readable on the darker colours
        if (colour === "yellow") {
            box.style.color = "#111827";
        } else {
            box.style.color = "#ffffff";
        }
    });
});
