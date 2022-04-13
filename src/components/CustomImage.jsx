/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Image from "next/image"

function CustomImage(props) {
  if (process.env.production_type === "static") {
    return (
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    )
  }
  return <Image {...props} />
}
export default CustomImage
