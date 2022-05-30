import React from 'react'
import s from './Button.module.scss'
const Button = ({size,text,radius}) => {
  return (
    <div>
       <button className={s.Button} style={{'width':`${size}`,'borderRadius':`${radius}`}}>{text}</button>
    </div>
  )
}

export default Button