import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';
import { graphQLClient } from './graphQL_client';

interface GetCharacterCollectionRespsonse {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        results {
          name
          id
          status
          species
          type
          gender
          image
        }
      }
    }
  `;

  const {
    characters: { results },
  } = await graphQLClient.request<GetCharacterCollectionRespsonse>(query);

  return results;
};
