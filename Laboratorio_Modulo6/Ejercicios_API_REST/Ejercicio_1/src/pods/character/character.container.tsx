import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { HotelComponent } from './character.component';
import { CharacterVm, createEmptyCharacter } from './character.vm';
import { getCharacter } from './api/character.api';

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

  return <HotelComponent character={character} />;
};
