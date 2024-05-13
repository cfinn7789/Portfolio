import { Link, useLocation } from 'react-router-dom';

import pjt from '../../images/SoundQuest.jpg';
import pjt2 from '../../images/02-portfolio-1.jpg';
import pjt3 from '../../images/localhost_3000_.jpg';

function Project() {
  const currentPage = useLocation().pathname;

  return (
    <div>
        <div className="image-container">
            <div className="image-box">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">
                    <img src={pjt} width="50%" className="image"></img>
                </a>
            </div>

            <div className="image-box">
                <a className="project" href="https://shrouded-springs-93967-4ef63984c8fc.herokuapp.com/">
                    <img src={pjt2} width="50%" className="image"></img>
                </a>
            </div>

            <div className="image-box">
                <a className="project" href="https://github.com/jeseh7/igr">
                    <img src={pjt3} width="50%" className="image"></img>
                </a>
            </div>

            {/* <div className="image-box">
                <img src="./images/image.jpg" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://github.com/cfinn7789">PlotWeaver</a>
                </div>
            </div> */}

        </div>
    </div>
  );
}

export default Project;