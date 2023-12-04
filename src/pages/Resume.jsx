const resume = 'https://docs.google.com/document/d/1I6_qJyn75xBeLA7Iezbl0GAeSkNao2ajN4pE0Fyk53Q/edit?usp=sharing';

export default function Resume() {
    return (
      <div className="resume-container">
          <a href={resume} target="_blank" rel="noopener noreferrer">
                <img src="./images/resume-preview.png" className="image" alt="Resume Preview" />
            </a>
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