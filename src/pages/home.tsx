import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import bg from "assets/section.svg";
import Introduction from "components/sections/introduction";
import ResizeButton from "components/sections/resize.button";
import { useTranslation } from "react-i18next";
import Divider from "components/sections/divider";
import Experience from "components/sections/experience";
import Skill from "components/sections/skill";
import { useRef } from "react";
// import { start } from "repl";
import Project from "./project";
// import TiltedCard from "@/components/tiltedcard/TiltedCard";
// import avatarImg2 from "assets/avt.png";

const HomePage = () => {
  const { t } = useTranslation();

  const expRef = useRef<HTMLElement>(null);
  const scrollToExperienceSection = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Thêm hàm handleDownLoadCV như bên heroleft để bấm vào download CV
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleDownLoadCV = () => {
    openInNewTab(
      "https://drive.google.com/file/d/12PGryk3PghTUvbW75nGEtJF0JE72_yQt/view?usp=drive_link"
    );
  };

  const handleDownLoadEng = () => {
    openInNewTab(
      "https://drive.google.com/file/d/1eZxA983pZSGGpnZwEv3FjI7-xB9ukN9f/view?usp=sharing"
    );
  };

  return (
    <div className="homepage-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-2 mt-md-7">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft scrollToExperienceSection={scrollToExperienceSection} handleDownLoadEng={handleDownLoadEng} />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
            <Col
              xs={12}
              className="mt-4 d-md-none d-flex justify-content-center"
            >
              <ResizeButton
                btnText={t("heroSection.cv")}
                btnIcons={<MdFileDownload />}
                onClick={handleDownLoadCV}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Introduction />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          {/* <TiltedCard
                        imageSrc={avatarImg2}
                        altText="Kendrick Lamar - GNX Album Cover"
                        captionText="Kendrick Lamar - GNX"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text">
                                Kendrick Lamar - GNX
                            </p>
                        }
                    /> */}
          <Project />
        </Container>
      </section>
      <Divider />

      <section ref={expRef}>
        <Container>
          <Experience />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          <Skill />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
