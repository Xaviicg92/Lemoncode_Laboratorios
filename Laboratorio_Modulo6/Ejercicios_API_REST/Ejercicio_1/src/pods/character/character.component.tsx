import React from 'react';

import { CharacterVm } from './character.vm';

interface Props {
  character: CharacterVm;
}

export const HotelComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <div>Name: {character.name}</div>
      <div>Status: {character.status}</div>
      <div>Specie: {character.species}</div>
      <div>Origin: {character.origin.name}</div>
    </>
  );
};
