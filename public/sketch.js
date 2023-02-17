
let pokeID;

async function getData (pokeID){
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
    data = await res.json();
    console.log(data);
    render();
}

document.getElementById("Bulbasaur").addEventListener('click', function(){
    pokeID = 1;
    getData(pokeID);
});

document.getElementById("Charmander").addEventListener('click', function(){
    pokeID = 4;
    getData(pokeID);
});

document.getElementById("Squirtle").addEventListener('click', function(){
    pokeID = 7;
    getData(pokeID);
});

document.getElementById("Pikachu").addEventListener('click', function(){
    pokeID = 25;
    getData(pokeID);
});

function render(){
    document.getElementById('Results').innerHTML = ``;
    const PokeData = document.createElement('div');
    PokeData.innerHTML = `  <img alt="gif pokemon" src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}">
                            <div id="PokemonData">
                                <h3>${data.name}</h3>
                                <p id="Type">${data.types[0].type.name}</p>
                                <div id="BasicInfo">
                                    <div>
                                        <h4>Height</h4>
                                        <p>${data.height}0 cm</p>
                                    </div>
                                    <div>
                                        <h4>Weight</h4>
                                        <p>${data.weight}00 g</p>
                                    </div>
                                    <div>
                                        <h4>Base Exp</h4>
                                        <p>${data.base_experience}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onclick="Devolve()" id="Devolve">Evolución</button>
                                    <button onclick="Evolve()" id="Evolve">Desevolucion</button>
                                </div>
                            </div>
                        `;
    document.getElementById('Results').appendChild(PokeData);
}


    function Evolve(){
        if(pokeID == 1 || pokeID == 2 || pokeID == 4 || pokeID == 5 || pokeID == 7 || pokeID == 8 || pokeID == 25 ){
            getData(++pokeID);
        }
        else if(pokeID == 172){
            getData(25);
        }
    }

    function Devolve(){
        if(pokeID == 2 || pokeID == 3 || pokeID == 5 || pokeID == 6 || pokeID == 8 || pokeID == 9 || pokeID == 26){
            getData(--pokeID);
        }
        else if(pokeID == 25){
            getData(172);
        }
    }