import icono from '../assets/logo.png';
import Pilares from '../Components/Pilares';
import BotonWhastApp from '../Components/BotonWhastApp';

const HomeDesktop = () => {
  return (
    <div>
      <div className="hidden h-[calc(100dvh)] w-full grid-cols-[40%_auto] pt-[50px] md:grid">
        <div className="flex h-full w-full items-end justify-end bg-alimentos bg-cover bg-center">
          <p className="m-4 mb-6 w-full text-right font-lora text-lg italic text-primario">
            Alimenta tu cuerpo, honra tu espíritu...
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-between bg-amber-50/5 px-8">
          <div className="flex w-full flex-col pb-4 leading-[1.5] md:px-16">
            <p className="w-full bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600 bg-clip-text pl-4 text-left font-lora text-[6vh] font-medium italic text-transparent">
              <span className="text-[8vh]">N</span>utrición{' '}
              <span className="text-[8vh]">I</span>ntegral
            </p>

            <p className="w-full pr-12 text-right font-lora text-lg italic text-primario">
              estilo de vida saludable
            </p>
          </div>

          <div className="relative flex h-[200px] w-[200px] flex-col rounded-full shadow-[0_0_30px_rgba(0,0,0,0.6)] ring-1 ring-gray-400 hover:shadow-lima">
            <div className="absolute -left-2 top-[20px] w-fit rounded-2xl bg-lima px-3 font-mulish text-[18px] text-white">
              + Resultados
            </div>

            <div className="absolute left-8 top-8 w-fit rounded-2xl px-3 font-mulish text-[18px] text-white">
              <img src={icono} className="h-32 w-32" />
            </div>

            <div className="absolute bottom-[30px] right-1 w-fit rounded-2xl bg-lima px-3 font-mulish text-[18px] text-white">
              + Salud
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex h-full items-end pb-6 pl-3">
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
      </div>
    </div>
  );
};

export default HomeDesktop;
