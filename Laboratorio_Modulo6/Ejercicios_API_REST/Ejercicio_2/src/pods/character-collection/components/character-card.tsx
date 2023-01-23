import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import { useNavigate } from '@reach/router';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;
  // const navigate = useNavigate();

  // const handleNavigate = (id) => {
  //   navigate(`/details/${id}`);
  // };

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div>Status: {character.status}</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>Best Sentence: {character.bestSentence}</div>
              <CardActions>
                <IconButton onClick={() => onEdit(character.id)}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            </div>
          </Typography>
        </div>
        <Link to={`/details/${character.id}`}>Details</Link>
      </CardContent>
    </Card>
  );
};
