/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React from "react"

import Link from "next/link"

import { Container, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import Image from "@components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white"
      },
      title: "404"
    }
  }
}

const page404 = () => {
  return (
    <div className="mh-full-screen d-flex align-items-center dark-overlay">
      <Image
        src="/content/img/photo/aron-visuals-3jBU9TbKW7o-unsplash.jpg"
        alt="Not found"
        className="bg-image"
        loading="eager"
        layout="fill"
        priority
      />
      <Container className="text-white text-lg overlay-content py-6 py-lg-0">
        <h1 className="display-3 fw-bold mb-5">Oops, that page is not here.</h1>
        <p className="fw-light mb-5">
          Elit adipisicing aliquip irure non consequat quis ex fugiat dolor in irure pariatur eu
          aute. Ea tempor nisi sit in Lorem exercitation mollit ut veniam in do eu excepteur.{" "}
        </p>
        <p className="mb-6">
          <Link href="/" passHref>
            <Button variant="outline-light">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Start from the Homepage
            </Button>
          </Link>
        </p>
        <p className="h4 text-shadow">Error 404</p>
      </Container>
    </div>
  )
}

export default page404
