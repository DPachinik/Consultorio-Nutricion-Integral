import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BotonConsulta from './BotonConsulta';
import PropTypes from 'prop-types';

const Carousel = ({ slides }) => {
  Carousel.propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        parrafo1: PropTypes.string.isRequired,
        parrafo2: PropTypes.string,
      })
    ).isRequired,
  };
  const imagenes = slides.every((slide) => slide.parrafo1);
  const carrosel = useRef();
  const [width, setWidth] = useState(0);

  const animacion = useRef(null);
  const enVentana = useInView(animacion, { once: true });

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-8">
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        className="flex h-[380px] w-[440px] cursor-grab overflow-hidden md:w-[640px] lg:w-[950px]"
        ref={carrosel}
      >
        <motion.div
          ref={animacion}
          drag="x"
          className="mx-4 flex gap-6"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={enVentana ? { x: 0 } : {}}
          transition={{ duration: 3 }}
        >
          {slides.map((elementos, index) => (
            <motion.div
              key={index}
              className={`flex ${imagenes ? 'h-[350px]' : 'h-[380px]'} w-[300px] flex-col items-center gap-3 rounded-xl bg-gradient-to-t from-slate-500 via-slate-700 to-slate-400 text-justify text-white lg:w-[420px]`}
            >
              <img
                src={elementos.imagen}
                alt={elementos.titulo}
                className={`pointer-events-none w-full rounded-t-lg object-cover shadow-inner shadow-black ${imagenes ? 'h-[150px]' : 'h-full rounded-lg object-fill object-bottom'}`}
              />
              {elementos.parrafo1 && (
                <div className="text-justify">
                  <h3 className="pl-4 font-sourceSerif text-xl font-semibold text-lime-500">
                    {elementos.titulo}
                  </h3>
                  <p className="px-4 text-sm lg:text-lg">
                    {elementos.parrafo1}
                  </p>
                  <p className="px-4 text-sm lg:text-lg">
                    {elementos.parrafo2}
                  </p>
                </div>
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
