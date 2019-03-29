const checkerNumber = document.getElementsByClassName('checker--number')
const checkerResult = document.getElementsByClassName('checker--result')

const checkerSubmit =  document.getElementsByClassName('checker--submit')

const checkerValue = document.getElementsByClassName('checker--value')
//let resetButton; (not sure if this is needed for mine? check MDN page)

console.log('This Works')

checkerSubmit.addEventListener = ('click', console.log('this button works'));

const evenCheck = function (happy){
    if (happy%2 == 0)
        console.log('even number')
else if (happy%2 != 0)
    console.log('not even')
}

//this is my fizz buzz question solution
// for (i = 1; i < 100; i++){
//     if (i%3 == 0 && i%5 == 0){
//         console.log('fizzbuzz')
//     } else if (i%5 == 0){
//         console.log('buzz')
//     } else if (i%3 == 0){
//         console.log('fizz')
// }else console.log(i)
// } 