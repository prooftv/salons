/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children } from "react"

function ActiveLink({ children, activeClassName, ...props }) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ""

  const className =
    asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

export default ActiveLink
