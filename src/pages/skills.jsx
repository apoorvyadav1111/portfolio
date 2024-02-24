import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Skills } from "../components/Skills";
import { styled } from "styled-components";
import { TopNav } from "../components/TopNav";
import { motion } from "framer-motion";

const SkillsStyles = styled(motion.div)`
    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh;
    }
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    `;
const SkillsPage = () => {
    return (
        <>
        <TransitionPage />
        <ParticlesContainer/>
        <SkillsStyles>
            <SideNav />
            <TopNav />
            <Skills />
        </SkillsStyles>
        </>
    )
}

export {
    SkillsPage
}; 