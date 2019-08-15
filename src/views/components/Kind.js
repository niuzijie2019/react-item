//分类组件
import React from 'react';
import PropTypes from 'prop-types';
const Com = (props) => {
  console.log(props)
  return (
    <ul className="lists">
      {
        props.List.map((item,index) => (
          <li key={index}><img src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2697923418,2753462707&fm=85&s=6AB08C43BCB09A843698DDA40300E060" alt="" /><p>{item.name}</p></li>
        ))
      }
    </ul>
  )
}
export default Com;