// Problem 1. Solution is 16 lines.

const ghostButton = document.querySelector("#show-ghosts");
const ghosts = document.querySelectorAll("span[hidden], span[data-ghosts]");
ghostButton.addEventListener('click', (e) => {
    if (e.target.innerHTML === "Show Ghosts") {
        e.target.innerHTML = "Hide Ghosts"
    } else {
        e.target.innerHTML = "Show Ghosts"
    }
    ghosts.forEach ((ghost) => {
        if (ghost.hasAttribute("hidden")) {
            ghost.removeAttribute("hidden");
            ghost.setAttribute("data-ghosts", '');
        } else {
            ghost.setAttribute("hidden", '');
            ghost.removeAttribute("data-ghosts")
        }
    })
}) 


// Problem 2. (Solution is 45 lines).
// https://pokeapi.co/api/v2/pokemon-species/?limit=100
// https://pokeapi.co/api/v2/pokemon/venusaur
// https://api.datamuse.com/words?sl=venusaur

// get the images
    // sprites.back_default
    // sprites.front_default
    // sprites.back_shiny
    // sprites.front_shiny
    // image containter: document.querySelector("#pokemon-images")
    // for each image url: `<img src="${url}">`
        // empty it: document.querySelector("#pokemon-images").innerHTML = ''
// get the rhymes
    // https://api.datamuse.com/words?<POKEMON>
    // rhyme container: document.querySelector("#pokemon-rhymes")
// get options in the select menu (default is --select an option--)

const pokeSelector = document.querySelector("[data-pokemons]");
pokeSelector.innerHTML += '<option disabled="" selected="" value=""> -- select an option -- </option>';

fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=100')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            option.innerHTML = pokemon.name;
            pokeSelector.appendChild(option);
            // or pokeSelector.innerHTML += `<option>${pokemon.name}</option>`;
        })
    })

    pokeSelector.addEventListener('change', (e) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    const imgContainer = document.querySelector("#pokemon-images");
                    imgContainer.innerHTML = '';
                    const imgUrls = [data.sprites.front_default, data.sprites.back_default, data.sprites.front_shiny, data.sprites.back_shiny];
                    imgUrls.forEach(url => {
                        imgContainer.innerHTML += `<img src="${url}">`;
                    });

                fetch(`https://api.datamuse.com/words?sl=${e.target.value}`)
                    .then(response => response.json())
                    .then(data => {
                        const rhymeContainer = document.querySelector("#pokemon-rhymes");
                        rhymeContainer.innerHTML = '';
                        console.log(data);
                        let index = 0;
                        let interval = setInterval(() => {
                            if (index < data.length) {
                                rhymeContainer.innerHTML = data[index].word;
                                index++;
                            } else {
                                index = 0;
                            }
                        }, 800);

                        pokeSelector.addEventListener('change', () => {
                            clearInterval(interval);
                        })

                    })

                });
            });

        
            



// Problem 3 (solution has 6 lines)

const redactor = document.querySelector("#redactor");

document.querySelector('body').addEventListener('mouseover', (e) => {
    if (redactor.checked){
        e.target.style['background-color'] = 'black';
    }
})



// Problem 4 (solution has 11 lines)


// Problem 5 (solution has 10 lines)



