import React from "react";

import Link from "next/link";

import blog from "@utils/data/blog.json";
import postDummyData from "@utils/data/post.json";

import { Container, Row, Col, Button, Collapse, Form } from "react-bootstrap";
import Image from "@components/CustomImage";
import Avatar from "@components/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faClock, faComment } from "@fortawesome/free-regular-svg-icons";
import { getClient } from "@utils/services";
import { formatDistance } from "date-fns";
import { groq } from "next-sanity";

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
  title,
  'slug': slug.current,
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
  }
`;

const Post = ({ post }) => {
  const [formCollapse, setFormCollapse] = React.useState(false);

  return (
    <React.Fragment>
      <section className="hero-home dark-overlay mb-5">
        {post.mainImage && post.mainImage.asset.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            className="bg-image"
            loading="eager"
            layout="fill"
            priority={true}
          />
        )}
        <Container className="py-7">
          <div className="overlay-content text-center text-white">
            <h1 className="display-3 text-serif fw-bold text-shadow mb-0">
              {post.title && post.title}
            </h1>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="10" xl="8" className="mx-auto">
              <p className="py-3 mb-5 text-muted text-center fw-light d-flex align-items-center justify-content-center flex-wrap">
                {post.author && post.author.name && (
                  <Link href="/blog">
                    <a>
                      <Avatar
                        image={`/content/img/avatar/${postDummyData.authorAvatar}`}
                        alt=""
                        className="me-2"
                        border
                      />
                    </a>
                  </Link>
                )}
                Written by&nbsp;
                {post.author && post.author.name && (
                  <Link href={"/"}>
                    <a className="fw-bold">{post.author.name}</a>
                  </Link>
                )}
                <span className="mx-1">|</span>{" "}
                {post.publishedAt &&
                  formatDistance(new Date(post.publishedAt), new Date(), {
                    addSuffix: true,
                  })}{" "}
                in&nbsp;
                {post.categories.length > 0 &&
                  post.categories.map((category) => (
                    <Link key={category._id} href={"/"}>
                      <a className="fw-bold pr2">{category.title}</a>
                    </Link>
                  ))}
                {/* <span className="mx-1">|</span>
                <a href="#" className="text-muted">
                  {postDummyData.comments && postDummyData.comments.length}{" "}
                  comments{" "}
                </a> */}
              </p>
              <p
                className="lead mb-5"
                dangerouslySetInnerHTML={{
                  __html: post.body[0].children[0].text,
                }}
              />
            </Col>
          </Row>
          {/* <Row>
            <Col xl="10" className="mx-auto mb-5">
              <Image
                src="/content/img/photo/photo-1471189641895-16c58a695bcb.jpg"
                alt=""
                width={1501}
                height={834}
                className="img-fluid"
                layout="responsive"
                sizes="(max-width: 1199px) 100vw, 920px"
              />
            </Col>
          </Row> */}
          {/* <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content">
                <div
                  dangerouslySetInnerHTML={{ __html: postDummyData.content }}
                />
                <hr />
              </div>
              {postDummyData.comments && (
                <div className="mt-5">
                  <h6 className="text-uppercase text-muted mb-4">
                    {postDummyData.comments.length} comments
                  </h6>
                  {postDummyData.comments.map((comment, index) => (
                    <div key={index} className="d-flex mb-4">
                      <Avatar
                        image={`/content/img/avatar/${comment.avatar}`}
                        alt={comment.title}
                        size="lg"
                        className="me-4 flex-shrink-0"
                        border
                      />

                      <div>
                        <h5>{comment.title}</h5>
                        <p className="text-uppercase text-sm text-muted">
                          <FontAwesomeIcon icon={faClock} /> {comment.date}
                        </p>
                        <p className="text-muted">{comment.content}</p>
                        <p>
                          <Button
                            variant="link"
                            href="#"
                            className="text-primary"
                          >
                            <FontAwesomeIcon icon={faReply} /> Reply
                          </Button>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mb-5">
                <Button
                  type="button"
                  aria-expanded={formCollapse}
                  aria-controls="leaveComment"
                  variant="outline-primary"
                  onClick={() => setFormCollapse(!formCollapse)}
                >
                  Leave a comment
                </Button>
                <Collapse id="leaveComment" in={formCollapse} className="mt-4">
                  <div>
                    <h5 className="mb-4">Leave a comment</h5>
                    <Form method="post">
                      <Row>
                        <Col md="6">
                          <div>
                            <Form.Label htmlFor="name">
                              Name <span className="required">*</span>
                            </Form.Label>
                            <Form.Control id="name" type="text" />
                          </div>
                        </Col>
                        <Col md="6">
                          <div>
                            <Form.Label htmlFor="email">
                              Email <span className="required">*</span>
                            </Form.Label>
                            <Form.Control id="email" type="text" />
                          </div>
                        </Col>
                      </Row>
                      <div className="mb-4">
                        <Form.Label htmlFor="comment">
                          Comment <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          id="comment"
                          type="textarea"
                          className="form-control"
                          rows="4"
                        />
                      </div>
                      <Button type="submit" variant="primary">
                        <FontAwesomeIcon icon={faComment} /> Comment
                      </Button>
                    </Form>
                  </div>
                </Collapse>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient().fetch(postQuery, {
    slug: params.slug,
  });

  console.log(postData);

  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: postData.title,
      post: postData,
    },
  };
}

export default Post;
