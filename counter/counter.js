let counter=0;

let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click',() => {
     counter++;
     counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click',() => {
     counter--;
     counterValue.innerHTML = counter;
});
 resetBtn.addEventListener('click',reset);

 function reset(){
    counter = 0;
    counterValue.innerHTML = counter;
 }