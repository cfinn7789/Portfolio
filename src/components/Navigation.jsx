import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  const linkStyle = {
    display: 'inline'
  };

  return (
    <ul className="links justify-content-end">
      <li className="link">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          About
        </Link>
      </li>
      <li className="link">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          Portfolio
        </Link>
      </li>
      <li className="link">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          style={linkStyle}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;