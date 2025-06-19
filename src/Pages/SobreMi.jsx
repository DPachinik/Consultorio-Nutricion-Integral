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
    <div className="relative bg-amber-50/10">
      <div className="flex min-h-[690px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:min-h-[600px] md:bg-encabezadomd">
        <div className="text-md hidden flex-col items-center justify-start gap-3 text-center font-bold md:flex">
          <div className="flex w-full justify-start pt-4">
            <img
              src={Flecha}
              alt="imagen de una flecha"
              className="h-[80px] w-[200px]"
            />
          </div>

          <div className="px-5 py-10 text-center text-primario">
            <p className="font-lora text-lg font-medium italic tracking-wide md:text-2xl">
              CONSTRUYE TU <span className="text-rose-800"> MEJOR VERSIÓN</span>
            </p>
            <p className="lg:text-md mt-4 font-mulish text-sm font-medium italic text-primario md:text-lg">
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

        <div className="font-lg flex w-full flex-col items-center font-lora text-primario">
          <div className="flex items-start text-left text-[30px]">
            <p className="mx-auto pt-2 text-center md:hidden">
              CONSTRUYE TU <span className="text-rose-800">MEJOR VERSIÓN</span>{' '}
            </p>
          </div>
          <img
            src={Nutri}
            alt="Nutricionista Jessica Pachinik"
            className="flex h-[365px] w-[230px] md:mt-4"
          />

          <div className="flex w-full flex-col items-end justify-end pr-3 text-end lg:pr-6">
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
        <h2 className="my-12 flex justify-center font-lora text-2xl font-medium text-rose-800">
          ¿Quién Soy?
        </h2>
      </div>

      <Tarjetas tarjetas={DatosTarjeta} />

      <div className="flex items-end justify-center">
        <h2 className="my-12 flex text-center font-sourceSerif text-2xl font-medium text-rose-800">
          ¿Cómo Puedo Ayudarte?
        </h2>
      </div>

      <Carousel slides={SlidesCard1} />

      <div className="flex items-end justify-center">
        <h2 className="my-12 flex font-sourceSerif text-2xl font-medium text-rose-800">
          ¿Me Comprometo A?
        </h2>
      </div>
      <Compromiso propsCompromiso={DatosCompromiso} />

      <Footer />
    </div>
  );
};

export default SobreMi;
