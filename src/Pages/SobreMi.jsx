import PropTypes from 'prop-types';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Tarjetas from '../Components/Tarjetas';
import BotonConsulta from '../Components/BotonConsulta';
import Flecha from '../assets/flecha.png';
import Flecha2 from '../assets/flecha2.png';
import Nutri from '../assets/NutriJessy.png';
import { SlidesCard1 } from '../Data/SlidesCard1';
import BotonWhastApp from '../Components/BotonWhastApp';
import { DatosTarjeta } from '../Data/DatosTarjeta';
import Compromiso from '../Components/Compromiso';
import { DatosCompromiso } from '../Data/DatosCompromiso';

const SobreMi = () => {
  SobreMi.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
  };

  return (
    <div className="bg-amber-50/ relative overflow-x-hidden">
      <div className="flex min-h-[690px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:min-h-[600px] md:bg-encabezadomd">
        <div className="text-md hidden flex-col items-center justify-start gap-3 text-center font-bold md:flex lg:ml-16">
          <div
            className="flex w-full justify-start pt-4"
            data-aos="fade-down-right"
          >
            <img
              src={Flecha}
              alt="imagen de una flecha"
              className="h-[80px] w-[200px]"
            />
          </div>

          <div className="px-5 py-5 text-center text-primario">
            <p className="font-lora text-lg font-medium italic tracking-wide md:text-2xl">
              CONSTRUYE TU <span className="text-rose-800"> MEJOR VERSIÓN</span>
            </p>
            <p className="lg:text-md animate-pop mt-4 font-mulish text-sm font-medium italic text-primario md:text-lg">
              Trabajemos juntos para desbloquear tu máximo potencial con planes
              de nutrición personalizados, asesoría experta y cambios de estilo
              de vida adaptados a tus necesidades.
            </p>
          </div>

          <div className="flex pl-20" data-aos="fade-down-left">
            <img
              src={Flecha2}
              alt="imagen de una flecha"
              className="h-[100px] w-[200px]"
            />
          </div>
        </div>

        <div
          className="font-lg flex w-full flex-col items-center font-lora text-primario"
          data-aos="fade-up"
        >
          <div className="flex px-3 pb-4 text-left text-2xl">
            <p className="mx-auto pt-8 text-center md:hidden">
              CONSTRUYE TU{' '}
              <span className="text text-rose-800">MEJOR VERSIÓN</span>{' '}
            </p>
          </div>

          <img
            src={Nutri}
            alt="Nutricionista Jessica Pachinik"
            className="flex h-[365px] w-[230px] lg:ml-12"
          />

          <div className="flex w-full flex-col items-end justify-end pr-3 text-end lg:mr-12">
            <p className="text-lg text-rose-800">JESSICA PACHINIK</p>
            <p className="text-md pl-14">Nutricionista Certificada (UCI)</p>
            <p className="text-md pl-14">Antropometrista ISAK I</p>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-[650px] flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-lime-500 md:top-[500px]">
        <BotonWhastApp />
      </div>

      <div className="container mx-auto my-12 flex px-2">
        <p className="text-center font-mulish text-lg leading-[2] text-black/80 md:text-lg">
          “Apasionada por promover un estilo de vida saludable, me dedico a
          encontrar soluciones personalizadas para cada paciente, ayudándolos a
          alcanzar una mejor calidad de vida y fortalecer su autoestima.”
        </p>
      </div>

      <BotonConsulta />

      <div>
        <h2 className="mb-8 mt-20 flex justify-center font-lora text-2xl font-medium text-rose-800">
          ¿Quién Soy?
        </h2>
      </div>

      <Tarjetas tarjetas={DatosTarjeta} />

      <div className="flex items-end justify-center">
        <h2 className="mb-8 mt-20 flex text-center font-sourceSerif text-2xl font-medium text-rose-800">
          ¿Cómo Puedo Ayudarte?
        </h2>
      </div>

      <Carousel slides={SlidesCard1} />

      <div className="flex items-end justify-center">
        <h2 className="mb-8 mt-20 flex font-sourceSerif text-2xl font-medium text-rose-800">
          ¿Me Comprometo a?
        </h2>
      </div>
      <Compromiso propsCompromiso={DatosCompromiso} />

      <Footer />
    </div>
  );
};

export default SobreMi;
