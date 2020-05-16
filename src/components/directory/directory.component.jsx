import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

/* On the homepage
Directory Menu: Contains 5 x Menu Items that navigate to the /shop section
Menu Item:  Contains background images and CONTENT (Title and Subtitle)


*/
class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

// Map over the (above) state items and display all the props
render() {
  return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} { ...otherSectionProps } />
          ))
        }
      </div>
    )
  }
}

// map{ title, imageUrl, id, size } is the same as '...otherSectionProps'
// title={title} imageUrl={imageUrl} size={size}

export default Directory