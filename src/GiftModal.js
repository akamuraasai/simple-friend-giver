import React from 'react';
import { withFirestore } from 'react-firestore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Status from "./Status";

class GiftModal extends React.Component {
  state = {
    open: false,
    success: false,
    input: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (evt) => {
    this.setState({ input: evt.target.value });
  }

  handleSave = () => {
    const { firestore, user } = this.props;
    const { input } = this.state;
    const userRef = firestore.collection('users').doc(user);

    userRef.update({
      requestedGift: input,
    }).then(() => {
      this.setState({ open: false, success: true });
    });
  };

  render() {
    return (
      <div>
        <Button size="small" color="primary" onClick={this.handleClickOpen}>
          Presente Desejado
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Presente Desejado</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Digite a baixo qual é o presente que você deseja.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="gift"
              label="Presente"
              type="text"
              fullWidth
              onChange={this.handleChange}
              value={this.state.input}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
        {this.state.success && (
          <Status open />
        )}
      </div>
    );
  }
}

export default withFirestore(GiftModal);
