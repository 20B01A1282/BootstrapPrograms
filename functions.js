// //Function
// function welcome(){
//     console.log("welcome");
// }
// welcome();


// //Arrow function
// x = () =>{
//     return 'hello'
// }
// console.log(x());

// //Arrow function
// x = ()=>{
//     console.log("Hello");
// }
// x();


// //variable declaration
// let arr =[1,2,3,4];
// console.log(arr[0]);


// //methods
// let a = [1,2,3,4];
// console.log(a);
// a.push(11);
// console.log(a);
// a.unshift("Hello");
// console.log(a);
// console.log(a.pop());
// console.log(a.shift());
// console.log(a.length);


// //objects
// let student = {
//     regdno :'1282',
//     name :"Sravya",
//     branch : "IT",
// }
// console.log(student);
// console.log(typeof student);
// //console.log(regdno);
// console.log(student.regdno);

let student = {
    regdno :'1282',
    name :"Sravya",
    welcome:function(){
        console.log(`welcome to ${this.regdno}`)
    }
}
student.welcome();