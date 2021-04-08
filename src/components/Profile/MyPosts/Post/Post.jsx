import React from 'react';
import s from './Post.module.css';
import userPng from '../../../../assets/images/user.png'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt='' src={userPng} />
        <div className={s.messagePost}>{ props.message }</div>
          <div>
        <span>like:</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;