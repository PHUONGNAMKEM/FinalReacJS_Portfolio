import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";


interface IProps {
    scrollToExperienceSection: () => void;
    handleDownLoadEng: () => void;
}

const HeroLeft = (props: IProps) => {

    const { t } = useTranslation();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    const handleDownLoadCV = () => {
        // openInNewTab("https://drive.google.com/file/d/12PGryk3PghTUvbW75nGEtJF0JE72_yQt/view?usp=sharing");
        openInNewTab("https://drive.google.com/file/d/1CRXnNKzBux7qDHVwGsFMqYXREHsUlewv/view?usp=sharing");
    }

    return (
        <div className='hero-left'>
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "Software Engineer",
                        "FrontEnd Developer",
                        "MERN Stack Developer",
                        "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-3 mb-2 mt-md-6 mb-md-5"
            >
                <SocialMedia
                    youtube={APP_DATA.YOUTUBE_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                    tiktok={APP_DATA.TIKTOK_URL}
                    udemy={APP_DATA.GITHUB_URL}
                />
            </div>
            <div className="gap-4 d-md-flex">
                {/* <div className="gap-4 d-md-flex d-none"> */}
                <ResizeButton onClick={props.scrollToExperienceSection}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire style={{ color: "orange" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                />
                <ResizeButton
                    btnText={t("heroSection.eng")}
                    btnIcons={<AiFillHeart />}
                    onClick={props.handleDownLoadEng}
                />
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownLoadCV}
                />
            </div>

        </div>
    )
}

export default HeroLeft;