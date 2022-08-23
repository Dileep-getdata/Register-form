const myform=document.querySelector('#my_forms');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email')
const btn=document.querySelector('#btn');
const use=document.querySelector('#items');
btn.addEventListener('mouseover',onMouse);
function onMouse(e){
    e.preventDefault();
    btn.style.background='black';
}
btn.addEventListener('mouseout',offMouse);
function offMouse(e){
    e.preventDefault();
    btn.style.color='white';
}
myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    use.appendChild(li);
    nameInput.value=''
    emailInput.value=''
    console.log(nameInput.value);
}