import React from 'react';

import './Usercard.css';

export default function Usercard(props) {
  const {image, login, link} = props;

  return <div className='user-info'>
     <div className='user-card'>
          <div
              className='user-card__image'
              style={{
                  backgroundImage: `url(${image})`
              }}/>
          <h1 className='user-card__login'><a className='user-card__link' href={link} rel="nofollow" target="_blank">{login}</a></h1>
     </div>
     </div>;
}
