import imagen1 from '../assets/genetic.jpeg';
import imagen2 from '../assets/actividad.jpg';
import imagen3 from '../assets/objetivo.jpg';
import imagen4 from '../assets/evaluacion.jpg';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BotonConsulta from './BotonConsulta';

const Carousel = () => {
  const carrosel = useRef();
  const [width, setWidth] = useState(0);

  const animacion = useRef(null);
  const enVentana = useInView(animacion, { once: true });

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  const slide = [
    {
      imagen: imagen1,
      titulo: 'INDIVIDUALIDAD',
      parrafo1:
        'Mi enfoque es 100% individualizado, tengo en cuenta no sólo la composición corporal actual, sino también la historia, el entorno y las posibilidades.',
    },
    {
      imagen: imagen2,
      titulo: 'ACTIVIDAD',
      parrafo1:
        'Atiendo cada perfil de paciente, actividades físicas y modalidad deportiva.',
      parrafo2:
        'Trabajo de manera integral con cada paciente, considerando su nivel de actividad, estado de salud y necesidades energéticas.',
    },
    {
      imagen: imagen3,
      titulo: 'OBJETIVOS',
      parrafo1:
        'Ayudo a quienes buscan un mejor rendimiento, cambios en la composición corporal, ya sea pérdida de peso, definición, hipertrofia o una mejor performance deportiva.',
    },
    {
      imagen: imagen4,
      titulo: 'SEGUIMIENTO',
      parrafo1:
        'Una vez que alcanzamos tu meta, el acompañamiento sigue siendo fundamental. Te ayudo a mantener tus logros, ajustar hábitos y seguir evolucionando, asegurando que tu bienestar sea duradero.',
    },
  ];

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center gap-8 p-8">
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        className="flex h-[350px] w-[440px] cursor-grab overflow-hidden md:w-[640px] lg:w-[950px]"
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
          {slide.map((elementos) => (
            <motion.div
              key={elementos.titulo}
              className="flex h-[350px] w-[300px] flex-col items-center gap-3 rounded-lg bg-gradient-to-t from-slate-500 via-slate-700 to-slate-400 text-justify text-white lg:w-[420px]"
            >
              <img
                src={elementos.imagen}
                alt={elementos.titulo}
                className="h-[150px] w-full rounded-t-lg object-cover shadow-inner shadow-black"
              />
              <div className="text-justify">
                <h3 className="pl-4 font-sourceSerif text-xl font-semibold text-lime-500">
                  {elementos.titulo}
                </h3>
                <p className="px-4 text-sm lg:text-lg">{elementos.parrafo1}</p>
                <p className="px-4 text-sm lg:text-lg">{elementos.parrafo2}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <BotonConsulta />
    </div>
  );
};

export default Carousel;
