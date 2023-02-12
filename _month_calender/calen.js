const mel = document.querySelector(".date h1");
const dael = document.querySelector(".date p");
const daysel = document.querySelector(".days");
const minx= new Date().getMonth();
const lastdayel=new Date(new Date().getFullYear(),minx+1,0).getDate();

const m=[
    "January", 
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

mel.innerText=m[minx];
dael.innerText=new Date().toDateString();

let days="";

for(let i=1;i<=lastdayel;i++){
    if( i=== new Date().getDate()){
        days+=`<div class="today">${i}</div>`;
    }
    else{
        days+=`<div>${i}</div>`;
    }
}

daysel.innerHTML=days;