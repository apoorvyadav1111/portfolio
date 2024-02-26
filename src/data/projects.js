import karyaImg from "../assets/images/karya.png";
import jobHuntSidekickImg from "../assets/images/job-hunt-sidekick.png";
import portfolioImg from "../assets/images/portfolio.png";
import mannImg from "../assets/images/mann.png";
import buQuizImg from "../assets/images/bu-quiz.jpeg";
import reactionTimerImg from "../assets/images/reaction-timer.png";
import bshmenuImg from "../assets/images/bshmenu.png";
import desktopClockImg from "../assets/images/desk-clock.png";
import agilityCoachImg from "../assets/images/agilitycoach.jpg";


export const projects = [
    {
        name:"AgilityCoach",
        description:"A web app that helps athletes improve their agility and reaction time.",
        image: agilityCoachImg,
        github:"https://github.com/apoorvyadav1111/agilitycoach",
        tags:["Flask","Python","JavaScript","OpenCV","PostgreSQL"],
        url:"https://github.com/apoorvyadav1111/agilitycoach",
    },
    {
        name:"Desktop Clock",
        description:"A minimalist desktop clock app that displays time and date.",
        image: desktopClockImg,
        tags:["next.js","react","javascript","css","html"],
        type:"Frontend Web App",
        github:"https://github.com/apoorvyadav1111/desk-clock",
        url:"https://deskclock.vercel.app/"
    },
    {
        name: "Digital Menu",
        description:"A web app that helps restaurants create and manage digital menus.",
        image: bshmenuImg,
        tags: ["React", "TypeScript","CSS"],
        type:"Frontend Web App",
        github: "https://github.com/apoorvyadav1111/bsh-menu",
        url:"https://brijwasisweethouse.github.io/bsh-menu/#/"
    },
    {
        name: "Project Management System: Karya",
        description: "A web app that helps teams manage their projects and tasks.",
        image: karyaImg,
        tags: ["Vue", "Typescript", "Node.js", "Express", "MongoDB", "Material UI", "GraphQL"],
        type:"Full Stack Web App",
        github: "https://github.com/apoorvyadav1111/karya-client",
        url:"https://github.com/apoorvyadav1111/karya-client",
    },
    {
        name: "Job Hunt Sidekick",
        description:"A web app that helps job seekers keep track of their job applications and interviews.",
        image: jobHuntSidekickImg,
        tags: ["Vue", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI"],
        type:"Full Stack Web App",
        github: "https://github.com/apoorvyadav1111/job-hunt-sidekick",
        url:"https://github.com/apoorvyadav1111/job-hunt-sidekick"
    },
    {
        name: "Portfolio",
        description:"My personal portfolio website.",
        image: portfolioImg,
        tags: ["React", "TypeScript", "Styled Components", "Framer Motion"],
        type:"Frontend Web App",
        github: "https://github.com/apoorvyadav1111/portfolio3",
        url:"https://apoorvyadav.vercel.app/"
    },
    {
        name: "Mann",
        description:"A web app backend using python, django, django rest framework and graphql designed for a social media app.",
        image: mannImg,
        tags: ["Python", "Django", "Django Rest Framework", "GraphQL"],
        type:"Backend Web App",
        github: "https://github.com/apoorvyadav1111/mann-backend",
        url:"https://github.com/apoorvyadav1111/mann-backend"
    },
    {   
        name:"BU Quiz",
        description:"A web app that helps students provides them with a platform to create and take quizzes",
        image: buQuizImg,
        tags: ["Vue", "Javascript", "Node.js", "Express", "MongoDB", "Material UI"],
        type:"Full Stack Web App",
        github: "https://github.com/ayadav16/Hackathon",
        url: "https://github.com/ayadav16/Hackathon"
    },
    {
        name:"Reaction Timer Game",
        description:"A web app that tests your reaction time.",
        image: reactionTimerImg,
        tags: ["Vue"],
        type:"Frontend Web App",
        github: "https://github.com/apoorvyadav1111/reaction-timer-vue",
        url: "https://github.com/apoorvyadav1111/reaction-timer-vue"
    }
];

export default projects;

