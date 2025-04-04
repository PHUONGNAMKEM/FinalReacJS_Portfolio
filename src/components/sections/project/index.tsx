import { Col, Row, Button } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import useFetchProjects from "@/helpers/project_data";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./project.scss"


type TLanguage = "vi" | "en"
// import Button from "components/mybutton/Button"
const Project = () => {

    const { t, i18n } = useTranslation();

    const currentLanguage = (i18n.resolvedLanguage) as TLanguage;


    // Lấy danh sách các loại dự án (UI, Mini Project, Finished Website Project)
    const categories = Array.from(new Set(PROJECTS.map(p => p.type.en)));
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Lọc project theo type đã chọn
    const filteredProjects = selectedCategory
        ? PROJECTS.filter(project => project.type.en === selectedCategory)
        : PROJECTS;



    // const { projects, loading, error } = useFetchProjects();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">My Recent <span className="brand-red">Works</span> </h3>
                    <h6 className="mb-2 text-center mb-md-5">Here are a few projects I've worked on recently.</h6>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col xs={12} className="gap-2 overflow-auto d-flex flex-nowrap">
                    <Button
                        variant={selectedCategory === null ? "primary" : "outline-primary"}
                        onClick={() => setSelectedCategory(null)}
                    >All

                    </Button>
                    {categories.map(category => (
                        <Button
                            key={category}
                            className="custom-btn"
                            variant={selectedCategory === category ? "primary" : "outline-primary"}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Col>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {filteredProjects.map(item => {
                    {/* {PROJECTS?.map(item => { */ }
                    {/* {projects?.map(item => { */ }
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                // title={item.title}
                                title={item.title[currentLanguage]}
                                description={item.description[currentLanguage]}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;