import PropTypes from 'prop-types';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Tarjetas from '../Components/Tarjetas';
import BotonConsulta from '../Components/BotonConsulta';
import Flecha from '../assets/flecha.png';
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
    <div className="bg-back/50">
      <div className="flex min-h-[690px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:bg-encabezadomd lg:h-[630px]">
        <div className="text-md hidden flex-col items-center justify-start gap-3 text-center font-bold md:flex">
          <div className="flex w-full justify-start pt-4">
            <img
              src={Flecha}
              alt="imagen de una flecha"
              className="h-[100px] w-[200px]"
            />
          </div>

          <div className="px-5 py-10 text-center text-subtitulo">
            <p className="font-sourceSerif text-lg font-bold italic tracking-wide md:text-2xl lg:text-3xl">
              CONSTRUYE TU <span className="text-carmesi"> MEJOR VERSIÓN</span>
            </p>
            <p className="mt-4 font-mulish text-sm font-semibold italic text-primario md:text-lg lg:text-xl">
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
            <p className="text-xl text-carmesi">JESSICA PACHINIK</p>
            <p className="pl-14 text-lg">NUTRICIONISTA CERTIFICADA (UCI)</p>
            <p className="pl-14 text-lg">ANTROPOMETRISTA ISAK I</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[8px] top-[580px] flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-lime-500">
        <BotonWhastApp />
      </div>

      <div className="my-12 flex px-4">
        <p className="text-center font-sourceSerif text-lg font-medium leading-[2] text-primario md:text-2xl">
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

      <Tarjetas tarjetas={DatosTarjeta} />

      <div className="flex items-end justify-center">
        <h2 className="mt-10 flex text-center font-sourceSerif text-3xl font-medium text-carmesi">
          ¿CÓMO PUEDO AYUDARTE?
        </h2>
      </div>

      <Carousel slides={SlidesCard1} />

      <div className="flex items-end justify-center">
        <h2 className="mt-12 flex font-sourceSerif text-3xl font-medium text-carmesi">
          ¿ME COMPROMETO A?
        </h2>
      </div>
      <Compromiso propsCompromiso={DatosCompromiso} />

      <Footer />
    </div>
  );
};

export default SobreMi;
