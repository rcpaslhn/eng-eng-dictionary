const input=document.getElementById("input")
const btn =document.querySelector(".btn")
const content =document.querySelector(".content")
console.log(input,btn,content)
let yazi =input.value


btn.addEventListener("click",function () {
    if(!input.value==""){
        yazi =(input.value).trim().toLowerCase()
    
    
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${yazi}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            
    
            content.innerHTML=`
            <p>Word: <span id="text">${data[0].word}</span> </p>
            <p style="margin-top: 20px;">Meaning:${data[0].meanings[0].definitions[0].definition} </p>
            <audio src="${data[0].phonetics[0].audio}" controls style="margin-top:20px"></audio>
    
            `
        
        input.value=""
        })
        .catch(err => alert("gecerli kelime giriniz"))
        
    }else{
        alert("Enter a word!!")
    }
   
  })

// const foundWord=async function () {

    
//     const res =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
//     const data = await res.json()

//     if(data.title){
//         alert("Enter valid word!")
//     }else{
//         content.innerHTML=`
//                      <p>Word: <span id="text">${data[0].word}</span> </p>
//                      <p style="margin-top: 20px;">Meaning:${data[0].meanings[0].definitions[0].definition} </p>
//                      <audio src="${data[0].phonetics[0].audio}" controls style="margin-top:20px"></audio>
            
//                    `
//                    input.value=""

//     }
//   }
//   btn.addEventListener("click",foundWord)