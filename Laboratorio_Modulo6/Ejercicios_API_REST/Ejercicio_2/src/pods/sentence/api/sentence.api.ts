import Axios from 'axios';
import { CharacterVm } from 'pods/character/character.vm';

const url = '/api/characters';

export const saveSentence = (character: CharacterVm) => {
  Axios.put(`${url}/${character.id}`, character);
};
