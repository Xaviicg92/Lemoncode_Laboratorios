import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { CharactersApiCall } from './character-collection.api.call-model';

const url = '/api/characters';

export const getCharacterCollection = () => {
  return axios.get<CharacterEntityApi[]>(url).then((result) => result.data);

  // return fetch(url).then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error(response.statusText);
  //   }
  // });
};

export const deleteCharacter = (id: string): Promise<boolean> => {
  return axios.delete(`${url}/${id}`).then(() => true);

  // return fetch(`${url}/${id}`, {method: `DELETE`}).then((response)=>response.ok)
};
