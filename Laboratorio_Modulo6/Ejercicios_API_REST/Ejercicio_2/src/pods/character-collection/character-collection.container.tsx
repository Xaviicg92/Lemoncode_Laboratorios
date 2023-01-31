import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const history = useHistory();
  React.useEffect(() => {
    loadCharacterCollection();
  }, []);
  console.log('mi lista tiene estos objetos: ', characterCollection);

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onEdit={handleEdit}
      ></CharacterCollectionComponent>
    </>
  );
};
