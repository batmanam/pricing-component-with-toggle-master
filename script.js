const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const inputCheckBox = document.getElementById('check');



inputCheckBox.addEventListener('click' , () => {
    if(inputCheckBox.checked){
        span1.innerHTML = "19.99";
        span2.innerHTML = "24.99";
        span3.innerHTML = "39.99";
    } else{
        span1.innerHTML = "199.99";
        span2.innerHTML = "249.99";
        span3.innerHTML = "399.99";
    }
})