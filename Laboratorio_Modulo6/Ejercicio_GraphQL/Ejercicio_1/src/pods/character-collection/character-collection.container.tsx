import React from 'react';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
      ></CharacterCollectionComponent>
    </>
  );
};
