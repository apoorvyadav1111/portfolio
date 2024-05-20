import karyaImg from "../assets/images/karya.png";
import jobHuntSidekickImg from "../assets/images/job-hunt-sidekick.png";
import portfolioImg from "../assets/images/portfolio.png";
import mannImg from "../assets/images/mann.png";
import buQuizImg from "../assets/images/bu-quiz.jpeg";
import reactionTimerImg from "../assets/images/reaction-timer.png";
import bshmenuImg from "../assets/images/bshmenu.png";
import desktopClockImg from "../assets/images/desk-clock.png";
import agilityCoachImg from "../assets/images/agilitycoach.jpg";
import dailyQuotesImg from "../assets/images/daily-quotes.png";
import awsNoteImg from "../assets/images/aws-notes.png";
// import courseGradingImg from "../assets/images/course-grading.png";
import todoImg from "../assets/images/todo.png";
import jotionImg from "../assets/images/jotion.png";
import codespeedImg from "../assets/images/codespeed.png";
import cyberSecurityQuizImg from "../assets/images/cybersecurityquiz.png";
import redisServerImg from "../assets/images/redis.png";
import bankImg from "../assets/images/bank.png";
import sftpImg from "../assets/images/sftp.png";

export const projects = [
    {
        name:"Cyber Security Quiz",
        description:"A web app that helps K-12 students test their knowledge of cyber security concepts.",
        image: cyberSecurityQuizImg,
        tags:["React","TypeScript","Next.js","tailwind","framer-motion"],
        type:"Fullstack Web App",
        github:"https://github.com/apoorvyadav1111/cybersecurityquiz",
        url:"https://cybersecurityquiz.vercel.app"
    },
    {
        name:"Codespeed",
        description:"A web app that helps users improve their typing speed and accuracy.",
        image: codespeedImg,
        tags:["React","TypeScript","Next.js","tailwind","framer-motion"],
        type:"Fullstack Web App",
        github:"https://github.com/apoorvyadav1111/codespeed",
        url:"https://codespeed.vercel.app"
    },
    {
        name:"Smart Note Taking App",
        description:"A web app that helps users take notes and organize them.",
        image: jotionImg,
        tags:["React","TypeScript","Next.js","tailwind","Convex"],
        type:"Full Stack Web App",
        github:"https://github.com/apoorvyadav1111/Motion",
        url:"https://takesmartnotes.vercel.app"
    },
    {
        name:"Redis Server",
        description:"Redis server built using Python, asyncio and sockets.",
        image: redisServerImg,
        tags:["Python","Sockets", "Redis", "Asyncio","Multithreading"],
        type:"Distributed Software Development",
        github:"https://github.com/apoorvyadav1111/python-redis-server",
        url:"https://github.com/apoorvyadav1111/python-redis-server"
    },
    {
        name:"Simple SFTP Server",
        description:"A simple SFTP server built using Python and sockets.",
        image: sftpImg,
        tags:["Python","Sockets", "OpenSSL"],
        type:"Software Development",
        github:"https://github.com/apoorvyadav1111/python-sftp-server",
        url:"https://github.com/apoorvyadav1111/python-sftp-server"
    },
    {
        name:"Encrypted Bank Server",
        description:"A three tier architecture for a bank server with public key encryption and digital signatures.",
        image: bankImg,
        tags:["Python","Sockets", "OpenSSL", "Encryption", "Digital Signatures"],
        type:"Software Development",
        github:"https://github.com/apoorvyadav1111/python-encrypted-bank-server",
        url:"https://github.com/apoorvyadav1111/python-encrypted-bank-server"
    },
    {
        name:"Daily Qoutes",
        description:"A web app that provides daily quotes to the user in presentation mode or wallpaper mode.",
        image: dailyQuotesImg,
        tags:["React","TypeScript","Next.js","tailwind","framer-motion"],
        type:"Frontend Web App",
        github:"https://github.com/apoorvyadav1111/daily-quotes",
        url:"https://lifequotesforyou.vercel.app/"
    },
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
        name: "AWS Notes for CCP",
        description: "A simple website containing well structed notes for AWS Certified Cloud Practitioner exam.",
        image: awsNoteImg,
        tags: ["Readme", "Markdown", "Github Pages"],
        type:"Static Website",
        github: "https://github.com/apoorvyadav1111/aws-ccp-udemy-notes",
        url:"https://apoorvyadav1111.github.io/aws-ccp-udemy-notes/"
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
        name: "Todo - iOS App",
        description:"A simple todo app for iOS built using Swift and Firebase.",
        image: todoImg,
        tags: ["Swift", "Firebase"],
        type:"iOS App",
        github: "https://github.com/apoorvyadav1111/todoapp",
        url:"https://github.com/apoorvyadav1111/todoapp"
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
    // ,
    // {
    //     name:"Course Grading System",
    //     description:"A comprehensive web app that helps teachers grade students with complex logisitcs",
    //     image: courseGradingImg,
    //     tags: ["React", "Javascript", "Node.js", "Express", "MongoDB"],
    //     type:"Full Stack Web App",
    //     github: "https://github.com/apoorvyadav1111/course-grading-system",
    //     url: "https://github.com/apoorvyadav1111/course-grading-system"
    // }
];

export default projects;

