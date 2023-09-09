let input = document.getElementById('input-email');
let error = document.getElementById('error');
let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn2')
let cont1 = document.getElementById('container');
let cont2 = document.getElementById('success-message');

btn1.addEventListener('click', wrongdata);

function wrongdata() {
let validRegex =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
   if (input.value.match(validRegex)) {
    msg.textContent = input.value;
    cont1.style.display = "none";
    cont2.style.display = "block";
   } else {
    input.style.border = '1px solid hsl(4, 100%, 67%)';
    input.style.color = 'hsl(4, 100%, 67%)';
    input.style.backgroundColor = 'hsl(4, 100%, 88%)';
    input.style.position = 'relative';
    input.style.bottom = '50px';
    btn1.style.position = 'relative';
    btn1.style.bottom = '50px';
    error.textContent = 'Valid email required';
    }
}

btn2.addEventListener('click', back);

function back() {
    cont1.style.display = "block";
    cont2.style.display = "none";
    input.value = '';
    error.style.display = 'none'
}