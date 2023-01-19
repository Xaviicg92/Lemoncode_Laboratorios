import { CharacterApi } from './api/character.api-model';
import { CharacterVm } from './character.vm';

export const mapCharacterFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
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
});

// export const mapHotelFromVmToApi = (hotel: viewModel.Hotel): apiModel.Hotel =>
//   (({
//     ...hotel,
//     id: hotel.id,
//     name: hotel.name,
//     shortDescription: hotel.description,
//     hotelRating: hotel.rating,
//     address1: hotel.address,
//     city: hotel.city,
//   } as unknown) as apiModel.Hotel);
