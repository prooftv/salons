/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import Swiper from "@components/Swiper"

import data from "@utils/data/guides.json"

function Guides(props) {
  return (
    <section className={`py-6 ${props.greyBackground ? "bg-gray-100" : ""}`}>
      <Container>
        <Row className="mb-5">
          <Col md="8">
            <p className="subtitle text-primary">{data.subTitle}</p>
            <h2>{data.title}</h2>
          </Col>
          <Col md="4" className="d-lg-flex align-items-center justify-content-end">
            {data.buttonLink && (
              <Link href={data.buttonLink}>
                <a className="text-muted text-sm">
                  {data.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Swiper
          className="guides-slider mx-n2 pt-3 pb-5"
          perView={1}
          spaceBetween={20}
          imgCards
          loop
          roundLengths
          md={2}
          lg={4}
          xl={5}
          data={data.swiperItems}
        />
      </Container>
    </section>
  )
}

export default Guides
