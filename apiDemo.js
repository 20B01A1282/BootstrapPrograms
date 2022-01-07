let btn = document.getElementById("gbtn");
btn.addEventListener("click",getdata);

function getdata(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhr.onload = function(){
        let data = JSON.parse(this.responseText);
        // console.log(this.responseText);
        displaydata(data);
    }
    xhr.send();
    
    function displaydata(data){
        let tdata = document.getElementById("tabledata");
        for (let i in data){
            let row = `
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            </tr>
            `
            tdata.innerHTML += row;
        }
    }
}