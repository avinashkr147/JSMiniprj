const quoteShow = document.querySelector(".quote-show");
const quoteType = document.getElementById("quote-type");

const para = document.querySelector(".para");
const language = document.getElementById("language");
const nextBtn = document.getElementById("next"); 
const alert1 = document.querySelector(".alert-text");

function alertText(){
   const timeout= setTimeout(()=>{
     alert1.innerHTML = ''; 
},2000)
alert1.innerHTML = 'Pls Select your Quote type'

       
}

 
function mainfun(){
    let api = quoteType.value;
 fetch(api)
 .then((response)=>{
      return response.json()
 })
 .then((data)=>{
    console.log(data);
    
 quoteShow.innerHTML =data.quote;
 para.innerHTML = `~ ${data.type}`;
 })

}

nextBtn.addEventListener("click",()=>{
if (quoteType.value !== '') {
    mainfun(); 
    
}else{
      alertText()

}
})