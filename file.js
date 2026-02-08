//  ======================================================lecture 1 {variables and data  types}=======================================================================================
/* console.log("my name is payal verma");
 console.log("my name is payal verma");
 fullname = "payalverma"
 radius = 14
// age = 17
// price = 99.99
// a = null
// y = undefined 
// console.log(fullname);
// console.log(radius);
// console.log(age);
// console.log(price);
// console.log(a);
// console.log(y);


// {
//     let a=20;
//     console.log(a)
// }

// {
//     let a= 25;
//     console.log(a)
// }
 
// const student = {
//     fullname: "payalverma",
//     age: 17,
//     cgpa: 9.5,
//     ispass: true,
// };

// student["fullname"] ="payalsoni" 
// console.log(student["fullname"])
// student["age"] = student["age"] + 1
// console.log(student["age"])
// // create a const object called product to store information shown in the picture 
// const product = {
//     tittle:"ball pen",
//     rating: 5 ,
//     price: 270 ,
//     offer: 5 ,
// };
 console.log(product); */ 

// // ======================================== COLLEGE CODE ==============================================================================================
// // console.log(a)
// // var a=1234;
// // let b=12345;

// // console.log(a);
// // console.log(b);
// // setInterval(() => {
// //     const timeDisplay = document.getElementById('time-display');
// //     const now = new Date();
// //     const hours = String(now.getHours()).padStart(2, '0');
// //     const minutes = String(now.getMinutes()).padStart(2, '0');
// //     const seconds = String(now.getSeconds()).padStart(2, '0');
// //     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
// // }, 1000);
// // let count = 1;
// // const intervalId = setInterval(() => {
// //   console.log(count);
// //   count++;
// // }, 1000);
// const form=document.querySelector("form")
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log("button clicked")
// })
//  var a=3453
//  let b=456;

//  console.log(a)
//  console.log(b)

//  function print(){
//     console.log("inside fn")
//  }
 
//  print()

// console.log("This is the beginning of the code.")
// setTimeout(() =>{console.log("After 2 seconds")},2000);
// console.log("This is the end of the code.")


// setTimeout(()=>{console.log("Tring tring tringg, times up")},5000)

// const interval=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// console.log(interval)

// const interval2=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// console.log(interval2)

// const interval=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// setTimeout(()=>{clearInterval(interval)},10000)

// const timeout=setTimeout(()=>{console.log("after 2 seconds...")},2000)
// clearTimeout(timeout)

// let count=0;
// const value=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===10){
//         clearInterval(value)
//     }
// },1000)

// console.log("first line")
// setTimeout(() => {
//     console.log("inside timeout")
// },0);
// console.log("last line")

// console.log("starting homework")

// setTimeout(() => {
//     console.log("homework completed");
//     console.log("dinner is ready");
//     setTimeout(() => {
//         console.log("dinner done");
//         console.log("getting ready to go out");
    
//         setTimeout(() => {
//            console.log("going out") 
//         },1000);
//     }, 1500);
// }, 2000);

// function finishhomework(callback){
//     console.log("starting homework...");
//     setTimeout(()=>{
//         console.log("homework completed");
//         callback();
//     },2000);
// }
// function eatdinner(callback){
//     console.log("dinner is ready")
//     setTimeout(() => {
//       console.log("dinner is done")  
//     },1500);
// }
// function goOut(){
//     console.log("getting to go out");
// }
// finishhomework(()=>{
//     eatdinner(()=>{
//         goOut();
//     });
// })

// const p=new Promise((resolve, reject) => {
//     console.log("I promise to do my homework by tomorrow.");
//     setTimeout(() => {
//         const didhomework=true;
//         if(didhomework){
//             resolve("i completed my homework and submitted it.")
//         }
//         else{
//             reject("I forgot to do my homework.")
//         }
//     }, 2000);
// })
// console.log("waiting for the homework to finish...")
// console.log(p);

// p.then((a)=>{
//     console.log(a);
// })
// .catch((err)=>{
//     console.log(err);
// })
console.log("first line ")
setTimeout(()=>{


}
)
function orderfood(){
    return new promise((res,rej)=>{
        setTimeout(()=>{
            console.log("foodordered")
            res()

        },2000)
    })
}

function prepareFood(){
    return new promise((res,rej)=>{
        setTimeout(()=>{
            console.log("food prepared")
            res()
            //rej ("order cancelled")
        },2000)
    })
}

function deliverFood(){
    return new promise((res,rej)=>{
        setTimeout(()=>{
            console.log("food delivered")
            res()
        },2000)
    })
}
async function foodOrdered(){
    await orderfood()
    await prepareFood()
    await deliverFood()
    console.log("enjoy ur food")

}
foodOrdered()




// =====================================================lecture 2 {operators AND conditional statements}=======================================================================================
// // Arithmetic Operators
// let a = 10;
// let b = 3;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b); // exponentiation        
// // Increment and Decrement Operators(unary operators)
// // for incerment post 
// let c=10;
// let d=20;
// // console.log("c=",c,"d=",d);
// // console.log("c++",c++)
// // console.log("c++",c)
// // // for increment pre 
// // console.log("++c","=",++c )
// // for post decrement
// console.log("c=",c,"d=",d);
// console.log("c--",c--)
// console.log("c--",c)
// // for  pre decrement    
// console.log("--c","=",--c ) 
//=======================================for assigment operators ================================
/*let x=28;
let y=7;
x+=y
console.log("x=",x) //+= operator
x-=y
console.log("x=",x) //-= operator
x*=y
console.log("x=",x) //*= operator
x%=y
console.log("x=",x) //%= operator
x**=y
console.log("x=",x) //**= operator*/
// ===================================comparison operator ===================================================================
/*// 
let a=5
let b=4
let c="5"
console.log("5==4", a==b )// false 
console.log("5!=4", a!=b )// true 
console.log("5==5", a==c )// true 
console.log("5>=4", a>=b )// true 
console.log("5<=4", a<=b )// false
console.log("5===5", a===c ) //false*/ 
//=====================================================// logical operator================================================
 // logical And operator("&&")
 /*
let a=5
let b=4
let c="5"
let cond1 = a<b
let cond2 = c===5
console.log("cond1-&&-cond2=" , cond1&&cond2 ) // true
console.log("cond1-||-cond2",cond1||cond2 )
console.log("!(a<b)=",!(a<b) )//true 
*/





