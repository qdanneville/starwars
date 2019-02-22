// let peopleZone = document.querySelector('.people-zone');
// let planeteZone = document.querySelector('.planete-zone');
// let starshipZone = document.querySelector('.starship-zone');
// let resultZone = document.querySelector('.result-zone');

let peopleZone = 'people-zone';
let planeteZone = 'planets-zone';
let starshipZone = 'starship-zone';


function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function getZoneScreen(zone) {
  let currentZone = document.querySelector('.' + zone);
  return currentZone.querySelector('.screen');
}

// console.log(getZoneScreen('people-zone'));
// console.log(getZoneScreen('planete-zone'));
// console.log(getZoneScreen('starship-zone'));

function displayOnScreen(screen, content) {
  let lol = screen.appendChild(content);
}

// let span = createNode('span');
// span.innerHTML = 'Hey !'; 

// console.log(getZoneScreen(peopleZone));
// console.log(span);
// getZoneScreen(peopleZone).appendChild(span);

class Game {
  constructor(title) {
    this.title = title;
  }

  static setPlayer(nbPlayer) {
    return
  }
}


// fetch('https://swapi.co/api/people/')
//   .then((response) => response.json()) // Transform the data into json
//   .then((data) => {
//     let players = data.results; // Get the results
//     console.log(players);
//     return players.map(player => { // Map through the results and for each run the code below
//       let li = createNode('li'), //  Create the elements we need
//         span = createNode('span');

//       span.innerHTML = `Hey i'm ${player.name} and my birth year is ${player.birth_year}`;

//       let screen = getZoneScreen(peopleZone)
//       append(li, span);
//       screen.appendChild(li);
//     })
//   });

function getContent(zone) {
  fetch('https://swapi.co/api/' + zone + '/')
    .then((response) => response.json()) // Transform the data into json
    .then((data) => {
      let results = data.results; // Get the results
      console.log(results);
      return results.map(result => { // Map through the results and for each run the code below
        let li = createNode('li'), //  Create the elements we need
          span = createNode('span');

        span.innerHTML = `Hey i'm ${result.name}`;

        let screen = getZoneScreen(zone+'-zone');
        append(li, span);
        screen.appendChild(li);
      })
    });
}

getContent('people');
getContent('planets');
getContent('starships');

  // TODO Faire un loader pour le fetch de l'api


