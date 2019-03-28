const checkerNumber = document.querySelector('checker--number')
const checkerResult = document.querySelector('checker--result')

const checkerSubmit =  document.querySelector('checker--submit')

const checkerValue = document.querySelector('checker--value')
//let resetButton; (not sure if this is needed for mine? check MDN page)

console.log('This Works')

checkerSubmit.addEventListener('click', evenCheck);


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