let counterEle = document.getElementById("count-ele");
let saveEle = document.getElementById("save-ele");
let count =0;

function increment() {
    count = parseInt(counterEle.textContent);  
    counterEle.textContent = ++count; 
}
function decrement(){
    if(count == 0){
      return alert("Reached Lower limit!!!");
    }
    counterEle.textContent = --count; 
}
function save() {
    saveEle.textContent += count +"-";
    counterEle.textContent = 0
    count = 0;
}
function reset() {
    if(confirm("Do you want me to Reset?")) {
        counterEle.textContent = 0;
        saveEle.textContent = "Previous element: ";
    }
    return;
}