//1. querySelectorAll
//#ordered-dinos - parent ID


let dinoStrike = document.querySelectorAll('#ordered-dinos li')

function olStrike(){
    for(let i = 0; i < dinoStrike.length; i++){
        dinoStrike[i].addEventListener('click', function(){
           console.log(dinoStrike[i].innerText)
           dinoStrike[i].style.textDecoration = "line-through"
        })
    }
}

olStrike();

//2. Bubbling
let dinoOpacity = document.querySelector('#unordered-dinos');


dinoOpacity.addEventListener('click', function(event){
    let element = event.target
    element.style.opacity = "0.0"
})

//3. 

let dinoVanish = document.querySelector('#row')

dinoVanish.addEventListener('click', function(event){
    let element = event.target
    element.style.display = 'none'
})

//4.

destroyerButton = document.querySelector('#destroy-all')

destroyerButton.addEventListener('click', function(){
    for(let i = 0; i < dinoStrike.length; i++){
        dinoStrike[i].style.textDecoration = 'line-through'
    }
    dinoOpacity.style.opacity = '0'
    dinoVanish.style.display = 'none'


})