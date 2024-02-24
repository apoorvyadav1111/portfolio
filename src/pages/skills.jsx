import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Skills } from "../components/Skills";
import { styled } from "styled-components";
import { TopNav } from "../components/TopNav";
import { motion } from "framer-motion";

const AboutStyles = styled(motion.div)`
    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh;
    }
    justify-content: center;
    align-items: center;
    `;
const SkillsPage = () => {
    return (
        <>
        <TransitionPage />
        <ParticlesContainer/>
        <AboutStyles>
            <SideNav />
            <TopNav />
            <Skills />
        </AboutStyles>
        </>
    )
}

export {
    SkillsPage
}; 