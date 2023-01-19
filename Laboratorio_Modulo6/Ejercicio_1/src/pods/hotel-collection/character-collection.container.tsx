import React from 'react';
import { getCharacterCollection } from './api/character-collection.api';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  React.useEffect(() => {
    loadCharacterCollection();
  }, []);
  console.log('mi lista tiene estos objetos: ', characterCollection.length);
  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
      ></CharacterCollectionComponent>
    </>
  );
};
