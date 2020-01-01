import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  // auth.onAuthStateChanged opens up a subscription to firebase where it
  // follows the user status - ie. is there a user signed in or not.
  // It is like a messaging channel that is allways open until closed.
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // on snapShot method from firestore "listens" to a document in real time
        // https://firebase.google.com/docs/firestore/query-data/listen
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );
        });
      } else {
          setCurrentUser(userAuth);
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
        <Header />
        {/* Header is outside of Switch so it stays the same
        no matter what gets rendered below it*/}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route 
              exact 
              path='/signin'
              // if signed in -> redirect to main page, if not then sign in/up page
              render={() => 
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              } 
            />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// With dispatch redux knows that whatever object that is
// passed to it is going to be an action object that is going to be passed
// to every reducer. Then ofc our setCurrentUser action is a function
// that returns an action object. 
// So in dispatch we invoke our setCurrentUser with user that is then
// going to be used as the payload.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);