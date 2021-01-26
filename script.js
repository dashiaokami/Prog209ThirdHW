document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
document.getElementById("customers").disabled = true;

});
let info = [];
let j = 0;
let btn = document.getElementById("sub");
btn.addEventListener("click", function() {
let name = document.getElementById("custname").value;
let city = document.getElementById("city").value;

let pay = document.getElementById("payment").value;


let myUl = document.getElementById("list");

if(j === 3){
info.shift();
j--;
}
info[j] =  name +" "+ city +" "+ pay;
j++;
myUl.innerHTML = "";

for (let i = 0; i < info.length; i++){
let li = document.createElement("li");
li.innerHTML = info[i];
myUl.appendChild (li);
}
});
