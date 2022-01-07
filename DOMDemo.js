let btn = document.getElementById('submit');
btn.addEventListener("click",function(){
    //e.preventDefault
    let un = document.getElementById("uname");
    
    if(un.value === "" ){
        let lab1 = document.getElementById("l1");
        lab1.style.visibility="visible";
    }
    let ps = document.getElementById("pass");
    let lab2 = document.getElementById("l2");
    if(ps.value === "" ){
        lab2.style.visibility="visible";
    }
    let ma = document.getElementById("mail");
    let lab3 = document.getElementById("l3");
    if(ps.value === "" ){
        lab3.style.visibility="visible";
    }
    let ph = document.getElementById("phn");
    let lab4 = document.getElementById("l4");
    if(ps.value === "" ){
        lab4.style.visibility="visible";
    }
})

// let a = document;
// console.log(a);



// function check_fun(){
//     let ch = document.getElementById("check");
//     if(ch.checked)
//     {
//         alert("Submitted the details");
//     }
//     else{
//         alert("Checkbox should not be empty");
//     }
// }