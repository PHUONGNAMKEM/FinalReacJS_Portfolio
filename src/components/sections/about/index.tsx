import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="mb-2 text-center mb-md-5">Know Who <span className="brand-red">I'M</span> </h3>
                    <div>
                        <div>
                            <p> Hi Everyone, I am iFanIT from TPHCM, VietNam.</p>

                            <p> I am currently employed as a software engineer.</p>

                        </div>
                    </div>
                    <div>
                        <p>Apart from coding, some other activities that I love to do!

                        </p>
                        <ul>
                            <li>Design UI</li>
                            <li>Watching/Learning E with youtube video</li>
                            <li>Reading</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"Pursuing Your Dreams Is How You Become Homeless ~.~"</p>
                        <p className="text-center brand-red">--Jimmy O Yang</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="mt-3 d-none d-md-flex align-items-center justify-content-center mt-md-5"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text (vì có keyword rp ko chuyển sang file js và đổi thành string thì nó sẽ gây leak ram)
                        // https://github.com/airbnb/lottie-web/issues/2070 
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-3 mt-md-5">
                    <div className="gap-3 d-flex flex-column align-items-center">
                        <div><h4 className="text-center brand-red">Education</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="relative p-3">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2022-2026</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Softwaren Engineer</p>
                                                <p className="company">HCMC University of Industry and Trade (HUIT)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className="mt-3 mt-md-5">
                    <h3 className="mb-2 mb-md-5">FIND ME ON </h3>
                    <SocialMedia
                        youtube={APP_DATA.YOUTUBE_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        udemy={APP_DATA.UDEMY_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;