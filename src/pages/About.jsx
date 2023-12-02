import me from '../../images/ChelseyFinn.jpg';

export default function About() {
    return (
      <div>
        <h1 className="title">Chelsey Finn</h1>
          <figure class="image">
            <img src={me}></img>
          </figure>
        <p>
          Hello. I'm Chelsey, a 23 year old web developer with a certificate in full-stack web development. I have worked with both front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, and Express.
        </p>
      </div>
    );
  }