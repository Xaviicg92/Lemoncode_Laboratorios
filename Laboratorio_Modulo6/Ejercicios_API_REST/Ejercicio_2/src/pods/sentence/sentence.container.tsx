import { linkRoutes } from 'core/router';
import { getCharacter } from 'pods/character/api/character.api';
import { CharacterVm, createEmptyCharacter } from 'pods/character/character.vm';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { saveSentence } from './api/sentence.api';

export const SentenceContainer = () => {
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = () => {
    getCharacter(id).then((response) => setCharacter(response));
  };

  const handleSaveSentence = () => {
    saveSentence(character);
    history.push(linkRoutes.characterCollection);
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);
  return (
    <>
      <input
        value={character.bestSentence}
        onChange={(e) =>
          setCharacter({ ...character, bestSentence: e.target.value })
        }
      ></input>
      <button onClick={() => handleSaveSentence()}>Save</button>
    </>
  );
};
