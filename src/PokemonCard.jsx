import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const SPRITE_BASE_URL =
  "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon";

const PokemonCard = ({ pokemon }) => {
  return (
    <li className="pokemon-card-item">
      <Link to={`/pokemon?name=${pokemon.name}`}>
        <div className="pokemon-card">
          <img
            src={`${SPRITE_BASE_URL}/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
