const plusElement = document.getElementById("plus");
const minusElement = document.getElementById("minus");
const counterElement = document.getElementById("counter") as HTMLParagraphElement;

let count = 0;

function plusFn() {
    count = count + 1;
    counterElement.innerHTML = String(count);
}

function minusFn() {
    count = count - 1;
    counterElement.innerHTML = String(count);
}

if(plusElement !== null && minusElement !== null && counterElement !== null) {
    plusElement.addEventListener("click", plusFn)
    minusElement.addEventListener("click", minusFn)
}