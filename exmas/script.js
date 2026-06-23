function checkNumber() {

    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    if (number % 2 === 0) {
        result.innerHTML = number + " is an Even Number";
        result.style.color = "green";
    } else {
        result.innerHTML = number + " is an Odd Number";
        result.style.color = "blue";
    }
}