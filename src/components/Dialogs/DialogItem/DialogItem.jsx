import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <img src={props.src} className={s.profileImg} />
      <NavLink to={path} className={s.name}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;