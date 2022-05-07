import React from "react"

import Link from "next/link"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Image from "@components/CustomImage"
import data from "@utils/data/about.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white"
      },
      title: "About"
    }
  }
}

const About = () => {
    return (
        <React.Fragment>
            <section className="hero py-6 py-lg-7 text-white dark-overlay">
                {data.hero && (
                    <Image
                        src={`/content/img/photo/${data.hero}`}
                        alt="About Hero Section"
                        className="bg-image"
                        layout="fill"
                        priority={true}
                    />
                )}
                <Container className="overlay-content">
                    <Breadcrumb
                        listProps={{
                            className: "text-white justify-content-center no-border mb-0"
                        }}
                    >
                        <Link href="/" passHref>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Link>
                        <Breadcrumb.Item active>{data.subtitle}</Breadcrumb.Item>
                    </Breadcrumb>

                    <h1 className="hero-heading">{data.title && data.title}</h1>
                </Container>
            </section>

            <section className="py-6">
                <Container>
                    <Row>
                        <Col xl="8" lg="10" className="mx-auto">
                            <p
                                className="lead mb-5"
                                dangerouslySetInnerHTML={{ __html: data.who_we_are }}
                            />
                        </Col>
                    </Row>

                    {data.content && (
                        <Row>
                            <Col xl="8" lg="10" className="mx-auto">
                                <div
                                    className="text-content"
                                    dangerouslySetInnerHTML={{ __html: data.content }}
                                />
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </React.Fragment>
    )
}

export default About