import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Etapas = ({ etapas }) => {
  return (
    <div className="relative flex flex-col items-center gap-4 px-3 lg:bg-columna lg:bg-contain lg:bg-center lg:bg-no-repeat lg:px-12">
      {etapas.map((etapa, index) => (
        <div
          key={index}
          className={`mb-4 flex w-full flex-col ${index === 0 ? 'md:items-end' : ''} ${index === 1 ? 'md:items-start' : ''} ${index === 2 ? 'md:items-end' : ''} `}
        >
          <details className="flex min-w-[300px] flex-col justify-center rounded-lg border-[1px] border-lime-500 bg-gradient-to-r from-lime-200 via-lime-100 to-lime-50 px-3 py-4 font-mulish text-primario md:w-[400px] lg:w-[450px]">
            <summary className="flex h-[30px] w-full cursor-pointer items-center justify-between gap-12 px-3 font-sourceSerif text-lg font-semibold text-subtitulo md:text-xl">
              {etapa.titulo}
            </summary>
            <p className="font-semibold">{etapa.parrafo1}</p>
            {etapa.parrafo2 && (
              <p className="font-semibold">{etapa.parrafo2}</p>
            )}
            {etapa.lista && (
              <ul>
                {etapa.lista.map((item, i) => (
                  <li
                    key={i}
                    className="ml-2 flex items-center gap-2 font-semibold"
                  >
                    {<FaCheck className="flex h-4 w-4 flex-shrink-0" />}
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </details>
        </div>
      ))}
    </div>
  );
};

export default Etapas;

Etapas.propTypes = {
  etapas: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string,
      parrafo1: PropTypes.string,
      parrafo2: PropTypes.string,
      lista: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
