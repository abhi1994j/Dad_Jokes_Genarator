const headers ={
    headers:{
        "X-Api-Key" :  "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll", 
    }
   
} ;

const url = `https://api.api-ninjas.com/v1/dadjokes`

const btn = document.getElementById("btn");
// console.log(btn.disabled);
const jokes = document.getElementById("jokes")
const getJokes =async()=>{
    try{
        jokes.innerText = "Updating. . ."
        btn.disabled =  true;
        btn.innerText = "Loading..."
        const res = await fetch(url , headers); 
        console.log(res);
        const data = await res.json();
        console.log("Jokes-", data[0].joke);
        setTimeout(() => { 
            console.log(data);
            jokes.innerText = data[0].joke;
            btn.disabled = false;
            btn.innerText = "Tell Me a Joke";
         }, 300)
    }
    catch(error){
        setTimeout(() => { 
            jokes.innerText = "An error happened, Please try again later";
            btn.disabled = false ;
            btn.innerText = "Tell Me a Joke" ;
         }, 300)       
    }
}
btn.addEventListener("click" , getJokes)