import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // auth.onAuthStateChanged opens up a subscription to firebase where it
  // follows the user status - ie. is there a user signed in or not.
  // It is like a messaging channel that is allways open until closed.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // on snapShot method from firestore "listens" to a document in real time
        // https://firebase.google.com/docs/firestore/query-data/listen
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );

          console.log(this.state);
        });
      } else {
          this.setState({ currentUser: userAuth });
      }
    });
  }

  // This will close the subscription ("messaging channel")
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* Header is outside of Switch so it stays the same
        no matter what gets rendered below it*/}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
}

export default App;