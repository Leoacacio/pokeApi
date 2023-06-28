  const pokeCard = document.querySelector('[data-poke-card]');
    const pokeName = document.querySelector('[poke-name]');
    const pokeImg = document.querySelector('[data-poke-img]');
    const pokeImgContainer = document.querySelector('[data-poke-img-container]');
    const pokeId = document.querySelector('[data-poke-id]');
    const pokeStats = document.querySelector('[data-poke-stats]');

    const buscarPokemon = event => {
      event.preventDefault();
      const { value } = event.target.pokemon;
      fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
      .then(data => data.json())
      .then(response => renderPokemonData(response)) 
    }

    const renderPokemonData=data =>{
        const sprite =data.sprites.front_default;
        const { stats, types } = data;


      pokeName.textContent = data.name;
      pokeImg.setAttribute('src', sprite);
      pokeId.textContent = `Nº ${data.id}`;
      setCardColor(types);
      renderPokemonData(types);
      renderPokemonData(stats);
    }
    
