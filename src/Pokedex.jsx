import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
        if (!response.ok) throw new Error("Gagal memuat data Pokémon");
        const data = await response.json();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <h1>All Pokemon</h1>
      {loading && <p>Loading ..</p>}
      {error && <p>Error: {error}</p>}
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id ?? pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Pokedex;
