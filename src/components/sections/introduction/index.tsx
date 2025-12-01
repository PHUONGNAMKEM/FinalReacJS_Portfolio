import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.svg";
import avatarImg2 from "assets/avt.png";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='my-5 introduction-section my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? <>
                            LET ME <span className='text-pink-100'> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span className='text-pink-100'>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        <br />
                        <br />{t("introSection.heading2")}
                        <i>
                            <b className='text-pink-100'> Javascript {t("introSection.and")} C#. </b>
                        </i>
                        <br />
                        <br />
                        {t("introSection.heading3")} &nbsp;
                        <i>
                            <b className='text-pink-100'>
                                {t("introSection.heading4")}
                            </b>
                        </i>
                        <br />
                        <br />
                        {t("introSection.heading5")}
                        <i><b className='text-pink-100'>&nbsp;ASP.NET</b> </i>
                        {t("introSection.and")}
                        <i>
                            <b className='text-pink-100'>
                                {" "}
                                Node.js, ReactJS
                            </b>
                        </i>

                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt style={{ transition: "400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)", transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }}>
                        <img src={avatarImg2} className="img-fluid" alt="avatar" style={{
                            position: "absolute",
                            top: "-160px",
                            left: "-74px",
                        }} />
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section >
    )
}

export default Introduction;