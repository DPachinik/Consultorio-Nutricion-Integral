import Etapas from '../Components/Etapas';
import Carousel from '../Components/Carousel';
import { SlidesCard2 } from '../Data/SlidesCard2';
import TarjetaServicios from '../Components/TarjetaServicios';
import Footer from '../Components/Footer';

const Consultoria = () => {
  return (
    <div>
      <h2 className="my-12 flex justify-center font-sourceSerif text-2xl font-medium text-carmesi">
        ¿ CONSULTAS ONLINE ?
      </h2>

      <div>
        <div className="flex h-[400px] w-[440px] bg-conectividad bg-cover bg-top" />
        <div>
          <p>SI! CONSULTAS 100% ONLINE DESDE CUALQUIER LUGAR.</p>
          <p>
            {' '}
            Mi trabajo trasciende fronteras y, sin necesidad de salir de casa,
            recibirás un acompañamiento cercano e individualizado en cada etapa
            del proceso. Disfruta de la flexibilidad y comodidad de una atención
            personalizada, con la misma calidad y dedicación que en una consulta
            presencial, sin importar tu ubicación.
          </p>
        </div>
      </div>

      <h2 className="my-12 flex justify-center font-sourceSerif text-2xl font-medium text-carmesi">
        ¿ CÓMO FUNCIONA LA CONSULTA ?
      </h2>

      <Etapas />

      <h2 className="mt-8 flex justify-center font-sourceSerif text-2xl font-medium text-carmesi">
        CONOCE ALGUNOS DE MIS PACIENTES
      </h2>
      <Carousel slides={SlidesCard2} />

      <h2 className="my-12 flex justify-center font-sourceSerif text-2xl font-medium text-carmesi">
        ¿POR QUÉ OPTAR POR UN SEGUIMIENTO NUTRICIONAL?
      </h2>
      <TarjetaServicios />
      <Footer />
    </div>
  );
};

export default Consultoria;
