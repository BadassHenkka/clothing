import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        // if isGoogleSignIn is true -> render google-sign-in class
        // if not -> emptry string, however custom-button class is allways there
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;