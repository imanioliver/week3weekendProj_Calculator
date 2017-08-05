let calculations =[];
let calcWindow = document.getElementById("blank");
let calcEvents = document.getElementsByClassName('calculatorBody')[0];



calcEvents.addEventListener("click", buttonClicking);

function buttonClicking(event) {

    let value = event.target.dataset.value;
    calcWindow.textContent += value;
        event.target.dataset.value;
    console.log(value);

    if (value== '1'){
        console.log("number1")
        calculations = calculations + value;

    }if (value== '2'){
        console.log("number2")
        calculations = calculations + value;
    }if (value== '3'){
        console.log("number3")
        calculations = calculations + value;
    }if (value== '4'){
        console.log("number4")
        calculations = calculations + value;
    }if (value== '5'){
        console.log("number5")
        calculations = calculations + value;
    }if (value== '6'){
        console.log("number6")
        calculations = calculations + value;
    }if (value== '7'){
        console.log("number7")
        calculations = calculations + value;
    }if (value== '8'){
        console.log("number8")
        calculations = calculations + value;
    }if (value== '9'){
        console.log("number9")
        calculations = calculations + value;
    }if (value== '0'){
        console.log("this is 0")
        calculations = calculations + value;
    }if (value== '+'){
        console.log("thisIsPlus")
        calculations = calculations + value;
    }if (value== '-'){
        console.log("thisIsPlus")
        calculations = calculations + value;
    }if (value== '/'){
        console.log("thisIsPlus")
        calculations = calculations + value;
    }if (value== '*'){
        console.log("thisIsPlus")
        calculations = calculations + value;
    }if (value== '='){
        console.log("evaluate NOW!")
        calcWindow.textContent+=element.target.innerHTML;
    }if (value=='c'){
        calculations = [];
    }
    console.log(eval(calculations.join));
}



    // if
    // console.log(eval(calculations.join));
    // console.log(calculations);

// }


//for sum, do if statment, the

















//
//
// let calculations =[];
// let calcWindow = document.getElementById("blank");
//
// // let sevenButton = document.getElementById('seven');
// // viewValue.addEventListener("click",function(){
// //     calcWindow.innerHTML = '7';
// //
//
// // //     // alert("seven is clicked");
// // })




//
//
// function buttonClicking(event) {
//
//     let value = event.target.dataset.value;
//     calcWindow.textContent += value;
//         event.target.dataset.value;
//
//
//
//
//     // console.log(event);
//     // console.log(event.target.innerHTML);
//     console.log(value);
//     // console.log(event.target.innerHTML);
//     // if (event.target) {
//         // console.log(value); ---
// }
