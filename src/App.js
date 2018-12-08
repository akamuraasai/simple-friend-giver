import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FirestoreCollection, FirestoreDocument, withFirestore } from 'react-firestore';
import ReactLoading from 'react-loading';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AlarmIcon from '@material-ui/icons/Alarm';
import DoneIcon from '@material-ui/icons/Done';
import Paper from '@material-ui/core/Paper';

import GiftModal from './GiftModal';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    backgroundColor: '#7e57c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: '12px 15px',
  },
  media: {
    height: 180,
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '12px 15px',
  },
  avatarWaiting: {
    backgroundColor: '#fff176',
    color: '#202020',
  },
  avatarDone: {
    backgroundColor: '#aed581',
    color: '#202020',
  },
});

const getUser = () => {
  const { href } = window.location;
  const data = href.split('?');
  const query = data[data.length - 1];
  const params = query.split('&')
    .map(param => ({ [param.split('=')[0]]: param.split('=')[1] }))
    .reduce((obj, param) => ({ ...obj, ...param }), {});
  const { user = 'null' } = params;

  return user;
};

const randomNum = max => Math.floor(Math.random() * max);

const randomFriend = (firestore, user) => () => {
  firestore.collection('users').get()
    .then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== user) {
          users.push({ id: doc.id, ...doc.data() });
        }
      });

      const alreadyTaken = users
        .filter(({ friend }) => friend !== undefined)
        .map(({ friend }) => friend.path.replace('users/', ''));

      const available = users.filter(({ id }) => alreadyTaken.indexOf(id) === -1);
      if (available.length > 0) {
        const randomUser = available[randomNum(available.length)];

        const userRef = firestore.collection('users').doc(user);
        const friendRef = firestore.collection('users').doc(randomUser.id);

        userRef.update({
          friend: friendRef,
        });
      } else {
        console.error('Vish mano, deu ruim nos usuários disponiveis.');
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

const App = ({ classes, firestore }) => (
  <div className={classes.root}>
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Amigo Secreto
        </Typography>
      </Toolbar>
    </AppBar>
    <Card className={classes.card}>
      <FirestoreDocument
        path={`users/${getUser()}`}
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div className={classes.loading}>
              <ReactLoading type="bars" color="#000" height="30%" width="30%"  />
            </div>
          ) : (
            <div>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.topgallant-partners.com/wp-content/uploads/2012/05/stormtrooper.jpg"
                  title="Avatar"
                />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.name || 'Invalid User'}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {data.requestedGift === undefined || data.requestedGift.length === 0
                        ? 'Ainda não escolheu o que deseja receber.'
                        : `Deseja receber ${data.requestedGift}.`
                      }
                    </Typography>
                    {data.friend && (
                      <FirestoreDocument
                        path={data.friend.path}
                        render={({ isLoading, data }) => {
                          return isLoading ? (
                            <div className={classes.loading}>
                              <ReactLoading type="dots" color="#000" height="30%" width="30%"  />
                            </div>
                          ) : (
                            <Typography variant="subtitle1" color="textSecondary">
                              Tirou {data.name} no sorteio, {data.name} {data.requestedGift === undefined || data.requestedGift.length === 0 ? 'ainda não escolheu o que receber.' : `deseja receber ${data.requestedGift}.`}.
                            </Typography>
                          )}}
                      />
                    )}
                </CardContent>
              </CardActionArea>
              {data.name !== undefined && (
                <CardActions>
                  <GiftModal user={getUser()} />
                  {data.friend === undefined && (
                    <Button size="small" color="secondary" onClick={randomFriend(firestore, getUser())}>
                      Sortear Amigo
                    </Button>
                  )}
                </CardActions>
              )}
            </div>
          );
        }}
      />
    </Card>
    <FirestoreCollection
      path="users"
      sort="name"
      render={({ isLoading, data }) => {
        return isLoading ? (
          <div className={classes.loading}>
            <ReactLoading type="bars" color="#000" height="30%" width="30%"  />
          </div>
        ) : (
          <Paper className={classes.paperRoot} elevation={1}>
            <Typography variant="h5" component="h3">
              Lista de Participantes
            </Typography>
            <List className={classes.listRoot}>
              {data.map(({ id, name, requestedGift, friend }) => (
                <ListItem key={id}>
                  {friend === undefined
                    ? (<Avatar className={classes.avatarWaiting}><AlarmIcon /></Avatar>)
                    : (<Avatar className={classes.avatarDone}><DoneIcon /></Avatar>)}
                  <ListItemText primary={name} secondary={requestedGift} />
                </ListItem>
              ))}
            </List>
          </Paper>
        );
      }}
    />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withFirestore(withStyles(styles)(App));
