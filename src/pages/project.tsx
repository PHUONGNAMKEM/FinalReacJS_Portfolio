import { Container } from "react-bootstrap";
import Project from "components/sections/project";

const ProjectPage = () => {
    return (
        <div className="project-screen">
            <section className="pt-0 mt-2 mt-md-5 pt-md-5">
                <Container>
                    <Project />
                </Container>
            </section>
        </div>
    )
}

export default ProjectPage;