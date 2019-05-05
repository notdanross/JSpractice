// const happy = 10
// const sad = 9
// const groupOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 10]
// const groupTwo = [3, 3, 3, 3, 2, 2, 2, 2, 7, 9, 4, 6]

document.getElementById('evenSubmit').addEventListener('click', evenCheck);


//even checker works in console
function evenCheck() {
    const evenNumber = document.getElementById('checker--value')
    
    event.preventDefault();
    console.log('you clicked a button');
    if (evenNumber%2 == 0)
        console.log('even number')
    // else if (happy%2 != 0)
    // console.log('not even')
    document.getElementById('checker--number').innerHTML = "";
    document.getElementById('checker--result').innerHTML = "";
}


//even return works in console
const evenReturn = function (groupOne){
    for (var i = 0; i < groupOne.length; i++){ 
    if (groupOne[i]%2 == 0)
        console.log(groupOne[i])
    } 
};

//oddSum works in console
const oddSum = function (groupTwo){
    var total = 0;
    for (var i = 0; i < groupTwo.length; i++){
        if (groupTwo[i]%2 != 0)
        total = total + groupTwo[i]
    }
    console.log(total)
}

// these are constants to go with the functional site
// const checkerNumber = document.getElementsByClassName('checker--number')
// const checkerResult = document.getElementsByClassName('checker--result')

// const checkerSubmit =  document.getElementsByClassName('checker--submit')

// const checkerValue = document.getElementsByClassName('checker--value')
// //let resetButton; (not sure if this is needed for mine? check MDN page)

// console.log('This Works')

// checkerSubmit.addEventListener = ('click', console.log('this button works'));


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