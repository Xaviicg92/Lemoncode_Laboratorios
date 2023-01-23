import { CharacterVm } from 'pods/character/character.vm';
import React from 'react';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card';

interface Props {
  characterCollection: CharacterEntityVm[];
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent = (props: Props) => {
  const { characterCollection, onEdit } = props;

  return (
    <>
      <ul className={classes.list}>
        {characterCollection.map((character: CharacterVm) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </>
  );
};
