import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { styled } from "styled-components";
import { TopNav } from "../components/TopNav";
import { motion } from "framer-motion";
import { VolunteerExperience } from "../components/Volunteer";

const AboutStyles = styled(motion.div)`
    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh;
        margin-bottom: 50px;
    }
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;
    `;
const About = () => {
    return (
        <>
        <TransitionPage />
        <ParticlesContainer/>
        <AboutStyles>
            <SideNav />
            <TopNav />
            <Experience />
            <Education  />
            <VolunteerExperience />
        </AboutStyles>
        </>
    )
}

export {
    About
}; 