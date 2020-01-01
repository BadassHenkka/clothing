import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
    <div className="collection-item">
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
        </CustomButton>
        </div>
)};

// * explanation at the bottom
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

// **
export default connect(null, mapDispatchToProps)(CollectionItem);



//* EXPLANATION OF THE USE OF REDUX HERE
// We're creating a new function that is a prop called addItem
// that will go into CollectionItem where we need it.
// Whenever we dispatch - ie. call this function - the function
// will receive item as the property, pass it into our addItem
// action creator (in cart.actions.js) which gives us back an object 
// where the type is equal to ADD_ITEM and the payload is equal to 
// the item that got passed in. Then we will dispatch that new 
// object into our store and it'll go through our redux flow of reducers.

// **
// Because we're not taking any mapStateToProps, tthat's why
// we pass null as the first value and then mapDispatchToProps.