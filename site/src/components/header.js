/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Header = () => (
  <header
    sx={{
      bg: 'primary',
    }}
  >
    <Link to="/">
      <span className="visually-hidden">Refocus</span>
    </Link>
  </header>
);

export default Header;
