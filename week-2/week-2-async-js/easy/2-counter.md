## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```javascript

let cnt=0;
function countOperation(){
  console.log(cnt);
  cnt++;
  setTimeout(countOperation,1000);
}

countOperation();
```








































































(Hint: setTimeout)