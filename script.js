const countText = document.getElementById("count");
let counter = 0;

let storageCounter = localStorage.getItem("counter");
//Local storage stores it as a string appending 1 to the end of the string
if(storageCounter == null){
  counter = 0;
}
else{
  counter = parseInt(storageCounter);
  refreshUI();
}

function addOne(){
  counter += 1;
  localStorage.setItem("counter", counter);
  refreshUI();
}

function resetCounter(){
  counter = 0;
  refreshUI();
}

function refreshUI() {
  countText.innerText = `Count: ${counter}`;
}