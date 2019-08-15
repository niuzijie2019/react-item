import React from 'react';
import './prolist.scss';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props);
  return (
    <ul>
      {
        props.prolist.map(item => (
          <Link to = { '/detail/' + item.id } key = { item.id }>
            <img src= { item.image_url } alt=""/>
            { item.name }
          </Link>
        ))
      }
    </ul>
  )
}
