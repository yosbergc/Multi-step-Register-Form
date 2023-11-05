const containerOne = document.querySelector(".step-1");
const containerTwo = document.querySelector(".step-2");
const containerThree = document.querySelector(".step-3");
const buttonOne = document.querySelector(".stepOneButton");
const buttonTwo = document.querySelector(".stepTwoButton");
const buttonThree = document.querySelector(".stepThreeButton");
const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const stepText = document.querySelector(".step-text");
const stepTwoDot = document.querySelector(".stepProgressTwo");
const stepThreeDot = document.querySelector(".stepProgressThree");
const stepTwoOptionOne = document.querySelector(".software");
const stepTwoOptionTwo = document.querySelector(".user");
const stepTwoOptionThree = document.querySelector(".graphicDesign");
const nombreObtenido = document.querySelector(".nameObtained");
const emailObtenido = document.querySelector(".emailObtained");
const topicOne = document.querySelector(".topicOne");
const topicTwo = document.querySelector(".topicTwo");
const topicThree = document.querySelector(".topicThree");

let nombre;
let email;
let optionChoosed = {
    software: null,
    user: null,
    graphicDesign: null
}
buttonThree.addEventListener("click", stepThree);
buttonOne.addEventListener("click", stepOne);
buttonTwo.addEventListener("click", stepTwo);
stepTwoOptionOne.addEventListener("click", optionOne);
stepTwoOptionTwo.addEventListener("click", optionTwo);
stepTwoOptionThree.addEventListener("click", optionThree);

function optionOne() {
    if (stepTwoOptionOne.classList.toggle("blueOption")) {
        optionChoosed.software = "Software Development";
    } else {
        optionChoosed.software = null;
    }
}
function optionTwo() {
    if (stepTwoOptionTwo.classList.toggle("blueOption")) {
        optionChoosed.user = "User Experience";
    } else {
        optionChoosed.user = null;
    }
}
function optionThree() {
    if (stepTwoOptionThree.classList.toggle("blueOption")) {
        optionChoosed.graphicDesign = "Graphic Design";
    } else {
        optionChoosed.graphicDesign = null;
    }
}
function stepOne(event) {
    event.preventDefault();
    if (nameInput.value == "" || emailInput.value == "" ) {
        alert("You need to add the data")
    } else {
        nombre = nameInput.value;
        email = emailInput.value;
        let emailCorrect = email.split('').some((element) => element == "@");
        if (emailCorrect) {
            containerOne.classList.add('stepOff');
            containerTwo.classList.remove('stepOff');
            stepText.innerHTML = "Step 2 of 3";
            stepTwoDot.classList.add("blueStart")
        } else {
            alert("You need to add a valid email")
        }
    }
}
function stepTwo(event) {
    event.preventDefault();
    if (optionChoosed.user == null && optionChoosed.software == null && optionChoosed.graphicDesign == null) {
        alert("Debes seleccionar primero alguno de estos 3 al menos.")
    } else {
        containerTwo.classList.add("stepOff");
        containerThree.classList.remove("stepOff");
        stepText.innerHTML = "Step 3 of 3";
        stepThreeDot.classList.add("blueStart")
        nombreObtenido.innerHTML = nombre;
        emailObtenido.innerHTML = email;
        if (optionChoosed.software != null) {
            topicOne.classList.remove("stepOff");
        }
        if (optionChoosed.user != null) {
            topicTwo.classList.remove("stepOff");
        }
        if (optionChoosed.graphicDesign != null) {
            topicThree.classList.remove("stepOff");
        }
    }
}
function stepThree(event) {
    event.preventDefault();
    alert("✅ Success")
}