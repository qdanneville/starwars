let peopleZone = document.querySelector('.people-zone');
let planeteZone = document.querySelector('.planete-zone');
let starshipZone = document.querySelector('.starship-zone');

let resultZone = document.querySelector('.result-zone');

function getPeople() {
    fetch('https://swapi.co/api/people/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}

getPeople();
