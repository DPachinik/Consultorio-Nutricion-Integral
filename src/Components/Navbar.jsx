import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import logotipo from '../assets/logo-navbar.jpg';
import { Link } from 'react-router-dom';

const mobileItemsClases =
  'flex hover:bg-limon hover:text-white w-full h-[80px] items-center justify-center text-[24px]';
const desktopItemnsClases =
  'flex hover:border-b-[1px] hover:border-carmesi hover:text-carmesi   items-center  md:text-md lg:text-lg';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  Navbar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
  };

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
    <nav className="relative flex h-[85px] w-full items-center justify-between border-b-[0.5px] border-black bg-body">
      <div className="h-[64px] w-[280px] md:w-[400px]">
        <img
          className="h-full w-full"
          src={logotipo}
          alt="logo del consultorio nutricional"
        />
      </div>
      <div
        className={`Navbar-items absolute left-[0] top-[85px] z-10 flex h-[600px] w-full flex-col items-center justify-center border-b-[0.5px] border-black bg-white font-lora font-normal italic text-carmesi ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-1000 ease-in-out md:hidden`}
      >
        <ul
          className="flex w-full flex-col items-center justify-center gap-[30px] py-[65px]"
          role="menu"
        >
          <li
            className={mobileItemsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Inicio</Link>
          </li>
          <li
            className={mobileItemsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Sobre Mi</Link>
          </li>
          <li
            className={mobileItemsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Consultoria Nutricional</Link>
          </li>
          <li
            className={mobileItemsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Contacto</Link>
          </li>
          <li
            className={mobileItemsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Tienda</Link>
          </li>
        </ul>
      </div>

      <div className="flex p-3 md:hidden">
        {menuOpen ? (
          <FiX
            className="flex h-[40px] w-[40px]"
            onClick={HandleCloseClick}
            aria-label="Cerrar menú"
          />
        ) : (
          <FiMenu
            className="flex h-[40px] w-[40px]"
            onClick={HandleMenuClick}
            aria-label="Abrir menú"
          />
        )}
      </div>
      <div className="hidden h-full w-full px-[25px] md:flex md:items-center">
        <ul
          className="md:flex md:w-full md:items-center md:justify-end md:gap-[30px]"
          role="menu"
        >
          <li
            className={desktopItemnsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Inicio</Link>
          </li>
          <li
            className={desktopItemnsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Sobre Mi</Link>
          </li>
          <li
            className={desktopItemnsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Consultoria Nutricional</Link>
          </li>
          <li
            className={desktopItemnsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Contacto</Link>
          </li>
          <li
            className={desktopItemnsClases}
            onClick={HandleItemClick}
            role="menuitem"
          >
            <Link to={'/'}>Tienda</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
