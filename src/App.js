import React, { Component } from 'react';
import { FirestoreCollection } from 'react-firestore';
import ReactLoading from 'react-loading';

class App extends Component {
  render() {
    return (
      <FirestoreCollection
        path="users"
        sort="name"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div style={styles.loading}>
              <ReactLoading type="bars" color="#000" height="30%" width="30%"  />
            </div>
          ) : (
            <div>
              <h1>Users</h1>
              <ul>
                {data.map(user => (
                  <li key={user.id}>
                    {user.name} - {user.requestedGift}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      />
    );
  }
}

const styles = {
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default App;
