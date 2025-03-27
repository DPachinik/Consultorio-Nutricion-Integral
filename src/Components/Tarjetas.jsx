import Nutricionista from '../assets/jessy.png';
import Antropometrista from '../assets/antropometria.jpg';
import Coach from '../assets/coach.jpg';
import Mix from '../assets/mixfrutas.jpeg';

const Tarjetas = () => {
  const contenido = [
    {
      imagen: Nutricionista,
      numero: '1°',
      titulo: 'NUTRICIONISTA',
      parrafo1:
        'Soy Nutricionista certificada por la Universidad Católica de Itapúa, con más de 10 años de experiencia en nutrición individualizada. Me especializo en nutrición clínica y deportiva, brindando un enfoque integral para mejorar la salud y el bienestar a través de planes personalizados.',
    },
    {
      imagen: Antropometrista,
      numero: '2°',
      titulo: 'ANTROPOMETRISTA',
      parrafo1:
        'Soy Antropometrista ISAK I, certificado en la evaluación de la composición corporal a través de mediciones antropométricas estandarizadas. Mi enfoque se basa en la precisión y el análisis de datos corporales para optimizar el rendimiento deportivo, la salud y la planificación nutricional individualizada.',
    },
    {
      imagen: Coach,
      numero: '3°',
      titulo: 'COACH',
      parrafo1:
        'Como coach, soy un observador activo, acompaño a mis pacientes en su proceso de autoconocimiento. Mi objetivo es guiarlos hacia sus metas, brindándoles claridad en el enfoque, aumentando su motivación y confianza, y ayudándolos a establecer objetivos individuales y alcanzables.',
    },
    {
      imagen: Mix,
      numero: '4°',
      titulo: 'EMPRENDEDORA EN ALIMENTACIÓN SALUDABLE',
      parrafo1:
        'Además de asesorar a mis pacientes, desarrollo y elaboro productos nutricionalmente equilibrados, como snacks saludables, mix de frutas deshidratadas y granos, para fomentar una alimentación práctica y consciente.',
    },
  ];
  const classMap = {
    0: '',
    1: 'lg:ml-auto',
    2: '',
    3: 'lg:ml-auto',
  };

  return (
    <div className="flex flex-col bg-cover bg-center lg:bg-pie">
      {contenido.map((tarjeta, index) => (
        <div
          key={tarjeta.titulo}
          className={`mx-3 mb-8 grid h-[320px] grid-cols-2 rounded-2xl border-[1px] border-lime-700 bg-gradient-to-t from-fondo via-lime-100 to-lime-50 font-mulish text-sm shadow-inner md:h-[250px] lg:w-[760px] ${index % 2 === 0 ? 'clip-tl-45' : 'clip-tr-45'} ${classMap[index] || ''} }`}
        >
          <div
            className={`flex h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
            style={{ backgroundImage: `url(${tarjeta.imagen})` }}
          ></div>
          <div
            className={`flex flex-col py-2 md:pt-8 lg:pt-2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
          >
            <h3 className="pl-4 font-sourceSerif text-xl font-semibold text-subtitulo md:font-bold">
              {tarjeta.titulo}
            </h3>
            <p className="md:text-md lg:text-md px-4 pt-2 text-sm font-medium tracking-tight text-primario">
              {tarjeta.parrafo1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;
