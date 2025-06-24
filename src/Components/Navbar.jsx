import PropTypes from 'prop-types';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navbar = ({ menuOpen, setMenuOpen, enlaces }) => {
  return (
    <div>
      <div className="flex w-full md:hidden">
        <NavbarMobile
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          enlaces={enlaces}
        />
      </div>

      <div className="hidden w-full md:flex">
        <NavbarDesktop setMenuOpen={setMenuOpen} enlaces={enlaces} />
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  enlaces: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};
