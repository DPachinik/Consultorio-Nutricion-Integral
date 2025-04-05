import PropTypes from 'prop-types';
import Circular from '../assets/logo-Desk.png';
import Pilares from '../Components/Pilares';
import BotonWhastApp from '../Components/BotonWhastApp';

const Inicio = () => {
  return (
    <section className="relative flex h-full w-full flex-col bg-back/50 pt-[50px] md:flex-row md:overflow-hidden md:pt-0">
      <div className="flex flex-col md:hidden">
        <div className="h-[150px] w-full place-items-center pt-6 font-sourceSerif font-semibold italic leading-[0.5]">
          <p className="w-full pl-4 text-left text-3xl text-carmesi">
            NUTRICIÓN INTEGRAL
          </p>
          <p className="w-full pb-4 pr-4 text-right text-lg text-lima">
            ¡NUTRICIÓN QUE DA RESULTADOS!
          </p>
        </div>

        <div className="relative flex h-[450px] w-full flex-col items-center bg-alimentos bg-cover bg-center backdrop-blur-lg">
          <div className="absolute inset-0 bg-white bg-opacity-[1px] backdrop-blur-sm"></div>

          <div className="absolute top-[30px] mx-auto flex w-[90%] items-center justify-between gap-2 px-3 font-mulish">
            <p className="flex text-[18px]">Objetvos</p>
            <div className="w-full border-b border-black"></div>
            <p className="flex text-[18px]">Salud</p>
          </div>

          <div className="absolute flex h-full w-full items-center justify-center">
            <img
              className="flex h-[250px] w-[90%] max-w-[450px]"
              src={Circular}
              alt="logotipo del consultorio"
            />
          </div>
        </div>

        <div className="grid grid-cols-[100px_auto]">
          <div className="flex items-end pb-4 pl-3">
            <BotonWhastApp />
          </div>
          <div className="flex flex-col items-end justify-end pr-3 pt-3">
            <p className="font-sourceSerif text-xl font-medium italic text-carmesi">
              Mis 4 pilares de la nutrición
            </p>
            <Pilares />
          </div>
        </div>
      </div>

      <div className="hidden h-full w-full grid-cols-2 pt-[50px] md:grid">
        <div className="flex w-full flex-col items-center justify-between">
          <div className="flex w-full flex-col gap-3 pt-8 font-sourceSerif italic">
            <p className="flex justify-start pl-8 text-2xl font-bold text-carmesi lg:text-4xl">
              NUTRICIÓN INTEGRAL
            </p>
            <p className="flex justify-center text-lg text-lima lg:text-xl">
              ¡NUTRICIÓN QUE DA RESULTADOS!
            </p>
          </div>

          <div className="col-span-2 col-start-1 mx-auto flex">
            <img
              src={Circular}
              alt="logo del consultorio"
              className="h-[250px] w-[380px] object-cover hover:scale-110 hover:duration-300"
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex h-full items-end pb-2 pl-3">
              <BotonWhastApp />
            </div>
            <div className="flex w-full flex-col items-end justify-end pr-3">
              <p className="flex font-sourceSerif text-xl font-medium italic text-carmesi">
                Mis 4 pilares de la nutrición
              </p>
              <Pilares />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full items-end justify-end bg-alimentos bg-cover bg-center">
          <p className="m-4 mb-6 flex font-sourceSerif text-lg font-medium italic text-primario">
            ¡Alimenta tu cuerpo, honra tu espíritu!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;

Inicio.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};
