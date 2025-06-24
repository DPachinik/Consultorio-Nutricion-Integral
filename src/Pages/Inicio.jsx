import PropTypes from 'prop-types';
import HomeMobile from '../Components/HomeMobile';
import HomeDesktop from '../Components/HomeDesktop';

const Inicio = () => {
  return (
    <section className="h-full w-full flex-col overflow-x-hidden bg-amber-50/5 pt-[50px] md:flex-row md:overflow-hidden md:pt-0">
      <HomeMobile />
      <HomeDesktop />
    </section>
  );
};

export default Inicio;

Inicio.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};
