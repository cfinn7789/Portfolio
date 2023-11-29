const resume = 'https://docs.google.com/document/d/1I6_qJyn75xBeLA7Iezbl0GAeSkNao2ajN4pE0Fyk53Q/edit?usp=sharing';

export default function Resume() {
    return (
      <div>
        <h1 className="title">Resume</h1>
        <a href={resume} rel="doc">Resume</a>
        <img src="./images/old-resume.png" className="image"></img>
        <h1 className="title">Front-end Proficiencies</h1>
        <p>
          HTML5, CSS, Javascript, JQuery, Bootstrap, AJAX, SASS
        </p>
        <h1 className="title">Back-end Proficiencies</h1>
        <p>
          MySQL, MongoDB, Express, ReactJS, Node, Handlebars
        </p>
      </div>
    );
  }