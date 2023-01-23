import React from 'react';
import * as classes from './character-collection.styles';
import { CharacterCard } from './components/character-card';

export const CharacterCollectionComponent = (props) => {
  const { characterCollection } = props;

  return (
    <>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};
