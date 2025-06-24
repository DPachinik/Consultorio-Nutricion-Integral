import Pilares from '../Components/Pilares';
import Logo from '../assets/logo.png';
import BotonWhastApp from '../Components/BotonWhastApp';

const HomeMobile = () => {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-evenly px-2 md:hidden">
      <div
        className="w-full place-items-center gap-4 pt-6 leading-[1.5]"
        data-aos="fade-right"
      >
        <img src={Logo} alt="logotipo manzana" className="h-28 w-28" />
        <p className="w-full bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600 bg-clip-text pl-4 text-left font-lora text-[4vh] font-semibold italic text-transparent">
          <span className="text-[5vh]">N</span>utrición{' '}
          <span className="text-[5vh]">I</span>ntegral
        </p>

        <p className="w-full pb-4 pr-4 text-right font-lora text-lg italic text-primario">
          Estilo de vida saludable
        </p>
      </div>

      <div
        className="relative flex h-[200px] min-h-[150px] w-[200px] min-w-[150px] flex-col rounded-full bg-alimentos bg-cover bg-center shadow-[0_0_20px_rgba(0,0,0,0.6)] ring-1 ring-gray-400 hover:shadow-lima"
        data-aos="fade-left"
      >
        <div className="absolute -left-4 top-[30px] w-fit rounded-2xl bg-lima px-3 font-mulish text-[18px] text-white">
          + Resultados
        </div>

        <div className="absolute bottom-[30px] right-0 w-fit rounded-2xl bg-lima px-3 font-mulish text-[18px] text-white">
          + Salud
        </div>
      </div>

      <div className="relative grid w-full grid-cols-[100px_auto] pb-4">
        <div className="flex items-end pb-4 pl-3">
          <BotonWhastApp />
        </div>

        <div className="flex w-full flex-col items-end justify-end pr-3 pt-3">
          <p className="font-lora text-xl font-medium italic text-rose-800">
            Mis 4 pilares de la nutrición
          </p>
          <Pilares />
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;
