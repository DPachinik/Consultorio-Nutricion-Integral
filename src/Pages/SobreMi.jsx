import PropTypes from 'prop-types';
import Carousel from '../Components/Carousel';
import { GiCheckMark } from 'react-icons/gi';
import Footer from '../Components/Footer';
import Tarjetas from '../Components/Tarjetas';
import BotonConsulta from '../Components/BotonConsulta';
import { FaWhatsapp } from 'react-icons/fa';
import Flecha from '../assets/flecha.png';
import Nutri from '../assets/NutriJessy.png';
import { SlidesCard1 } from '../Data/SlidesCard1';

const SobreMi = () => {
  SobreMi.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
  };

  return (
    <div className="bg-back/50">
      <div className="flex h-[640px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:bg-encabezadomd lg:h-[620px]">
        <div className="text-md hidden flex-col items-center justify-start gap-3 text-center font-bold md:flex">
          <div className="flex w-full justify-start pt-4">
            <img
              src={Flecha}
              alt="imagen de una flecha"
              className="h-[100px] w-[200px]"
            />
          </div>

          <div className="px-5 py-10 text-center text-primario">
            <p className="font-sourceSerif text-lg font-bold italic tracking-wide md:text-2xl lg:text-3xl">
              CONSTRUYE TU <span className="text-carmesi"> MEJOR VERSIÓN</span>
            </p>
            <p className="mt-4 font-mulish text-sm font-semibold text-primario md:text-lg lg:text-xl">
              Trabajemos juntos para desbloquear tu máximo potencial con planes
              de nutrición personalizados, asesoría experta y cambios de estilo
              de vida adaptados a tus necesidades.
            </p>
          </div>

          <div className="flex w-full rotate-180 pt-4">
            <img
              src={Flecha}
              alt="imagen de una flecha"
              className="h-[100px] w-[200px]"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center font-sourceSerif font-medium text-primario">
          <div className="flex items-start text-left text-[30px]">
            <p className="mx-auto pt-2 text-center md:hidden">
              CONSTRUYE TU <span className="text-carmesi">MEJOR VERSIÓN</span>{' '}
            </p>
            <p className="">
              <span className="text-carmesi"></span>{' '}
            </p>
          </div>
          <img
            src={Nutri}
            alt="Nutricionista Jessica Pachinik"
            className="flex h-[376px] w-[238px] md:mt-6"
          />

          <div className="flex w-full flex-col items-end justify-end pr-3 text-end">
            <p className="text-[25px] text-carmesi">JESSICA PACHINIK</p>
            <p className="pl-14 text-[12px]">NUTRICIONISTA CERTIFICADA (UCI)</p>
            <p className="pl-14 text-[12px]">ANTROPOMETRISTA ISAK I</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[8px] top-[560px] flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-lime-500">
        <FaWhatsapp
          className="text-[42px] text-white transition ease-in-out hover:rotate-6 hover:scale-110"
          aria-label="boton de WhastApp "
        />
      </div>

      <div className="my-12 flex px-3">
        <p className="text-center font-mulish text-lg font-semibold leading-[2] text-primario md:text-xl">
          “Apasionada por promover un estilo de vida saludable, me dedico a
          encontrar soluciones personalizadas para cada paciente, ayudándolos a
          alcanzar una mejor calidad de vida y fortalecer su autoestima.”
        </p>
      </div>

      <BotonConsulta />

      <div>
        <h2 className="mb-8 mt-12 flex justify-center font-sourceSerif text-3xl font-medium text-carmesi">
          ¿ SOY ?
        </h2>
      </div>

      <Tarjetas />

      <div className="flex items-end justify-center">
        <h2 className="mt-10 flex font-sourceSerif text-3xl font-medium text-carmesi">
          ¿CÓMO PUEDO AYUDARTE?
        </h2>
      </div>

      <Carousel slides={SlidesCard1} />

      <div className="flex items-end justify-center">
        <h2 className="mt-12 flex font-sourceSerif text-3xl font-medium text-carmesi">
          ¿ME COMPROMETO A?
        </h2>
      </div>

      <div className="mb-12 mt-4 flex w-full flex-col gap-5 bg-cover font-mulish text-sm">
        {[
          'Guiarte hacia una alimentación equilibrada y saludable.',
          'Brindarte un plan nutricional personalizado.',
          'Acompañarte en cada paso para que alcances tus objetivos de salud.',
          'Orientarte en base a mi formación y experiencia profesional de +10 años.',
          'Fomentar hábitos sostenibles que mejoren tu calidad de vida.',
          'Escucharte y entender tus metas para proporcionarte el mejor apoyo.',
          'Establecer una relación con la comida de manera consciente y positiva.',
        ].map((text, index) => (
          <div
            key={index}
            className={`lg:text-md mt-3 flex h-[50px] flex-row items-center gap-2 bg-white p-4 ${index % 2 === 0 ? 'mr-7 items-end justify-end rounded-r-full border-l-0 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-800 text-end text-white shadow-md shadow-slate-500 lg:mr-[300px]' : 'ml-7 rounded-l-full border-r-0 bg-gradient-to-r from-lime-200 via-lime-500 to-fondo text-primario shadow-md shadow-fondo lg:ml-[300px]'} `}
          >
            <GiCheckMark
              className={`shrink-0 rounded-full text-[22px] text-lime-400 ${index % 2 === 0 ? 'order-2' : 'order-1 text-slate-700'}`}
            />
            <p
              className={`leading-normal ${index % 2 === 0 ? 'order-1' : 'order-2'} `}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SobreMi;
