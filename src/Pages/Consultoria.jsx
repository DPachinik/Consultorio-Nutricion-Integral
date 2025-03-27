import Etapas from '../Components/Etapas';
import Carousel from '../Components/Carousel';
import { SlidesCard2 } from '../Data/SlidesCard2';
import TarjetaServicios from '../Components/TarjetaServicios';
import Footer from '../Components/Footer';
import BotonConsulta from '../Components/BotonConsulta';

const Consultoria = () => {
  return (
    <div className="bg-back">
      <div className="flex h-[780px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:h-[640px] md:bg-encabezadomd">
        <h2 className="mx-auto my-4 justify-center font-sourceSerif text-2xl font-medium text-carmesi md:col-span-2 lg:text-3xl">
          ¿ CONSULTAS ONLINE ?
        </h2>

        <div className="mx-auto flex h-[320px] w-[320px] bg-conectividad bg-cover bg-top md:h-[400px] md:w-[400px]" />

        <div className="flex flex-col md:items-center md:gap-6 lg:mx-8 lg:gap-10">
          <p className="mx-3 text-center font-sourceSerif text-xl font-bold text-subtitulo md:text-2xl lg:text-2xl">
            SI, CONSULTAS{' '}
            <span className="text-3xl font-bold">100% ONLINE</span> DESDE
            CUALQUIER LUGAR.
          </p>
          <p className="lg:text-md mx-4 mb-6 text-justify font-mulish font-semibold text-primario md:text-lg">
            Mi trabajo trasciende fronteras y, sin necesidad de salir de casa,
            recibirás un acompañamiento cercano e individualizado en cada etapa
            del proceso. Disfruta de la flexibilidad y comodidad de una atención
            personalizada, con la misma calidad y dedicación que en una consulta
            presencial, sin importar tu ubicación.
          </p>
          <BotonConsulta />
        </div>
      </div>

      <h2 className="my-8 flex justify-center font-sourceSerif text-2xl font-medium text-carmesi lg:my-12 lg:text-3xl">
        ¿ CÓMO FUNCIONA LA CONSULTA ?
      </h2>
      <Etapas />

      <h2 className="mt-8 flex justify-center text-center font-sourceSerif text-2xl font-medium text-carmesi lg:text-3xl">
        ESTOS SON ALGUNOS DE MIS PACIENTES
      </h2>
      <Carousel slides={SlidesCard2} />

      <h2 className="my-12 flex justify-center text-center font-sourceSerif text-2xl font-medium text-carmesi lg:text-3xl">
        ¿POR QUÉ OPTAR POR UN SEGUIMIENTO NUTRICIONAL?
      </h2>
      <TarjetaServicios />
      <Footer />
    </div>
  );
};

export default Consultoria;
