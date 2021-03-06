import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Container, Row, Col, Pagination, Button, Card } from "react-bootstrap";

import CardPost from "@components/CardPost";

import data from "@utils/data/blog.json";
import Image from "@components/CustomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import sanityClient from "@utils/services";

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_PROJECT_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Blog",
    },
  };
}

const Blog = () => {
  const [posts, setPosts] = useState(null);

  let featuredPost;

  if (posts) {
    featuredPost = posts[0];
  } else {
    featuredPost = [];
  }

  useEffect(() => {
    (() => {
      const sanityClientTmp = sanityClient;
      console.log("Sanity client: ", sanityClientTmp);
      console.log("Sanity project ID: ", SANITY_PROJECT_ID);
      console.log("Sanity project dataset: ", SANITY_PROJECT_DATASET);
    })();
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            _id,
          title,
          slug,
          author->{
              name
          },
          mainImage{
              asset->{
                  _id,
                  url
              }
          },
          'categories': categories[] {
              _type == 'reference' => @->
          },
          publishedAt,
          body
      }`
      )
      .then((res) => {
        setPosts(res);
      })
      .catch(console.error);
  }, []);

  return (
    <React.Fragment>
      {posts && (
        <section className="position-relative py-6">
          {featuredPost.mainImage.asset.url && (
            <Image
              src={`${featuredPost.mainImage.asset.url}`}
              alt={featuredPost.title}
              className="bg-image"
              loading="eager"
              layout="fill"
              priority={true}
            />
          )}
          <Container className="position-relative">
            <Row>
              <Col lg="6">
                <Card>
                  <Card.Body className="p-5">
                    {/* <strong className="text-uppercase text-secondary d-inline-block mb-2 text-sm">
                      {featuredPost.subtitle}
                    </strong> */}
                    <h2 className="mb-3">{featuredPost.title}</h2>
                    <p className="text-muted">
                      {`${featuredPost.body[0].children[0].text.substring(
                        0,
                        100
                      )}...`}
                    </p>
                    <Link
                      href={`/blog/[slug]`}
                      as={`/blog/${featuredPost.slug.current}`}
                      passHref
                    >
                      <Button variant="link" className="p-0">
                        Continue reading{" "}
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            {posts &&
              posts.map((post) => {
                // the first post is featured
                // if (index >= 1)
                return (
                  <Col
                    key={post._id}
                    sm="6"
                    lg="4"
                    className="mb-4 hover-animate"
                  >
                    <CardPost data={post} index={post._id} />
                  </Col>
                );
              })}
          </Row>
          <Pagination
            aria-label="Page navigation example"
            className="d-flex justify-content-between mb-5"
          >
            <Pagination.Item href="#" className="text-sm">
              <FontAwesomeIcon icon={faChevronLeft} className="me-1" />
              Older posts
            </Pagination.Item>
            <Pagination.Item href="#" className="disabled text-sm">
              Newer posts
              <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
            </Pagination.Item>
          </Pagination>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
