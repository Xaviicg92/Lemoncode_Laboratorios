import React from 'react';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card';

interface Props {
  characterCollection: CharacterEntityVm[];
}

export const CharacterCollectionComponent = (props: Props) => {
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
