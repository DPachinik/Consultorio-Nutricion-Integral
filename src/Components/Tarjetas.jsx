import PropTypes from 'prop-types';

const Tarjetas = ({ tarjetas }) => {
  const classMap = {
    0: '',
    1: 'lg:ml-auto',
    2: '',
    3: 'lg:ml-auto',
  };

  return (
    <div className="flex flex-col bg-cover bg-center lg:bg-pie">
      {tarjetas.map((tarjeta, index) => (
        <div
          key={index}
          className={`mx-3 mb-8 grid h-[380px] grid-cols-2 rounded-2xl border-[1px] border-lime-700 bg-gradient-to-t from-fondo via-lime-100 to-lime-50 font-mulish text-sm shadow-inner md:h-[250px] lg:w-[760px] ${index % 2 === 0 ? 'clip-tl-45' : 'clip-tr-45'} ${classMap[index] || ''} `}
        >
          <div
            className={`flex h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
            style={{ backgroundImage: `url(${tarjeta.imagen})` }}
          ></div>
          <div
            className={`flex flex-col py-2 md:pt-8 lg:pt-2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
          >
            <h3 className="pl-4 font-sourceSerif font-semibold text-subtitulo sm:text-sm md:text-xl md:font-bold">
              {tarjeta.titulo}
            </h3>
            <p className="md:text-md lg:text-md px-4 pt-2 text-sm font-medium tracking-tight text-primario">
              {tarjeta.parrafo1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;

Tarjetas.propTypes = {
  tarjetas: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      numero: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      parrafo1: PropTypes.string.isRequired,
    })
  ).isRequired,
};
