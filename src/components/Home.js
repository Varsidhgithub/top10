import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import { Accordion, AccordionTab } from 'primereact/accordion';
import "./Home.css";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
// pages
import Header from './Header.js';
import Footer from './Footer.js';

//img
import Heart from '../images/heart.png';
import People from '../images/people.png';
import Rich from '../images/investor.png';
import Power from '../images/creativity.png';
import Bussiness from '../images/team.png';
import Food from '../images/food.png';
import Tech from '../images/tech.png';
import cart from '../images/cart.png';
import House from '../images/house.png';
import Meal from '../images/meal.png';
import Powerful from '../images/powerful.jpg';
import Hlthycon from '../images/helathycon.png';
import Richman from '../images/richman.jpg';
import Bussines1 from '../images/bussiness.jpg';
import Techno from '../images/techno.jpg';
import Foodies from '../images/foodies.jpg';


export default function Home() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (

        <div>

            {/* navbar */}
            <Header />

            {/* main part */}
            <section>
                <div className='slider'>

                    <Container>
                        <div>
                            <h1 className="slidercon">
                                The best of
                                <span className='highlight'> Top10 </span>
                                is Now Yours!
                            </h1>
                            <div className='slidercon1'>
                                The lists, articles, and deals on topics you like selected just for you!
                            </div>
                        </div>
                    </Container>
                </div>

            </section>
            {/* slider */}

            <section>
                <Container>
                    <div className='top10slider'>
                        Top10 Categories
                    </div>
                    <div className="d-flex category slider1">
                        <ul className='d-flex justify-content-between float'>
                            <li className='me-4 back'>
                                <img src={People} alt="People" className='imgslider' />
                                <p className='categorycon'>People</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Heart} alt="heart" className='imgslider' />
                                <p className='categorycon'>Health</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Rich} alt="Rich" className='imgslider' />
                                <p className='categorycon'> RichMan</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Power} alt="Power" className='imgslider' />
                                <p className='categorycon'>Powerful</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Bussiness} alt="Bussiness" className='imgslider' />
                                <p className='categorycon'>Bussiness</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Food} alt="Food" className='imgslider' />
                                <p className='categorycon'>Food</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={Tech} alt="Tech" className='imgslider1' />
                                <p className='categorycon'>Technology</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={cart} alt="cart" className='imgslider' />
                                <p className='categorycon'>Shopping</p>
                            </li>
                            <li className='me-4 back'>
                                <img src={House} alt="House" className='imgslider' />
                                <p className='categorycon'>House</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            {/* hero section */}

            <section>
                <Container>
                    <div className='top10slider'>
                        <span className=''>Your</span> Top10 Trending Lists
                        <p className='top10sliderp'>Based on your selection - <span>Edit preferences</span></p>
                    </div>
                    <div className='accordion-demo demo'>
                        <div>
                            <Accordion activeIndex={0}>
                                <AccordionTab className='demo1' header={
                                    <Link to="/top10" className='link'> < div className='categorycontent'>
                                        <div className='categorycontent1'>1</div>
                                        <div>
                                            <h2 className='categorycontent2'>Powerful People</h2>
                                            <div className="categorycontent3">
                                                Power
                                            </div>
                                        </div>

                                    </div></Link>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <Link to="/top10"><img className="w-100 catimg" src={Powerful} /></Link>
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <Link to="/top10" className='link'> <h3 className="categorycontent4">
                                                    10 Most Powerful People in the World
                                                </h3></Link>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>2</div>
                                        <div>
                                            <h2 className='categorycontent2'>Healthy Countries</h2>
                                            <div className="categorycontent3">
                                                Health
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Hlthycon} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Top 10 Healthiest Countries in the World
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>3</div>
                                        <div>
                                            <h2 className='categorycontent2'>Rich People</h2>
                                            <div className="categorycontent3">
                                                Rich
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Richman} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    The 10 Richest People in the World
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>4</div>
                                        <div>
                                            <h2 className='categorycontent2'>Bussiness Man</h2>
                                            <div className="categorycontent3">
                                                Bussiness
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Bussines1} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Top 10 Bussinessman in the World
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>5</div>
                                        <div>
                                            <h2 className='categorycontent2'>Technology</h2>
                                            <div className="categorycontent3">
                                                Tech
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Techno} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Top 10 Technologies in the World
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>6</div>
                                        <div>
                                            <h2 className='categorycontent2'>Food</h2>
                                            <div className="categorycontent3">
                                                Food
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Foodies} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Top 10 Food in the World
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>7</div>
                                        <div>
                                            <h2 className='categorycontent2'>Meal Delivery</h2>
                                            <div className="categorycontent3">
                                                Food
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Meal} />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    10 Best Meal Kit Delivery Services Site for No-Hassle Healthy Meals at Home
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>March,2022</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </section>
            {/* footer */}
            <Footer />
        </div >
    )
}
