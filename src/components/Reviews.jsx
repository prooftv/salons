/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"

import CardReview from "@components/CardReview"

function Reviews(props) {
  return (
    <div className="text-block">
      <p className="subtitle text-sm text-primary">Reviews</p>
      <h5 className="mb-4">Listing Reviews</h5>
      {props.data.map((review) => (
        <CardReview key={review.title} data={review} />
      ))}
    </div>
  )
}

export default Reviews
