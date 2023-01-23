import { CharactersApiCall } from './api/character-collection.api.call-model';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterEntityApi } from './api/character-collection.api-model';

export const mapFromApiToVm = (
  characters: CharacterEntityApi
): CharacterEntityVm => ({
  id: characters.id,
  name: characters.name,
  status: characters.status,
  species: characters.species,
  type: characters.type,
  gender: characters.gender,
  origin: characters.origin,
  location: characters.location,
  image: characters.image,
  episode: characters.episode,
  url: characters.url,
  created: characters.created,
  bestSentence: characters.bestSentence,
});
