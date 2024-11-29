let btns=document.querySelectorAll('.btn');
let root=document.querySelector('.root');
let click=document.querySelector('.click');

function makeOperation(){
    let input=document.querySelector("input");
    root.style.background=input.value;
    input.value="";
}
click.addEventListener('click',makeOperation);

for(let btn of btns){

    btn.addEventListener('click',()=>{
        root.style.background=btn.innerText;  
    })
}