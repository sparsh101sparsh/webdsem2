var grade = "A";
var message;

switch (grade) {
    case "A":
        message = "Excellent work";
        break;
    case "B":
        message = "Good job";
        break;
    case "C":
        message = "You passed";
        break;
    default:
        message = "Grade not found";
}

console.log("Your grade is " + grade + ". " + message);

function myfunction() {
    alert("Hello World");
}

var greetButton = document.getElementById("greetButton");

if (greetButton) {
    greetButton.addEventListener("click", myfunction);
}
