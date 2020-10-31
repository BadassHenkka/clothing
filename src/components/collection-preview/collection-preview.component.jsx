import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// component maps through a single collection (ie. hats, jackets etc.)
// and puts out the collection title and all the items inside it

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        // filter for only 4 items showing for a preview
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

// Keep in mind that the array methods (map, filter) will
// run everytime this component gets rerendered
// so this will become a performance issue if the array
// starts to get really big or if you have a slow computer

export default CollectionPreview;
