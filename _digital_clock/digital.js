const hel=document.getElementById("hr");
const mel=document.getElementById("min");
const sel=document.getElementById("sec");
const apl=document.getElementById("ampm");


function upc(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    let ap="AM";

    if(h>12){
        h=h-12;
        ap="PM";
    }
    if(h==0){
        h=12;
        ap="AM";
    }

    h=h<10 ? "0"+h:h;
    s=s<10 ? "0"+s:s;
    m=m<10 ? "0"+m:m;

    hel.innerText=h;
    mel.innerText=m;
    sel.innerText=s;
    ampm.innerText=ap;

    setInterval(() => {
        upc();
    }, 1000);
}

upc();