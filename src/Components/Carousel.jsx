import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BotonConsulta from './BotonConsulta';
import PropTypes from 'prop-types';

const Carousel = ({ slides }) => {
  const imagenes = slides.every((slide) => slide.parrafo1);
  const carrosel = useRef();
  const [width, setWidth] = useState(0);

  const animacion = useRef(null);
  const enVentana = useInView(animacion, { once: true });

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        className="mb-8 flex h-[380px] w-full max-w-[360px] cursor-grab overflow-hidden md:max-w-[640px] lg:max-w-[950px]"
        ref={carrosel}
      >
        <motion.div
          ref={animacion}
          drag="x"
          className="mx-3 flex gap-10"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={enVentana ? { x: 0 } : {}}
          transition={{ duration: 3 }}
        >
          {slides.map((elementos, index) => (
            <motion.div
              key={index}
              className={`flex ${imagenes ? 'min-h-[150px]' : 'min-h-[380px]'} min-w-[290px] max-w-[300px] flex-col items-center gap-3 rounded-xl bg-gradient-to-b from-white via-subtitulo to-subtitulo text-white shadow-xl shadow-subtitulo`}
            >
              <img
                src={elementos.imagen}
                alt={elementos.titulo}
                className={`pointer-events-none w-full rounded-t-lg object-cover object-center shadow-inner shadow-black ${imagenes ? 'h-[150px]' : 'h-[340px] object-top'}`}
              />
              {elementos.parrafo1 && (
                <div className="text-justify font-mulish font-normal">
                  <h3 className="mb-2 text-center font-sourceSerif text-xl text-lime-500">
                    {elementos.titulo}
                  </h3>
                  <p className="lg:text-md px-4 text-sm">
                    {elementos.parrafo1}
                  </p>
                  <p className="lg:text-md px-4 text-sm">
                    {elementos.parrafo2}
                  </p>
                </div>
              )}
              {elementos.inicial ? (
                <div className="flex w-full justify-between px-3 pb-3 font-mulish font-semibold">
                  <p>{elementos.inicial}</p>
                  <p className="text-lime-500">{elementos.final}</p>
                </div>
              ) : (
                ''
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <BotonConsulta />
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      titulo: PropTypes.string,
      parrafo1: PropTypes.string,
      parrafo2: PropTypes.string,
    })
  ).isRequired,
};
