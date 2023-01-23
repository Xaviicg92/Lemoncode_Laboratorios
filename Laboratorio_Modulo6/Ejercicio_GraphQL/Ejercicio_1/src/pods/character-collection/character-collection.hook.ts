import { mapToCollection } from 'common/mappers';
import React from 'react';
import { getCharacterCollection } from './api';
import {
  mapFromApiCallToApiModel,
  mapFromApiToVm,
} from './character-collection.mapper';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      // const charactersApiModel = mapFromApiCallToApiModel(result);
      return setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
