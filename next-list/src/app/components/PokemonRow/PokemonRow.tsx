"use client";

import { PokemonType } from "../../data/types";

import styles from "./styles.module.css";

type Props = {
  pokemon: PokemonType;
};

export const PokemonRow = ({ pokemon }: Props) => {
  return (
    <div className={styles.container}>
      <h1>
        #{pokemon.id} {pokemon.name}
      </h1>

      <div className={styles["type-row"]}>
        {pokemon.type.map((type, index) => {
          if (index > 0) {
            return <span key={index}>/{type}</span>;
          }

          return <span key={index}>{type}</span>;
        })}
      </div>
      <div className={styles["info-section"]}>
        <div className={styles.info}>HP: {pokemon.hp}</div>
        <div className={styles.info}>Atk.: {pokemon.attack}</div>
        <div className={styles.info}>Def.: {pokemon.defense}</div>
        <div className={styles.info}>Sp. Atk.: {pokemon.special_attack}</div>
        <div className={styles.info}>Sp. Def: {pokemon.special_defense}</div>
        <div className={styles.info}>Spd: {pokemon.speed}</div>
      </div>
      <button
        className={styles.button}
        onClick={() => alert(`${pokemon.name}!`)}
      >
        Click me!
      </button>
    </div>
  );
};
