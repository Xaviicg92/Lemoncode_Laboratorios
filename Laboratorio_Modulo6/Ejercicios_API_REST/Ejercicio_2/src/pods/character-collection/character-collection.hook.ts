import { mapToCollection } from 'common/mappers';
import React from 'react';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      return setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
