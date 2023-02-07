//console.log("Let's get this party started!");

const searchBar = document.getElementById('textInput');
const numInput = document.getElementById('numInput');

const submitButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

const display = document.getElementById('gifDisplay');



submitButton.addEventListener('click', handleSubmit);
clearButton.addEventListener('click', handleClear);

async function handleSubmit(e){
    e.preventDefault();
    let query = searchBar.value;
    let res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
        q: query.toString(),
        api_key: "m82yL0YE7yGmWLh50SYQ9ha9eMG0dIRT"
      }});
    
      printGifs(res.data.data);
    
}

function handleClear(e){
    e.preventDefault();
    display.innerHTML = '';
}

function printGifs(gifs){
    console.log(gifs);
    for (let i = 0; i < numInput.value; i++){
        let newGif = document.createElement('img');
        let rando = Math.floor(Math.random() * gifs.length);
        newGif.src = gifs[rando].images.original.url;
        newGif.alt = `gif drawn from ${gifs[i].images.original.url}`;
        display.appendChild(newGif);
    }
    
}

