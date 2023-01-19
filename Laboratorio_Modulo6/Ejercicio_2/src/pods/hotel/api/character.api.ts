import axios from 'axios';
import { CharacterApi } from './character.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = (id: number): Promise<CharacterApi> => {
  return axios.get(`${url}/${id}`).then((response) => response.data);
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };
