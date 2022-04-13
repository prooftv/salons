/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"

function Icon(props) {
  return (
    <svg className={`svg-icon ${props.className ? props.className : ""}`} style={props.style}>
      <use xlinkHref={`#${props.icon}`} />
    </svg>
  )
}

export default Icon
