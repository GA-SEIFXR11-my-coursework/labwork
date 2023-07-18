import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    // <button>Click me!!</button>
    <button onClick={onClick}>{text}</button>
  )
}

export default Button