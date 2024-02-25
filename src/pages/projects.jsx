import React from 'react'
import { ParticlesContainer } from '../components/ParticlesContainer'
import { SideNav } from '../components/SideNav'
import { TransitionPage } from '../components/TransitionPage'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { featuredProject, projects, ProjectType } from '../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGolang } from '@fortawesome/free-brands-svg-icons'
import { TopNav } from '../components/TopNav'

const ProjectStyles = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 4rem;}
  a:hover{
    color: var(--neon-purple);
  }
  .title{
    font-size: calc(var(--VH)*8);
    padding-top: 2rem;
    padding-bottom: 4rem;
    @media (max-width: 500px){
      font-size: calc(var(--VW)*6);
      padding-top: 2rem;
      padding-left: 1rem;
    }
  }
  .grid{
    padding: 8rem;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 4rem;
    @media (max-width: 500px){
      padding: 1rem;
      gap: 1rem;
    }
    .second{
      grid-column: span 6 / span 12;
      @media (max-width: 500px){
        grid-column: span 12 / span 12;
      }
    }
  }
  

  .project-card{
    height: calc(var(--VH)*60);
    @media (max-width: 500px){
      width: calc(var(--VW)*90);
      height: auto;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    background: rgba(255,255,255,0.1);
    .img_size{
      border-radius: 1rem;
      width: 100%;
      height: auto;
    }
    &-content{
      width: 100%;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
      h1{
        font-size: calc(var(--VH)*3);
        font-family: Grotesk;
        @media (max-width: 500px){
          font-size: calc(var(--VH)*2);
        }
      }
      h5{
        font-size: calc(var(--VH)*1);
        margin-bottom: 1rem;
      }
      .links{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
      .tags{
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        .tag{
          padding: 4px 8px;
          font-family: 'Monospace',monospace;
          margin: 4px;
          border-radius: 4px;
          border: 1px solid var(--neon-purple);
          font-size: calc(var(--VH)*1.5);
        }
      }
      a{
        margin-top: 1rem;
        font-size: calc(var(--VH) * 1.5);
        svg{
            pointer-events: none;
            &:hover {
                color: var(--neon-purple);
                background-color: var(--black);
            }
          }
        }
    }
`

const ProjectCard = ({project}) => {
  return (
    <article className='project-card'>
      <img className="img_size" src={project.image} alt={project.name} />
      <div className='project-card-content'>
          <h1>{project.name}</h1>
        <div className='tags'>
          {project.tags.slice(0,5).map(tag => (
            <span className='tag'>{tag}</span>
          ))}
        </div>
        <motion.div className='links'>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.url} 
            target="_blank">
              Visit
          </motion.a>
          </span>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.github} 
            target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
          </motion.a>
          </span>

        </motion.div>
      </div>
    </article>
  )
}
const Project = () => {
  return (
    <>
      <TransitionPage />
      <ParticlesContainer />
      <ProjectStyles>
      <SideNav />
      <TopNav />
      <motion.h1 
        className='title'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}  
      >
        Projects
      </motion.h1>
      <div className='grid'>
        {projects.map(project => (
          <motion.div
          className='second'
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.9}}
          whileInView={{opacity: 1, y: 0}}
          >
            <ProjectCard project={project} />
            </motion.div>
            ))}  
      </div>
      </ProjectStyles>
    </>
  )
}

export {Project}