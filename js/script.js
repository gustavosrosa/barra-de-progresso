let progressElement = document.querySelector("#progress");
let valueProgress = parseInt(progressElement.getAttribute("value"));
let goBackElement = document.querySelector("#go-back");
let nextElement = document.querySelector("#next");

function goBack() {
    valueProgress = valueProgress - 5;
    set(valueProgress);
}

function next() {
    valueProgress = valueProgress + 5;
    set(valueProgress);
}

function set(value) {
    progressElement.setAttribute("value", value);
}

document.addEventListener('click', () => {
    goBackElement.disabled = (valueProgress == 0);
    nextElement.disabled = (valueProgress == 100);
});