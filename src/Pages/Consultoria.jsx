import Etapas from '../Components/Etapas';
import Carousel from '../Components/Carousel';
import { SlidesCard2 } from '../Data/SlidesCard2';
import TarjetaServicios from '../Components/TarjetaServicios';
import Footer from '../Components/Footer';
import BotonConsulta from '../Components/BotonConsulta';
import { etapasDeConsulta } from '../Data/EtapasConsulta';
import { serviciosDeTratamientos } from '../Data/DatosTratamientos';
import Counter from '../Components/Counter';

const Consultoria = () => {
  return (
    <div className="overflow-x-hidden bg-amber-50/10">
      <div className="mb-8 flex h-[750px] w-full grid-cols-2 flex-col bg-encabezado bg-cover bg-bottom bg-no-repeat pt-[50px] md:grid md:h-[640px] md:bg-encabezadomd">
        <h2 className="mx-auto my-6 justify-center text-center font-lora text-2xl font-medium text-rose-800 md:col-span-2">
          ¿Consultas Online?
        </h2>

        <div
          className="mx-auto flex h-[320px] w-[320px] bg-conectividad bg-cover bg-top md:h-[400px] md:w-[400px]"
          data-aos="fade-down-right"
        />

        <div
          className="flex flex-col md:items-center md:gap-6 lg:mx-8 lg:gap-10"
          data-aos="fade-down-left"
        >
          <p className="mx-3 pb-2 text-center font-lora text-lg font-medium italic text-rose-800 md:text-xl">
            ¡Si, Consultas
            <span className="text-2xl font-bold"> 100% ONLINE</span> Desde
            Cualquier Lugar!
          </p>
          <p className="lg:text-md mx-4 mb-6 text-center font-mulish font-medium italic text-primario">
            Mi trabajo trasciende fronteras y, sin necesidad de salir de casa,
            recibirás un acompañamiento cercano e individualizado en cada etapa
            del proceso. Disfruta de la flexibilidad y comodidad de una atención
            personalizada, con la misma calidad y dedicación que en una consulta
            presencial, sin importar tu ubicación.
          </p>
        </div>
      </div>
      <BotonConsulta />

      <h2 className="my-12 flex justify-center text-center font-lora text-2xl font-medium text-rose-800">
        ¿Cómo Funciona la Consulta?
      </h2>
      <Etapas etapas={etapasDeConsulta} />

      <Counter />

      <h2 className="my-12 flex justify-center text-center font-lora text-2xl font-medium text-rose-800">
        ¿Mis Pacientes? estos son algunos de ellos...
      </h2>
      <Carousel slides={SlidesCard2} />

      <h2 className="my-12 flex justify-center text-center font-lora text-2xl font-medium text-rose-800">
        ¿Por qué Optar por un Seguimiento Nutricional?
      </h2>
      <TarjetaServicios tratamientos={serviciosDeTratamientos} />
      <Footer />
    </div>
  );
};

export default Consultoria;
