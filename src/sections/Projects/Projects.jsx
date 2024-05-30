import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
//import hipsster from '../../assets/hipsster.png';
//import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Speech-To-Text "
          p="An IOS App using instant speech recognision module"
          
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/chethanp1234/MusicPlayer"
          h3="Music App"
          p="Web based app using HTML , CSS , Javascript"
          
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/chethanp1234/MusicPlayer"
          h3="Sign-in / Login Pages"
          p="A demonstraction a login page using HTML , CSS"
        />
        
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Personal Photo Gallery"
          p="A Figma prototype using basic UI/UX design."
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
