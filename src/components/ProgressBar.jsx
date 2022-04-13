/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"

function ProgressBar(props) {
  return (
    <div style={{ height: "8px", top: "71px" }} className="progress rounded-0 sticky-top">
      <div
        role="progressbar"
        style={{ width: `${props.progress}%` }}
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        className="progress-bar"
      />
    </div>
  )
}

export default ProgressBar
