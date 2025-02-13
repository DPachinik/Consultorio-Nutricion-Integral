import PropTypes from 'prop-types';
import { FiSliders, FiUserCheck } from 'react-icons/fi';
import { SlEnergy } from 'react-icons/sl';
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import Circular from '../assets/logo-circular.png';
import Desktop from '../assets/logo-Desk.png';
import Line from '../assets/Line.png';
import Linea from '../assets/Line-Desktop.png';

const Inicio = ({ menuOpen }) => {
  Inicio.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
  };

  return (
    <section className="flex flex-col md:relative md:h-[calc(100vh-50px)] md:flex-row">
      <div className="flex h-[150px] w-full flex-col justify-center font-lora text-[24px] font-medium italic md:hidden">
        <p className="flex justify-start pl-4 pt-4 text-[24px] text-carmesi">
          Nutrición Integral
        </p>
        <p className="flex justify-center text-[36px]">=</p>
        <p className="flex justify-end pb-4 pr-4 text-[24px] text-lima">
          ¡Nutrición que da Resultados!
        </p>
      </div>

      <div className="relative flex h-[450px] w-full flex-col items-center bg-alimentos bg-cover bg-center bg-no-repeat backdrop-blur-lg md:hidden">
        <div className="absolute inset-0 bg-white bg-opacity-[1px] backdrop-blur-sm md:hidden"></div>

        <div className="absolute top-[38px] flex w-full items-center justify-center gap-4 px-4 font-mulish">
          <p className="flex pl-3 text-[18px]">Objetvos</p>
          <img src={Line} alt="Linea" className="flex h-[1px] w-[246px]" />
          <p className="flex pr-3 text-[18px]">Salud</p>
        </div>

        <div className="relative flex h-full w-full items-center justify-center">
          <img
            className="flex h-[320px] w-[320px]"
            src={Circular}
            alt="logotipo del consultorio"
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-end gap-6 pb-1 pr-3 pt-3 font-lora font-normal italic md:hidden">
        <p className="text-[20px] font-normal italic text-carmesi">
          Mis 4 pilares de la nutrición
        </p>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between gap-3">
            <p className="text-3">
              <em className="text-[10px]">(01)</em> Dieta personalizada
            </p>
            <FiSliders />
          </div>
          <img
            src={Line}
            alt="Linea"
            className="flex h-[0.5px] w-[198px] items-end"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between gap-3">
            <p className="text-3">
              <em className="text-[10px]">(02)</em> Balance energético
            </p>
            <SlEnergy />
          </div>
          <img src={Line} alt="Linea" className="flex h-[0.5px] w-[198px]" />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between gap-3">
            <p className="text-3">
              <em className="text-[10px]">(03)</em> Historial Médico
            </p>
            <FaRegEdit />
          </div>
          <img src={Line} alt="Linea" className="flex h-[0.5px] w-[198px]" />
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <p className="text-3">
              <em className="text-[9px]">(04)</em> Composición corporal
            </p>
            <FiUserCheck />
          </div>
          <img src={Line} alt="Linea" className="flex h-[0.5px] w-[198px]" />
        </div>
      </div>
      <div className="absolute left-[12px] top-[850px] ml-3 flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-limon md:hidden">
        <FaWhatsapp
          className="text-[42px] text-white"
          aria-label="boton de WhastApp "
        />
      </div>
      <div
        className={`fixed left-0 top-[650px] h-[calc(100%-650px)] w-full bg-black/35 ${menuOpen ? '' : 'hidden'} md:hidden`}
      ></div>

      <div className="hidden h-full w-full md:grid md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[500px_1fr_1fr]">
        <div className="h-max-screen flex w-full items-end justify-end bg-alimentos bg-cover bg-center">
          <p className="m-4 mb-6 flex font-lora text-lg font-medium italic">
            ¡Alimenta tu cuerpo, honra tu espíritu!
          </p>
        </div>

        <div className="col-grid-rows-auto col-span-2 grid h-full w-full">
          <div className="mt-6 flex w-full flex-col justify-center font-lora font-medium italic md:text-[22px] md:leading-[1] lg:text-[30px] lg:leading-[1.5] xl:leading-[0.5]">
            <p className="flex text-carmesi md:justify-center xl:ml-12 xl:justify-start">
              Nutrición Integral
            </p>
            <p className="flex justify-center text-[40px] xl:mr-[100px]">=</p>
            <p className="flex text-lima md:justify-center xl:mr-4 xl:justify-end">
              ¡Nutrición que da Resultados!
            </p>
          </div>

          <div className="flex items-center justify-center pt-4 transition duration-300 ease-in-out hover:scale-110">
            <img
              className="flex md:h-[270px] md:w-[400px] lg:h-[290px] lg:w-[500px]"
              src={Desktop}
              alt="logotipo del consultorio"
            />
          </div>

          <div className="flex items-end justify-between pb-4 pr-3 font-mulish text-sm font-semibold">
            <div className="ml-8 flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-limon">
              <FaWhatsapp
                className="text-[42px] text-white transition ease-in-out hover:rotate-6 hover:scale-110"
                aria-label="boton de WhastApp "
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="mb-1 font-lora text-xl font-normal italic lg:font-medium">
                Mis 4 pilares de la nutrición
              </p>

              <div className="flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-3">
                    <em className="text-[10px]">(01)</em> Dieta personalizada
                  </p>
                  <FiSliders />
                </div>
                <img
                  src={Linea}
                  alt="Linea"
                  className="flex h-[0.5px] w-[250px] items-end"
                />
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-3">
                    <em className="text-[10px]">(02)</em> Balance energético
                  </p>
                  <SlEnergy />
                </div>
                <img
                  src={Linea}
                  alt="Linea"
                  className="flex h-[0.5px] w-[250px]"
                />
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-3">
                    <em className="text-[10px]">(03)</em> Historial Médico
                  </p>
                  <FaRegEdit />
                </div>
                <img
                  src={Linea}
                  alt="Linea"
                  className="flex h-[0.5px] w-[250px]"
                />
              </div>

              <div className="flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-3">
                    <em className="text-[10px]">(04)</em> Composición corporal
                  </p>
                  <FiUserCheck />
                </div>
                <img
                  src={Linea}
                  alt="Linea"
                  className="flex h-[0.5px] w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
