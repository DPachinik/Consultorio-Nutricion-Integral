import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { LuApple } from 'react-icons/lu';
import { useEffect } from 'react';

const mobileItemsClases =
  'flex hover:bg-limon hover:text-white w-full h-[80px] items-center justify-center text-[24px]';
const desktopItemnsClases =
  'flex font-mulish font-semibold hover:border-b-[1px] hover:border-carmesi hover:text-carmesi   items-center md:text-center  lg:text-md text-sm';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  Navbar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
  };

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
        <div className="ml-4 flex w-full gap-2">
          <LuApple className="flex h-6 w-6 text-carmesi" />
          <p className="font-mulish font-semibold">Lic. Jessica Pachinik</p>
        </div>
        <div
          className={`Navbar-items absolute left-[0] top-[50px] flex h-[600px] w-full flex-col items-center justify-center border-b-[0.5px] border-black bg-white font-lora font-normal italic text-carmesi ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-1000 ease-in-out md:hidden`}
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
              <NavLink to={'/'}>Inicio</NavLink>
            </li>
            <li
              className={mobileItemsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink to={'/SobreMi'}>Sobre Mi</NavLink>
            </li>
            <li
              className={mobileItemsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink to={'/'}>Consultoria Nutricional</NavLink>
            </li>
            <li
              className={mobileItemsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink to={'/'}>Contacto</NavLink>
            </li>
            <li
              className={mobileItemsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink to={'/'}>Tienda</NavLink>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'border-b-[0.5px] border-carmesi text-carmesi' : ''
                }
              >
                Inicio
              </NavLink>
            </li>
            <li
              className={desktopItemnsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink
                to="/SobreMi"
                className={({ isActive }) =>
                  isActive ? 'border-b-[0.5px] border-carmesi text-carmesi' : ''
                }
              >
                Sobre Mi
              </NavLink>
            </li>
            <li
              className={desktopItemnsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink
                to={'/Consultoria'}
                className={({ isActive }) =>
                  isActive ? 'border-b-[0.5px] border-carmesi text-carmesi' : ''
                }
              >
                Consultoria Nutricional
              </NavLink>
            </li>
            <li
              className={desktopItemnsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink
                to={'/Contacto'}
                className={({ isActive }) =>
                  isActive ? 'border-b-[0.5px] border-carmesi text-carmesi' : ''
                }
              >
                Contacto
              </NavLink>
            </li>
            <li
              className={desktopItemnsClases}
              onClick={HandleItemClick}
              role="menuitem"
            >
              <NavLink
                to={'/Tienda'}
                className={({ isActive }) =>
                  isActive ? 'border-b-[0.5px] border-carmesi text-carmesi' : ''
                }
              >
                Tienda
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed inset-0 left-0 top-[650px] z-10 bg-black/35 ${menuOpen ? '' : 'hidden'} `}
      />
    </div>
  );
};

export default Navbar;
