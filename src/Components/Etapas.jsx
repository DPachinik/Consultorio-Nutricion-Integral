import PropTypes from 'prop-types';
import { GiCheckMark } from 'react-icons/gi';

const Etapas = ({ etapas }) => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-4 px-3 md:flex-row">
      {etapas.map((etapa, index) => (
        <div
          key={index}
          className="relative mb-4 flex h-auto w-full flex-col rounded-xl border-[1px] border-lima bg-gradient-to-b from-white via-lime-50 to-lime-200 shadow-md shadow-primario"
        >
          <div className="flex h-full w-auto flex-col justify-start rounded-xl px-4 py-4 font-mulish text-sm text-primario">
            <div className="text-md flex h-[30px] w-full items-center justify-center gap-12 px-3 py-4 text-center font-lora font-medium text-rose-800">
              <div className="absolute -top-6 left-2 flex-shrink-0 rounded-full bg-white px-3 py-2 text-2xl text-lima shadow-md shadow-primario">
                {etapa.orden}
              </div>
              {etapa.titulo}
            </div>

            <p className="font-medium">{etapa.parrafo1}</p>
            {etapa.parrafo2 && <p className="font-medium">{etapa.parrafo2}</p>}
            {etapa.lista && (
              <ul>
                {etapa.lista.map((item, i) => (
                  <li
                    key={i}
                    className="ml-2 flex items-center gap-2 font-semibold"
                  >
                    {
                      <GiCheckMark className="flex h-4 w-4 flex-shrink-0 text-lima" />
                    }
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
