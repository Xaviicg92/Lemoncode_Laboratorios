import { CharactersApiCall } from './api/character-collection.api.call-model';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterEntityApi } from './api/character-collection.api-model';

export const mapFromApiCallToApiModel = (
  characters: CharactersApiCall
): CharacterEntityApi[] =>
  characters.results.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    image: character.image,
    episode: character.episode.map((episode) => episode),
    url: character.url,
    created: character.created,
  }));

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
});
