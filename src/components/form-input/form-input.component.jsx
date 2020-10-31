import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    {/* otherProps means all the other form features (ie. type, required etc.)*/}
    <input
      className='form-input'
      type='text'
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      // if a label is passed as a prop, it'll get rendered,
      // if there are otherProps, apply the label with a class 'shrink'
      // otherwise an empty string, there'll allways be form-input-label class
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {/* if not, then there'll be no label rendered */}
  </div>
);

export default FormInput;
