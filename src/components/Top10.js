import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

// pages
import "./Top10.css";
import Header from './Header';
import Footer from './Footer';
// images
import XiJinping from '../images/Xi Jinping.jpg';
import Putin from '../images/putin.jpg';
import Trump from '../images/trump.jpg';
import Angela from '../images/Angela.jpg';
import Jof from '../images/jof.jpg';
import Pope from '../images/Pope.jpg';
import Bill from '../images/bill.jpg';
import Mohammad from '../images/mohammad.jpg';
import Modi from '../images/modi.jpg';
import Page from '../images/page.jpg';


function Top10() {

    return (
        <div>
            {/* navbar */}
            <Header />

            {/* page-link section */}

            <section className="page-link pt-3 pb-3">
                <Container>
                    <div className='link'>
                        <Link to="/" className='link'>Home </Link> / Top10
                    </div>
                </Container>
            </section>

            {/* hero section */}
            <section>
                <Container>
                    <div className='top10slider pt-4 pb-4'>
                        Top 10 <span className=''>Powerful Person</span> in the World
                    </div>
                    <div className='accordion-demo demo'>
                        <div>
                            <Accordion activeIndex={0}>
                                <AccordionTab className='demo1' header={
                                    <Link to="/description" className='link'>< div className='categorycontent'>
                                        <div className='categorycontent1'>1</div>
                                        <div>
                                            <h2 className='categorycontent2'>Xi Jinping</h2>
                                            <div className="categorycontent3">
                                                President of China
                                            </div>
                                        </div>
                                    </div></Link>}
                                >
                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <Link to="/description"><img className="w-100 catimg" src={XiJinping} alt="11" /></Link>
                                        </Col>
                                        <Col sm={7}>
                                            <div>
                                                <Link to="/description"><h3 className="categorycontent4">
                                                    Xi Jinping
                                                </h3></Link>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Xi Jinping is a Chinese politician who has been serving as General Secretary of the Chinese Communist Party and Chairman of the Central Military Commission since 2012, and President of the People's Republic of China since 2013.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>2</div>
                                        <div>
                                            <h2 className='categorycontent2'>Vladimir Putin</h2>
                                            <div className="categorycontent3">
                                                President of Russia
                                            </div>
                                        </div>
                                    </div>}
                                >
                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Putin} alt="12" />
                                        </Col>
                                        <Col sm={7}>
                                            <div>
                                                <h3 className="categorycontent4">
                                                    Vladimir Putin
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Vladimir Vladimirovich Putin is a Russian politician and former intelligence officer who is the president of Russia, a position he has filled since 2012, and previously from 2000 until 2008. He was also the prime minister from 1999 to 2000, and again from 2008 to 2012.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>3</div>
                                        <div>
                                            <h2 className='categorycontent2'>Donald Trump</h2>
                                            <div className="categorycontent3">
                                                45th U.S. President
                                            </div>
                                        </div>
                                    </div>}
                                >
                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Trump} alt="20" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Donald Trump
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. Born and raised in Queens, New York City, Trump graduated from the Wharton School of the University of Pennsylvania with a bachelor's degree in 1968.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>4</div>
                                        <div>
                                            <h2 className='categorycontent2'>	Angela Merkel</h2>
                                            <div className="categorycontent3">
                                                Former Chancellor of Germany
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Angela} alt="13" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Angela Merkel
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Angela Dorothea Merkel is a German retired politician and scientist who served as the chancellor of Germany from 2005 to 2021. A member of the Christian Democratic Union, she previously served as leader of the Opposition from 2002 to 2005 and as Leader of the CDU from 2000 to 2018.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>5</div>
                                        <div>
                                            <h2 className='categorycontent2'>Jeff Bezos</h2>
                                            <div className="categorycontent3">
                                                Executive Chairman of Amazon
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Jof} alt="14" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Jeff Bezos
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>6</div>
                                        <div>
                                            <h2 className='categorycontent2'>	Pope Francis</h2>
                                            <div className="categorycontent3">
                                                Head of the Catholic Church
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Pope} alt="15" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Pope Francis
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Pope Francis is the head of the Catholic Church and sovereign of the Vatican City State since 2013. Francis is the first pope to be a member of the Society of Jesus, the first from the Americas, the first from the Southern Hemisphere, and the first pope from outside Europe since Gregory III, a Syrian who reigned in the 8th century.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>7</div>
                                        <div>
                                            <h2 className='categorycontent2'>	Bill Gates</h2>
                                            <div className="categorycontent3">
                                                American business magnate
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Bill} alt="16" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Bill Gates
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>8</div>
                                        <div>
                                            <h2 className='categorycontent2'>Mohammad bin salman al saud</h2>
                                            <div className="categorycontent3">
                                                Saudi Arabian politician
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Mohammad} alt="17" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Mohammad bin salman al saud
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Mohammed bin Salman Al Saud, colloquially known as MBS, is a Saudi Arabian politician who is the crown prince, deputy prime minister, and minister of defense of Saudi Arabia. He also serves as the chairman of the Council of Economic and Development Affairs and chairman of the Council of Political and Security Affairs.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>9</div>
                                        <div>
                                            <h2 className='categorycontent2'>Narendra Modi</h2>
                                            <div className="categorycontent3">
                                                Prime Minister of India
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Modi} alt="18" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Narendra Modi
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Narendra Damodardas Modi is an Indian politician serving as the 14th and current prime minister of India since 2014. Modi was the chief minister of Gujarat from 2001 to 2014 and is the Member of Parliament from Varanasi. He is a member of the Bharatiya Janata Party (BJP) and of the Rashtriya Swayamsevak Sangh (RSS), a right-wing Hindu nationalist paramilitary volunteer organisation.</p>
                                            </div>

                                        </Col>
                                    </Row>
                                </AccordionTab>
                                <AccordionTab className='demo1' header={
                                    < div className='categorycontent'>
                                        <div className='categorycontent1'>10</div>
                                        <div>
                                            <h2 className='categorycontent2'>	Larry Page</h2>
                                            <div className="categorycontent3">
                                                American computer scientist
                                            </div>
                                        </div>

                                    </div>}
                                >

                                    <Row className="mt-4 maincnt">
                                        <Col sm={5}>
                                            <img className="w-100 catimg" src={Page} alt="19" />
                                        </Col>
                                        <Col sm={7}>

                                            <div>
                                                <h3 className="categorycontent4">
                                                    Larry Page
                                                </h3>
                                            </div>
                                            <div className='categorycontent5'>
                                                <p>Lawrence Edward Page is an American computer scientist and Internet entrepreneur. He is best known as one of the co-founders of Google, along with Sergey Brin.
                                                    Page was the chief executive officer of Google from 1997 until August 2001 then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc.</p>
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

export default Top10