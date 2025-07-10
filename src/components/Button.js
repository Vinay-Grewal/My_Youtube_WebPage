import React from 'react'

const Button = (props) => {
  return (
    <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{props.name}</button>
  )
}

export default Button