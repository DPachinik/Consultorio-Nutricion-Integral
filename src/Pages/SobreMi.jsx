import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

const SobreMi = ({ menuOpen }) => {
  SobreMi.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
  };

  return (
    <>
      <div>
        <div className="relative flex h-[422px] w-[440px] flex-col bg-nutri pl-8 pt-14 text-carmesi">
          <div className="flex flex-col items-center self-start text-center font-lora">
            <p className="text-md flex font-semibold">Conóceme</p>
            <p className="text-2xl font-bold">JESSICA</p>
            <p className="text-2xl font-bold">PACHINIK</p>
          </div>
        </div>
        <div className="absolute left-[12px] top-[400px] flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-limon">
          <FaWhatsapp
            className="text-[42px] text-white transition ease-in-out hover:rotate-6 hover:scale-110"
            aria-label="boton de WhastApp "
          />
        </div>
        <div className="mb-4 ml-3 flex flex-col rounded-l-md bg-gradient-to-b from-[#A63F51] via-[#B94B5D] to-[#D65A72] p-2 text-end font-mulish text-sm text-white shadow-inner">
          <p>
            Nutricionista Dietista de la Universidad Católica de Itapúa (UCI)
          </p>
          <p>Antropometrista ISAK I. </p>
        </div>
        <div className="my-16 flex px-3">
          <p className="text-center font-lora text-[24px] italic leading-[2]">
            “Apasionada por promover un estilo de vida saludable, me dedico a
            encontrar soluciones personalizadas para cada paciente, ayudándolos
            a alcanzar una mejor calidad de vida y fortalecer su autoestima.”
          </p>
        </div>
      </div>
      <div>
        <h2 className="my-12 flex justify-center font-lora text-3xl font-semibold italic text-carmesi">
          {' '}
          ¿ Soy ?
        </h2>
      </div>

      <div className="mx-3 mb-6 grid grid-cols-2 rounded-2xl bg-gradient-to-br from-slate-400 via-slate-400 to-slate-500 text-justify font-mulish text-sm clip-tl-45">
        <div className="flex rounded-2xl bg-woman bg-cover bg-bottom clip-tl-45"></div>

        <div className="flex flex-col py-4 text-justify leading-[1]">
          <p className="pl-4 text-2xl font-bold text-lime-400">Nutricionista</p>
          <p className="px-4 pt-2 text-sm text-white">
            Un dietista-nutricionista es un profesional de la salud reconocido
            como un experto en alimentación, nutrición y dietética.
          </p>
          <p className="px-4 text-sm text-white">
            Interviene en la alimentación de las personas desde distintos
            lugares: La nutrición en la salud y en la enfermedad, la
            prescripción dietaria y la reeducación alimentaria.
          </p>
        </div>
      </div>

      <div className="mx-3 mb-6 grid grid-cols-2 rounded-2xl bg-gradient-to-bl from-slate-400 via-slate-400 to-slate-500 text-justify font-mulish text-sm shadow-sm shadow-inherit clip-tr-45">
        <div className="flex flex-col py-3 text-justify leading-[1]">
          <p className="pl-2 text-2xl font-bold text-lime-400">
            Antropometrista
          </p>
          <p className="p-4 text-sm text-white">
            Una antropometrista es un profesional especializado en la medición
            de las dimensiones físicas del cuerpo humano. <br />
            Utiliza técnicas y herramientas para evaluar características como la
            altura, el peso, el índice de masa corporal (IMC), y las
            proporciones corporales.
          </p>
        </div>
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-antropometria bg-cover bg-right clip-tr-45"></div>
      </div>

      <div className="mx-3 mb-4 grid grid-cols-2 rounded-2xl bg-gradient-to-br from-slate-400 via-slate-400 to-slate-500 text-justify font-mulish text-sm clip-tl-45">
        <div className="flex rounded-2xl bg-consulta bg-cover bg-bottom clip-tl-45"></div>
        <div className="flex flex-col py-4 text-justify">
          <p className="pl-4 text-2xl font-bold text-lime-400">Coach</p>
          <p className="px-4 pt-4 font-medium text-white">
            El coach es un observador activo que acompaña al paciente en un
            proceso de autoconocimiento <br />
            El coach se encarga de mostrar el camino hacia el objetivo y
            ofrecerle claridad en el enfoque. Lo ayuda a aumentar su motivación
            y confianza, y a fijar metas individuales y asequibles.
          </p>
        </div>
      </div>
      <div
        className={`fixed left-0 top-[650px] h-[calc(100vh-650px)] w-full bg-black/35 ${menuOpen ? '' : 'hidden'} md:hidden`}
      ></div>
    </>
  );
};

export default SobreMi;
