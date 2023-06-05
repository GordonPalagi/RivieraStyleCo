import React from 'react'
import '../../UIComponents/Button/Button.css'

function Button({title, onClick, className}) {
  return (
    <div className={className} onClick={onClick}>
      <button>{title}</button>
    </div>
  )
}

export default Button