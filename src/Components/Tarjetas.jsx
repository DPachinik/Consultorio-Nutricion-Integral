import PropTypes from 'prop-types';

const Tarjetas = ({ tarjetas }) => {
  const classMap = {
    0: '',
    1: 'md:ml-auto',
    2: '',
    3: 'md:ml-auto',
  };

  return (
    <div className="container mx-auto flex flex-col space-y-14">
      {tarjetas.map((tarjeta, index) => (
        <div
          key={index}
          className={`relative mx-4 flex h-auto w-fit flex-row rounded-2xl border-[1px] border-lima bg-gradient-to-t from-lime-200 via-lime-50 to-white p-4 font-mulish text-sm shadow-md shadow-primario md:mx-10 md:max-w-[80%] lg:max-w-[50%] ${classMap[index] || ''} `}
          data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
        >
          <div
            className={`absolute -top-8 left-2 flex h-20 w-20 rounded-full bg-cover bg-center bg-no-repeat shadow-md shadow-primario`}
            style={{ backgroundImage: `url(${tarjeta.imagen})` }}
          ></div>

          <div className="flex h-full w-full flex-col space-y-6 py-2 pl-8 md:space-y-10">
            <h3 className="w-full pr-2 text-right font-lora text-lg font-medium text-rose-800 md:pr-6">
              {tarjeta.titulo}
            </h3>
            <p className="text-md pt-2 font-mulish font-medium tracking-tight text-primario">
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
