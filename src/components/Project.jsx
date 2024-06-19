import { Link, useLocation } from 'react-router-dom';

import pjt from '../../images/SoundQuest.jpg';
import pjt2 from '../../images/02-portfolio-1.jpg';
import pjt3 from '../../images/localhost_3000_.jpg';
import readmeGen from '../../images/ReadmeGenerator.png';

function Project() {
  const currentPage = useLocation().pathname;

  return (
    <div>

        <div className="image-container">

        <div className="title">SoundQuest</div>

            <div className="image-box">
        

                    <a className="project" href="https://holdenmg.github.io/sound-quest/">
                        <img src={pjt} width="50%" className="project-image"></img>
                    </a>

                    <div className="descr">This website will suggest a random artist and present a video and link to the artist's spotify page based on user response to simple prompts.</div>
            </div>

            <div className="title">An App Called Quest</div>

            <div className="image-box">

                    <a className="project" href="https://shrouded-springs-93967-4ef63984c8fc.herokuapp.com/">
                        <img src={pjt2} width="50%" className="project-image"></img>
                    </a>

                    <div className="descr">An App Called Quest is a user-friendly application designed to help you plan your trips effectively and discover exciting activities around your chosen trip destination.</div>
            </div>

            <div className="title">IGR</div>

            <div className="image-box">

                    <a className="project" href="https://github.com/jeseh7/igr">
                        <img src={pjt3} width="50%" className="project-image"></img>
                    </a>

                    <div className="descr">This project is a website where users can search for video games from a database and write reviews for those games. It also provides a section for game creators and allows the inclusion of images.</div>
            </div>

            <div className="title">Readme Generator</div>

            <div className="image-box">

                    <a className="project" href="https://github.com/cfinn7789/Readme-Generator">
                        <img src={readmeGen} width="50%" className="project-image"></img>
                    </a>

                    <div className="descr">A nodejs application that will generate a readme file.</div>
            </div>

        </div>
    </div>
  );
}

export default Project;