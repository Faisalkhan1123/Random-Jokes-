//GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokesbtn=document.querySelector('#jokebtn');
 const generatejokes=async()=>{
    try{
        const setHeader={
            headers:{
                Accept: "application/json"
            }
        }
        const res= await fetch('https://icanhazdadjoke.com/' ,setHeader);
        const data=await res.json();
        jokes.innerHTML=data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    }
 }

jokesbtn.addEventListener('click',generatejokes);
generatejokes();