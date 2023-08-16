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


// let tabs = document.querySelectorAll(".tabs h3");
// let tabContents = document.querySelectorAll(".tab-content div");

// tabs.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     tabContents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tabContents[index].classList.add("active");
//     tabs[index].classList.add("active");
//   });
// });
