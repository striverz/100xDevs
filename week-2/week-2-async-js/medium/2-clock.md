Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


 ```js
 function findTime(){
  const now=new Date();
  //24 hour format
  const getHours=now.getHours().toString().padStart(2,'0');
  const getMinutes=now.getMinutes().toString().padStart(2,'0');
  const getSeconds=now.getSeconds().toString().padStart(2,'0');


  console.log(`24 hour format ${getHours} :${getMinutes} : ${getSeconds}`);
  
}


setInterval(findTime,1000);
 ```
