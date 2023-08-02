let numVal = document.querySelector("#numVal")
let display = document.querySelector("#display")

function checkNum() {
    if(numVal.value % 2 == 0) {
        display.innerHTML = "It's Even Number";
    }

    else {
        display.innerHTML = "It's Odd Number";
    }
}


// function clear() {
//     if (numVal.value = 0) {
//     display.innerHTML = "Pls type a number";
//     }
//     else {
//         display.innerHTML = "Pls Type a number";
//     }
//     console.log(numVal.value)
// }