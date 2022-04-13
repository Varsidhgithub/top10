import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <section className='footer'>
                <Container>

                    <div>
                        <Row className="pt-5 pb-5">
                            <Col sm={6} xs={12} md={5} lg={4}>
                                <div>
                                    <h5 href="#" className='logo'><span>T</span>op 10</h5>

                                </div>
                                <div className='pt-3 copyri8'>
                                    Copyright © 2009-2022 Natural Intelligence Ltd. All Rights Reserved.
                                </div>
                                <div>
                                    <Row>
                                        <div className='social-media'>
                                            <ul className='d-flex mt-2'>
                                                <li className='me-4'>
                                                    <a href="https://www.facebook.com" target="_varsidh"><FaFacebookSquare className='facebook' /></a>
                                                </li>
                                                <li className='me-4'>
                                                    <a href="https://www.instagram.com/" target="_varsidh"><FaInstagramSquare className='instagram' /></a>
                                                </li>
                                                <li className="me-4">
                                                    <a href="https://www.youtube.com/" target="_varsidh"><FaYoutubeSquare className='youtube' /></a>
                                                </li>
                                                <li className="me-4">
                                                    <a href="https://twitter.com/" target="_varsidh"><FaTwitterSquare className='twiter' /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <Col sm={6} xs={12} md={7} lg={8}>
                                <div className='pt-5 copyri81'>
                                    <p>
                                        Designed to help users make confident decisions online, this website contains information about a wide range of products and services. Certain details, including but not limited to prices and special offers, are provided to us directly from our partners and are dynamic and subject to change at any time without prior notice. Though based on meticulous research, the information we share does not constitute legal or professional advice or forecast, and should not be treated as such.
                                    </p>
                                    <p className='pt-3'>
                                        Reproduction in whole or in part is strictly prohibited.
                                    </p>
                                    <p className='pt-3'>
                                        As an Amazon Associate we earn from qualifying purchases.

                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </div>

                </Container>
            </section>
        </>
    )
}

export default Footer