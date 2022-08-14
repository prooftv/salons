/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Link from "next/link";

import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Image from "@components/CustomImage";
import { formatDistance } from "date-fns";
import { urlFor } from "@utils/services";

function CardPost(props) {
  const post = props.data;

  return (
    <Card className="border-0 h-100 shadow">
      {post.mainImage != null && (
        <Link href={`/blog/${post.slug.current}`}>
          <a className="">
            <Image
              src={`${post.mainImage.asset.url}`}
              alt={`${post.title}`}
              width={1080}
              height={720}
              layout="intrinsic"
              className="img-fluid card-img-top"
              loading={props.eager ? "eager" : "lazy"}
            />
          </a>
        </Link>
      )}
      <Card.Body>
        {post.categories.length > 0 &&
          post.categories.map((category) => (
            <a
              href="#"
              key={category._id}
              className="text-uppercase text-muted text-sm letter-spacing-2"
            >
              {category.title}
            </a>
          ))}
        <h5 className="my-2">
          <Link href={`/blog/${post.slug.current}`}>
            <a className="text-dark">{post.title}</a>
          </Link>
        </h5>
        <p className="text-gray-500 text-sm my-3">
          <FontAwesomeIcon icon={faClock} className="me-2" />
          {formatDistance(new Date(post.publishedAt), new Date(), {
            addSuffix: true,
          })}
        </p>
        <p className="my-2 text-muted text-sm">
          {`${post.body[0].children[0].text.substring(0, 150)}...`}
        </p>

        <Link href={`/blog/${post.slug.current}`} passHref>
          <Button className="ps-0" variant="link">
            Read more <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
