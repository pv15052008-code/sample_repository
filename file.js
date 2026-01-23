//  ======================================================lecture 1 {variables and data  types}=======================================================================================
console.log("my name is payal verma");
console.log("my name is payal verma");
fullname = "payalverma"
radius = 14
age = 17
price = 99.99
a = null
y = undefined 
console.log(fullname);
console.log(radius);
console.log(age);
console.log(price);
console.log(a);
console.log(y);


{
    let a=20;
    console.log(a)
}

{
    let a= 25;
    console.log(a)
}
 
const student = {
    fullname: "payalverma",
    age: 17,
    cgpa: 9.5,
    ispass: true,
};

student["fullname"] ="payalsoni" 
console.log(student["fullname"])
student["age"] = student["age"] + 1
console.log(student["age"])
// create a const object called product to store information shown in the picture 
const product = {
    tittle:"ball pen",
    rating: 5 ,
    price: 270 ,
    offer: 5 ,
};
console.log(product);  

// ========================================lecture 2 operators and conditional statement==============================================================================================
console.log(a)
var a=1234;
let b=12345;

console.log(a);
console.log(b);
setInterval(() => {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
let count = 1;
const intervalId = setInterval(() => {
  console.log(count);
  count++;
}, 1000);