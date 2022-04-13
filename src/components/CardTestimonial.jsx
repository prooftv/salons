/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react"

import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import Avatar from "@components/Avatar"

function CardTestimonial(props) {
  const { data } = props

  return (
    <Card className="testimonial rounded-3 shadow border-0">
      <div className="testimonial-avatar">
        <Avatar
          image={`/content/${data.avatar}`}
          size="lg"
          border
          className="mt-3 mb-n3"
          alt="..."
        />
      </div>
      <div className="text">
        <div className="testimonial-quote">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        <p className="testimonial-text">{data.content}</p>
        <strong>{data.title}</strong>
      </div>
    </Card>
  )
}

export default CardTestimonial
