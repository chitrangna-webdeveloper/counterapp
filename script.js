let count = document.getElementById("count");

let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

let counter = 0;

increase.addEventListener("click",function(){

    counter++;

    count.innerText = counter;

});

decrease.addEventListener("click",function(){

    if(counter > 0){

        counter--;

        count.innerText = counter;

    }

});

reset.addEventListener("click",function(){

    counter = 0;

    count.innerText = counter;

});