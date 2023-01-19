import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';

import { mapCharacterFromApiToVm } from './character.mappers';

import { HotelComponent } from './character.component';
import { CharacterVm, createEmptyCharacter } from './character.vm';
import { getCharacter } from './api/character.api';
import { mapToCollection } from 'common/mappers';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  // const history = useHistory();

  const handleLoadCharacter = () => {
    getCharacter(id).then((response) => setCharacter(response));
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);

  // const handleSave = async (hotel: Hotel) => {
  //   const apiHotel = mapHotelFromVmToApi(hotel);
  //   const success = await api.saveHotel(apiHotel);
  //   if (success) {
  //     history.goBack();
  //   } else {
  //     alert('Error on save hotel');
  //   }
  // };

  return <HotelComponent character={character} />;
};
