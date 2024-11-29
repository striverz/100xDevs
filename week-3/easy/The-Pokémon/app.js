let root=document.querySelector('.root');

let clickBtn=document.querySelector('.click-btn');

clickBtn.addEventListener('click',()=>{
    let inputVal=document.querySelector('input').value;
    let paretNode=clickBtn.parentNode;
   

    if(inputVal>0 && inputVal<=100){
        getData(inputVal);
        paretNode.remove();
    }
    else{
        let p=document.createElement('p');
        p.innerText='Enter the values between 1 and 100';
        paretNode.append(p);

    }
    
    
   
})

async function getData(total){
    
    for(let i=1;i<total;i++){
        const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const json=await data.json();

        const imgLink=json.sprites.front_default;

        let div=document.createElement('div');
        let h1=document.createElement('h1');
        let img=document.createElement('img');
        div.classList.add('pokoman')

        img.setAttribute('src',imgLink);

       
        h1.innerText=json.name;
        div.append(h1,img);
        root.append(div)


        
    }
}

