import { gql } from 'graphql-request';
import { graphQLClient } from 'pods/character-collection/api/graphQL_client';
import { CharacterApi } from './character.api-model';

interface GetCharacterResponse {
  character: CharacterApi;
}

export const getCharacter = async (id: number): Promise<CharacterApi> => {
  const query = gql`
  query {
    character(id:${id}){
      id
      name
      status
      species
      image
      origin{name}
    }
  }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};
