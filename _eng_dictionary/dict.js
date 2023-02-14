const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info");
const meaningContainerEl = document.getElementById("mean");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";

    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `an error happened, try again later`;
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

// const iel= document.getElementById("input");
// const infoel=document.getElementById("info");
// const meanel=document.getElementById("mean");
// const tel=document.getElementById("title");
// const mel=document.getElementById("meaning");
// const ael=document.getElementById("audio");


// async function fetchAPI(word){
//     infoel.style.display="block";
//     meanel.style.display="none";
//     infoel.innerText=`Searching for "${word}"`;
//     try{
//         const url=`https://api.dictionaryapi.dev/api/v2/entries/en/"${word}"`
//         const re= await fetch(url).then((res)=>res.json()); 
//         infoel.style.display="none";
//         meanel.style.display="block";
//         tel.innerText=re[0].word;
//         mel.innerText=re[0].meanings[0].definations[0].defination;
//         ael.src=re[0].phonetics[0].audio;
//     }
//     catch(error){
//         console.log(error)
//     }
// }



// iel.addEventListener("k",(e)=>{
//     if(e.target.value && e.key==="Enter"){
//         fetchAPI(e.target.value);
//     }
// })