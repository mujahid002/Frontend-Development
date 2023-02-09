const hr=document.querySelector(".hours")
const min=document.querySelector(".minutes")
const sec=document.querySelector(".seconds")
function up(){
    const d=new Date();
    // setTimeout(up,1000);
    const h=d.getHours();
    const m=d.getMinutes();
    const s=d.getSeconds();
    const hd= (h/12)*360;
    hr.style.transform = `rotate(${hd}deg)`;
    const md= (m/60)*360;
    min.style.transform = `rotate(${md}deg)`;
    const sd= (s/60)*360;
    sec.style.transform = `rotate(${sd}deg)`;
}
setInterval(up,1000)