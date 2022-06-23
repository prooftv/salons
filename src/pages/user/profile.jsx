import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { formatDistance } from "date-fns";
import data from "@utils/data/user-profile.json";
import geoJSON from "@utils/data/rooms-geojson.json";

import CardRoom from "@components/CardRoom";
import Reviews from "@components/Reviews";
import ReviewForm from "@components/ReviewForm";
import Icon from "@components/Icon";
import Image from "@components/CustomImage";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "User Profile",
    },
  };
}

const UserProfile = () => {
  const { user, error, isLoading } = useUser();

  if (!user) {
    return (
      <>
        <h1>Not Authorized to view this page</h1>
      </>
    );
  }

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg="3" className="me-lg-auto">
            <Card className="border-0 shadow mb-6 mb-lg-0">
              <Card.Header className="bg-gray-100 py-4 border-0 text-center">
                <a href="#" className="d-inline-block">
                  <div className="avatar avatar-xxl p-2 mb-2">
                    <div className="position-relative h-100 overflow-hidden rounded-circle">
                      <Image
                        src={user.picture}
                        alt=""
                        width={144}
                        height={144}
                        layout="fixed"
                      />
                    </div>
                  </div>
                </a>
                <h5>{user.name}</h5>
                <p className="text-muted text-sm mb-0">{user?.address}</p>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-rounded icon-rounded-sm bg-primary-light me-2">
                    <Icon
                      icon="diploma-1"
                      className="text-primary svg-icon-md "
                    />
                  </div>
                  <div>
                    <p className="mb-0">{user?.reviews ?? "0"} reviews</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className={`icon-rounded icon-rounded-sm ${
                      user.email_verified ? "bg-primary-light" : "bg-gray-200"
                    } me-2`}
                  >
                    <Icon
                      icon={data.verified ? "checkmark-1" : "close-1"}
                      className={`${
                        user.email_verified ? "text-primary" : "text-muted"
                      } svg-icon-md`}
                    />
                  </div>
                  <div>
                    <p className="mb-0">
                      {user.email_verified ? "Verified" : "Unverified"}
                    </p>
                  </div>
                </div>
                <hr />
                <h6>{user.given_name} provided</h6>
                <Card.Text className="text-muted" as="ul">
                  {data.provided.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="9" className="ps-lg-5">
            <h1 className="hero-heading mb-0">Hello, I'm {user.given_name}!</h1>
            <div className="text-block">
              <p>
                <Badge bg="secondary-light" text="secondary">
                  Joined in{" "}
                  {formatDistance(new Date(user.updated_at), new Date(), {
                    addSuffix: true,
                  })}
                </Badge>
              </p>
              <div dangerouslySetInnerHTML={{ __html: user?.bio }} />
            </div>
            {/* <div className="text-block">
              <h4 className="mb-5">{data.firstname}'s Listings</h4>
              <Row>
                {geoJSON.features.map((listing) => (
                  <Col
                    sm="6"
                    lg="4"
                    className="mb-30px hover-animate"
                    key={listing.properties.name}
                  >
                    <CardRoom data={listing.properties} />
                  </Col>
                ))}
              </Row>
            </div> */}
            <div className="text-block">
              <Reviews data={user?.reviews} />
              <ReviewForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserProfile;
