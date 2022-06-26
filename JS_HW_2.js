// const age_2 = 18
// const age_3 = 60

// const checkAge = function (age_1)
// {
// if (age_1<age_2) {
//     console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It's less then");
// } else if (age_1 >= age_2 && age_1 < age_3) {
//     console.log("Welcom !");
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// }
// // else console.log("Not an integer value")
// }

// checkAge (17)
// checkAge (20)
// checkAge (60)
// checkAge ("61")
// checkAge("0")


// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function (age_1) {
// if (age_1 && !isNaN(age_1)) {
//     if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It's less then");
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !");
//     } else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//         }
//     }else console.log("Not an integer value")
//     }

// checkAge (17)
// checkAge (18)
// checkAge (60)
// checkAge (61)
// checkAge ("aaa")
// checkAge ("20")
// checkAge ("0")
// checkAge (" ")

// const age_2 = 18
// const age_3 = 60

// const checkAge = function (age_1){
// if (typeof age_1 == 'number'){
//     if (age_1<age_2) {
//         console.log("You don’t have access cause your age is" + " " + age_1 + " " + "It's less then")
//     } else if (age_1>=age_2&&age_1<age_3) {
//         console.log("Welcome !")
//     } else if (age_1>age_3) {
//         console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//         }
//         }
//     }
// checkAge ("17")
// checkAge ("19")
// checkAge (60)
// checkAge (61)


const age_2 = 18;
const age_3 = 60;
const div = document.getElementById('d')
const checkAge = function (...age_1) {
    age_1.forEach(el => {
        if (el && !isNaN(el)) {
    if (el < age_2) {
        div.innerHTML+= el+  ": You don’t have access cause your age is" + " " + el + " " + "It's less then" + '<br/>';
        } else if (el >= age_2 && el < age_3) {
        div.innerHTML+= el + ": Welcome !" + '<br/>';
    } else if (el > age_3) {
        div.innerHTML+= el + ": Keep calm and look Culture channel" + '<br/>';
    } else {
        div.innerHTML+= el+ ": Technical work" + '<br/>';
        }
    }else div.innerHTML+= el+ ": Not an integer value" + '<br/>';
    })
    }



checkAge(17, 18, 30, 60, 61, '20', 'fff', '0')