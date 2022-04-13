/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import Link from "next/link"

import { Card } from "react-bootstrap"
import Image from "./CustomImage"

function CardPoster(props) {
  const { data } = props
  return (
    <Card className="card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
      <Link href={data.link}>
        <a className="tile-link" aria-label={`Read more about ${data.title}`} />
      </Link>
      <Image
        src={`/content/${data.img}`}
        layout="fill"
        className="bg-image"
        alt="Card image"
        sizes="(max-width: 576px) 100vw, (max-width:991px) 50vw, 280px"
      />
      <Card.Body className="overlay-content">
        <Card.Title as="h6" className="text-shadow text-uppercase">
          {data.title}
        </Card.Title>
        <Card.Text className="text-sm">{data.subtitle}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardPoster
