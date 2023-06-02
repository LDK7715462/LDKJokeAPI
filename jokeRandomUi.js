/*
// Rick and Morty API: https://rickandmortyapi.com/
// Testing an API

// Function that fetches our characters based on the name from the input field
function fetchCharacters() {
    const inputValue = document.getElementById('character-input').value;
  
    // using Fetch to get the api characters
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
      .then(resp => resp.json())
      .then(data => {
        formatCharacters(data.results);
      });
  }
  
  // Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
  function formatCharacters(characters) {
    const charDiv = document.getElementById('characters');
    charDiv.innerHTML = '';
  
    // foreach to get all the characters
    characters.forEach(character => {
      charDiv.innerHTML += `<div><img src="${character.image}"><h2>${character.name}</h2></div>`;
    });
  }
  */
  
  // Function that fetches our jokess based on which button is clicked
function fetchAJoke() {
  
    // using Fetch to get the joke
    fetch(`https://official-joke-api.appspot.com/jokes/programming/random`)
      .then(resp => resp.json())
      .then(data => {
        formatMe(data);
      });
  }
  
  function fetchTenJokes() {
  
    // using Fetch to get the 10 jokes
    fetch(`https://official-joke-api.appspot.com/random_ten`)
      .then(resp => resp.json())
      .then(data => {
        formatMe(data);
      });
  }
  
  
  // Function that formats the data that has been returned from our joke fetch (and appends it to the DOM)
  function formatMe(randomJokes) {
    const charDiv = document.getElementById('randomJokes');
    charDiv.innerHTML = '';
  
    // foreach to lay out the jokes
    randomJokes.forEach(Joke => {
      charDiv.innerHTML += `<div><h2>Joke ID: ${Joke.id}</h2><h2>Joke Type: ${Joke.type}</h2><h2>Setup: ${Joke.setup}</h2><h2>Punchline: ${Joke.punchline}</h2></div>`;
    });
  }
  