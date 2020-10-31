import React from "react";
import { Link } from "react-router-dom";
// connect is a HOC - allows us to modify our component to have access
// to things related to redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// the above way is a special syntax for using SVGs
// https://create-react-app.dev/docs/adding-images-fonts-and-files/

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      {/* Logo is an actual React component */}
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {/* if currentUser is an object -> evaluates true
            if it is null -> evaluates false */}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// mapStateToProps is standard naming with redux codebases - though it could be anything
// state is the root-reducer
// createStructuredSelector basically just passes the top level state to
// the pointed selectors.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
