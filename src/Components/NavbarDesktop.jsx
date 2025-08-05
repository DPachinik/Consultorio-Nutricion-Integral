import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavbarDesktop = ({ setMenuOpen, enlaces }) => {
  const HandleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 top-0 z-50 flex h-[50px] w-full items-center justify-between border-b-[0.5px] border-black bg-white">
        <div className="flex min-w-max select-none items-center gap-2">
          <img src={Logo} className="h-12 w-12" />

          <p className="text-md w-full font-sourceSerif font-medium italic text-rose-800">
            Nut. Jessica Pachinik
          </p>
        </div>

        <div className="hidden h-full w-full px-[25px] md:flex md:items-center">
          <ul
            className="md:flex md:w-full md:items-center md:justify-end md:gap-[30px]"
            role="menu"
          >
            {enlaces.map((enlace, index) => (
              <li
                key={index}
                className="lg:text-md flex items-center font-mulish text-sm font-semibold hover:border-b-[1px] hover:border-rose-800 hover:text-rose-800 md:text-center"
                onClick={HandleItemClick}
                role="menuitem"
              >
                <NavLink
                  to={`/${enlace.para}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-[0.5px] border-rose-800 text-rose-800'
                      : ''
                  }
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;

NavbarDesktop.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
  enlaces: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};
