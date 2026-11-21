import React, { useState, useEffect } from "react";
import "./Search.css";
import PokemonCard from "./PokemonCard";

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [input, setInput] = useState("");
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
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (input === "") {
      setFilteredPokemons([]);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(input.toLowerCase()),
      );
      setFilteredPokemons(filtered);
    }
  }, [input, pokemons]);

  return (
    <>
      <h1>Search a Pokémon</h1>
      <input
        placeholder="Enter Pokémon name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p>Error: {error}</p>}
      <ul className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id ?? pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Search;