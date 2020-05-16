import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

/* This is the content on the '/shop' page. The COLLECTION-PREVIEW
 is the container for the COLLECTION-ITEMS which consists of 5 rows 
 of data, each containing a Title, 4 images, a footer with captions and prices. */

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className='title'>{ title.toUpperCase() }</h1>
    <div className="preview">
      {
        items
        .filter(( item, idx ) => idx < 4 ) // display only 4 items per collection
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={ id } {... otherItemProps }/>
        ))
      }
    </div>
  </div>
)
export default CollectionPreview