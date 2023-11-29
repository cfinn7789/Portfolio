import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation'

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="banner-image">
      <nav>
        <Link to="/">Finn</Link>
      </nav>
        <Navigation />
    </div>
  );
}

export default Header;