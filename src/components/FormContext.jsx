/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react"

const FormContext = React.createContext([{}, () => {}])

function FormProvider(props) {
  const [state, setState] = useState({})
  return <FormContext.Provider value={[state, setState]}>{props.children}</FormContext.Provider>
}

export { FormContext, FormProvider }
