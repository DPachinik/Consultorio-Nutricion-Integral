import PropTypes from 'prop-types';
import { GiCheckMark } from 'react-icons/gi';

const Compromiso = ({ propsCompromiso }) => {
  return (
    <div className="mb-12 flex w-full flex-col gap-5 bg-cover font-mulish">
      {propsCompromiso.map((frase, index) => (
        <div
          key={index}
          className={`lg:text-md mt-3 flex h-[50px] flex-row items-center gap-2 bg-white p-4 ${index % 2 === 0 ? 'mr-7 items-end justify-end rounded-r-full border-l-0 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-800 text-end text-white shadow-md shadow-slate-500 lg:mr-[300px]' : 'ml-7 rounded-l-full border-r-0 bg-gradient-to-r from-lime-200 via-lime-500 to-fondo text-primario shadow-md shadow-fondo lg:ml-[300px]'} `}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
        >
          <GiCheckMark
            className={`shrink-0 rounded-full text-[22px] text-lime-400 ${index % 2 === 0 ? 'order-2' : 'order-1 text-slate-700'}`}
          />
          <p
            className={`px-1 text-xs md:text-sm ${index % 2 === 0 ? 'order-1' : 'order-2'} `}
          >
            {frase.texto}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Compromiso;

Compromiso.propTypes = {
  propsCompromiso: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
    })
  ).isRequired,
};
