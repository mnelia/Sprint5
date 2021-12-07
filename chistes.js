

const jokeApiUrl = "https://icanhazdadjoke.com/";


 
// event listener para obtener nuevo chiste
document.getElementById("jokeButton").addEventListener("click", getJoke);

//botones de puntaje 
const puntaje1 = document.querySelector('#score-1');
const puntaje2 = document.querySelector('#score-2');
const puntaje3 = document.querySelector('#score-3');

//funcion para obtener un nuevo chiste al hacer click 
async function getJoke(){
    await fetch(jokeApiUrl, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    //json para mostrar la data de todo el objeto 
    .then((resp) => resp.json())
    .then(data => document.getElementById("output").innerHTML = data.joke);  
}

