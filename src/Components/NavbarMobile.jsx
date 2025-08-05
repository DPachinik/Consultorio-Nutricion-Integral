import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../assets/logo.webp';

const NavbarMobile = ({ menuOpen, setMenuOpen, enlaces }) => {
  useEffect(() => {
    if (window.innerWidth < 768) {
      if (menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [menuOpen]);

  const HandleMenuClick = () => {
    setMenuOpen(true);
  };
  const HandleCloseClick = () => {
    setMenuOpen(false);
  };
  const HandleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 top-0 z-50 flex h-[50px] w-full items-center justify-between border-b-[0.5px] border-black bg-white">
        <div className="flex min-w-max select-none items-center gap-2">
          <img src={Logo} className="h-12 w-12" />

          <p className="text-md w-full font-lora font-medium italic text-rose-800">
            Nut. Jessica Pachinik
          </p>
        </div>
        <div
          className={`Navbar-items absolute left-[0] top-[50px] flex h-[600px] w-full flex-col items-center border-b-[0.5px] border-black bg-white font-lora font-medium italic text-rose-800 ${menuOpen ? 'animate-slide' : 'pointer-events-none opacity-0'} md:hidden`}
        >
          <ul
            className="flex h-full w-full flex-col items-center justify-center gap-[30px]"
            role="menu"
          >
            {enlaces.map((enlace, index) => (
              <li
                key={index}
                className="flex h-[80px] w-full items-center justify-center text-[24px] hover:bg-lima hover:text-white"
                onClick={HandleItemClick}
                role="menuitem"
              >
                <NavLink to={`/${enlace.para}`}>{enlace.texto}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex h-[80px] w-full items-end justify-center pb-2 text-center text-primario">
            <div className="mx-4 w-full border-t-[1px] border-rose-600 pb-1 pt-2">
              alimenta tu cuerpo, honra tu espíritu...
            </div>
          </div>
        </div>

        <div className="flex p-3 md:hidden">
          {menuOpen ? (
            <FiX
              className="flex h-[32px] w-[32px] hover:text-rose-800"
              onClick={HandleCloseClick}
              aria-label="Cerrar menú"
            />
          ) : (
            <FiMenu
              className="flex h-[32px] w-[32px] hover:text-rose-800"
              onClick={HandleMenuClick}
              aria-label="Abrir menú"
            />
          )}
        </div>
      </nav>
      <div
        className={`fixed inset-0 left-0 top-[650px] z-10 bg-black/35 ${menuOpen ? 'animate-slide' : 'pointer-events-none opacity-0'} `}
        onClick={HandleCloseClick}
      />
    </div>
  );
};

export default NavbarMobile;

NavbarMobile.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  enlaces: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};
