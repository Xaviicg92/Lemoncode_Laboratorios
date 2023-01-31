import { Pagination } from '@material-ui/lab';
import React from 'react';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card';

interface Props {
  characterCollection: CharacterEntityVm[];
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent = (props: Props) => {
  const { characterCollection, onEdit } = props;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const cardsPerPage = 4;
  const cardsToDisplay = characterCollection.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  React.useEffect(() => {
    setTotalPages(Math.ceil(characterCollection.length / cardsPerPage));
  }, [characterCollection]);

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  return (
    <>
      <ul className={classes.list}>
        {cardsToDisplay.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
      <Pagination
        className={classes.pagination}
        count={totalPages}
        page={currentPage}
        color="primary"
        onChange={handlePageChange}
      />
    </>
  );
};
