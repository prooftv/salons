import React from 'react'
import Link from 'next/link'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Badge,
  InputGroup,
} from 'react-bootstrap'

import footerContent from '@utils/data/footer.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="position-relative z-index-10 d-print-none">
      <div className="py-6 bg-gray-200 text-muted">
        <Container>
          <Row>
            {footerContent &&
              footerContent.map((item) => (
                <Col
                  key={item.title}
                  lg={item.lg && item.lg}
                  md={item.md && item.md}
                  className="mb-5 mb-lg-0"
                >
                  <div className="fw-bold text-uppercase text-dark mb-3">
                    {item.title}
                  </div>
                  {item.content && (
                    <p
                      className={
                        item.contentBottomMargin
                          ? `mb-${item.contentBottomMargin}`
                          : ''
                      }
                    >
                      {item.content}
                    </p>
                  )}
                  {item.social && (
                    <ul className="list-inline">
                      {item.social.map((socialIcon) => {
                        let socialIconFA
                        switch (socialIcon.title) {
                          case 'facebook':
                            socialIconFA = faFacebook
                            break
                          case 'instagram':
                            socialIconFA = faInstagram
                            break
                          case 'pinterest':
                            socialIconFA = faPinterest
                            break
                          case 'vimeo':
                            socialIconFA = faVimeo
                            break
                          default:
                            socialIconFA = faTwitter
                        }
                        return (
                          <li
                            key={socialIcon.title}
                            className="list-inline-item"
                          >
                            <a
                              href={socialIcon.link}
                              target="_blank"
                              title={socialIcon.title}
                              className="text-muted text-hover-primary"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon icon={socialIconFA} />
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {item.links && (
                    <ul className="list-unstyled">
                      {item.links.map((link) => (
                        <li key={link.title}>
                          <Link href={link.link}>
                            <a className="text-muted">
                              {link.title}
                              {link.new && (
                                <Badge
                                  variant="info"
                                  bg="info-light"
                                  className="ms-1"
                                >
                                  New
                                </Badge>
                              )}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.form && (
                    <Form id="newsletter-form" action="#">
                      <InputGroup className="input-group mb-3">
                        <Form.Control
                          type="email"
                          placeholder={item.form.placeholder}
                          aria-label={item.form.placeholder}
                          className="bg-transparent border-dark border-end-0"
                        />
                        <Button
                          className="border-start-0"
                          variant="outline-dark"
                          type="submit"
                          aria-label="Search"
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="text-lg"
                          />
                        </Button>
                      </InputGroup>
                    </Form>
                  )}
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <div className="py-4 fw-light bg-gray-800 text-gray-300">
        <Container>
          <Row className="align-items-center">
            <Col md="6" className="text-center text-md-start">
              <p className="text-sm mb-md-0">
                © 2021, Your company. All rights reserved.
              </p>
            </Col>
            <Col md="6">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
                <li className="list-inline-item">
                  <img
                    width="32"
                    height="32"
                    src="/content/svg/visa.svg"
                    alt="..."
                    className="w-2rem"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    src="/content/svg/mastercard.svg"
                    width="32"
                    height="32"
                    alt="..."
                    className="w-2rem"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    src="/content/svg/paypal.svg"
                    width="32"
                    height="32"
                    alt="..."
                    className="w-2rem"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    src="/content/svg/western-union.svg"
                    width="32"
                    height="32"
                    alt="..."
                    className="w-2rem"
                  />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
