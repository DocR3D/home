import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron,
    Modal
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section id="Experiences" className="section">
            <Container>
                <Jumbotron fluid className="bg-white ">
                    <h2 className="display-4 mb-5 text-center ">
                        {experiences.heading}
                    </h2>
                    <Row mt-20>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;