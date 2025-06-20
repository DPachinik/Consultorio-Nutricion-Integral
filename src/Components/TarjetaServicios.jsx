import { useState } from 'react';
import PropTypes from 'prop-types';

const TarjetaServicios = ({ tratamientos }) => {
  const [description, setDescription] = useState(
    new Array(tratamientos.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newDescription = [...description];
    newDescription[index] = true;
    setDescription(newDescription);
  };
  const handleMouseLeave = (index) => {
    const newDescription = [...description];
    newDescription[index] = false;
    setDescription(newDescription);
  };

  return (
    <div className="mb-12 flex flex-col items-center gap-4 md:mx-4 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3 lg:gap-8">
      {tratamientos.map((servicio, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`relative flex h-[150px] w-[350px] items-center justify-center rounded-lg bg-cover bg-center shadow-md shadow-primario transition-all duration-1000 hover:cursor-pointer lg:h-[200px] lg:w-[320px] ${description[index] ? 'h-[300px] lg:h-[250px] lg:w-[400px]' : ''}`}
          style={{ backgroundImage: `url(${servicio.imagen})` }}
        >
          <div
            className={`absolute inset-0 left-0 top-0 rounded-lg bg-black/50 ${description[index] ? 'bg-black' : ''} `}
          />

          <div className="relative z-10 text-center">
            {description[index] ? (
              <div className="mx-4 border-[1px] border-white bg-white/20 p-2">
                <p className="font-sourceSerif text-lg font-normal text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
                  {servicio.titulo}
                </p>
                <p className="mx-3 text-justify font-mulish text-sm font-normal text-white">
                  {servicio.texto}
                </p>
              </div>
            ) : (
              <p className="font-sourceSerif text-lg font-normal text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
                {servicio.titulo}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaServicios;

TarjetaServicios.propTypes = {
  tratamientos: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string,
      titulo: PropTypes.string,
      alt: PropTypes.string,
      texto: PropTypes.string,
    })
  ).isRequired,
};
