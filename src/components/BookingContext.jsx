/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react"

const BookingContext = React.createContext([{}, () => {}])

function BookingProvider(props) {
  const [state, setState] = useState({})
  return (
    <BookingContext.Provider value={[state, setState]}>{props.children}</BookingContext.Provider>
  )
}

export { BookingContext, BookingProvider }
