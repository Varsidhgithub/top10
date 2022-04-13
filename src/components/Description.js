import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import './Description.css';
// pages
import Header from './Header';
import Footer from './Footer';
// images
import XiJinping from '../images/Xi Jinping.jpg';

function Description() {
    return (
        <div>
            {/* navbar */}
            <Header />

            {/* page-link section */}
            <section className="pb-5 nav-desc">
                <div className='page-link pt-3 pb-3'>
                    <Container>
                        <div className='link'>
                            <Link to="/top10" className='link'>Top 10 </Link> / Bibliography
                        </div>
                    </Container>
                </div>
            </section>

            {/* herosection */}
            <section>
                <Container>
                    <div>
                        <Row className='pb-5'>
                            <Col sm={12} lg={8} className="desc pe-sm-0 ps-sm-0">
                                <div className='desc_part1'>
                                    <h1 className='desc_title'>
                                        Xi Jinping</h1>
                                    <p className='desc_stitle'>President Of China</p>
                                </div>
                            </Col>
                            <Col lg={4} sm={12} className="ps-sm-0 pe-sm-0">
                                <div>
                                    <img className="w-100 desc_img h-100" src={XiJinping} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='pb-4'>


                            <Col sm={12} md={7} lg={8} className="desc_font12">
                                <div className='desc_font'>
                                    <p className='pb-3'><span className='name'>Xi Jinping</span> is a Chinese politician who has been serving as General Secretary of the Chinese Communist Party (CCP) and Chairman of the Central Military Commission (CMC) since 2012, and President of the People's Republic of China (PRC) since 2013. Xi has been the paramount leader of China, the most prominent political leader in the People's Republic of China, since 2012.</p>
                                    <p className='pb-3'>The son of Chinese Communist veteran Xi Zhongxun, he was exiled to rural Yanchuan County as a teenager following his father's purge during the Cultural Revolution, and lived in a yaodong in the village of Liangjiahe, where he joined the CCP and worked as the local party secretary. After studying chemical engineering at Tsinghua University as a "Worker-Peasant-Soldier student", Xi rose through the ranks politically in China's coastal provinces. Xi was Governor of Fujian from 1999 to 2002, before becoming Governor and Party Secretary of neighbouring Zhejiang from 2002 to 2007. Following the dismissal of the Party Secretary of Shanghai, Chen Liangyu, Xi was transferred to replace him for a brief period in 2007. He subsequently joined the Politburo Standing Committee of the CCP and served as first secretary of the Central Secretariat in October 2007. In 2008, he was designated as Hu Jintao's presumed successor as paramount leader; to that end, Xi was appointed Vice President of the People's Republic of China and Vice Chairman of the Central Military Commission. He officially received the title of "leadership core" from the CCP in 2016. Xi has also been a member of the 17th, 18th, 19th CCP Politburo Standing Committee since 2007. In 2018, he abolished presidential term limits.</p>
                                    <p className='pb-3'>Xi is the first CCP General Secretary born after the establishment of the People's Republic of China. Since assuming power, Xi has introduced far-ranging measures to enforce party discipline and to impose internal unity. His anti-corruption campaign has led to the downfall of prominent incumbent and retired CCP officials, including a former member of the Politburo Standing Committee. He has also enacted or promoted a more assertive foreign policy, particularly with regard to China–Japan relations, China's claims in the South China Sea, and its advocacy for free trade and globalization. He has sought to expand China's African and Eurasian influence through the Belt and Road Initiative.</p>
                                    <p className='pb-3'>Xi has often been described as a dictator or an authoritarian leader by political and academic observers, citing an increase of censorship and mass surveillance, a deterioration in human rights including the internment of Uyghur Muslims in Xinjiang, the cult of personality developing around him, and the removal of term limits for the leadership under his tenure. Xi's political thoughts have been incorporated into the party and national constitutions. As the central figure of the fifth generation of leadership of the People's Republic, Xi has significantly centralised institutional power by taking on a wide range of leadership positions, including chairing the newly formed National Security Commission, as well as new steering committees on economic and social reforms, military restructuring and modernization, and the Internet.</p>
                                    <p className='pb-3'>On 11 November 2021, the CCP declared Xi's ideology the "essence of Chinese culture". This is the third fundamental resolution of the Chinese Communist Party since its inception. The first resolution was adopted in 1945 to increase and ratify the power of Mao Zedong, and the second was adopted under Deng Xiaoping. The decision to issue one under Xi symbolically raises him to the same level of prestige as Mao and Deng.</p>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={5} lg={4}>
                                <div className='card personal-main'>
                                    <div className='personal'>
                                        <h5>Personal Stats</h5>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Born</p> <span>:</span> <p className='ms-3'>15 June 1953</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Age </p> <span>:</span> <p className='ms-3'> 68</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Residence </p> <span>:</span> <p className='ms-3'>Beijing, China</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Citizenship
                                        </p> <span>:</span> <p className='ms-3'>China</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Political party
                                        </p> <span>:</span> <p className='ms-3'>Chinese Communist Party</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Marital Status
                                        </p> <span>:</span> <p className='ms-3'>Married</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Spouse(s)
                                        </p> <span>:</span> <p className='ms-3'>Ke Lingling
                                            (m. 1979; div. 1982)
                                            Peng Liyuan ​(m. 1987)</p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Parent(s)
                                        </p> <span>:</span> <p className='ms-3'>
                                            Xi Zhongxun (father)
                                            Qi Xin (mother) </p>
                                    </div>
                                    <div className='personal1 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Children
                                        </p> <span>:</span> <p className='ms-3'>1</p>
                                    </div>
                                    <div className='personal3 d-flex'>
                                        <p className='ms-3  me-3 personalh'>Education
                                        </p> <span>:</span> <p className='ms-3'>Bachelor of Arts/Science, Tsinghua University; Doctor of Jurisprudence, Tsinghua University</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* footer */}
            <Footer />
        </div >
    )
}
export default Description