import { FaCheck } from 'react-icons/fa';

const Etapas = () => {
  const etapas = [
    {
      titulo: '1° CONSULTA PREVIA',
      parrafo1:
        'Agenda tu cita por WhatsApp eligiendo el día y la hora que mejor se adapten a tu disponibilidad.',
    },
    {
      titulo: '2° CONSULTA Y EVALUACIÓN',
      parrafo1:
        'En la consulta, hablaremos sobre tus objetivos, historial dietético, uso de suplementos, hábitos alimenticios y tu experiencia con el ejercicio físico.',
      parrafo2:
        'Además, realizaremos una valoración física completa para identificar:',
      lista: [
        'Fortalezas y áreas de mejora en tu composición corporal.',
        'Medición de circunferencias para evaluar tu progreso.',
        'Estimación del porcentaje de grasa corporal, clave para un análisis preciso de tu estado físico.',
      ],
    },
    {
      titulo: '3° ACOMPAÑAMIENTO',
      parrafo1:
        'Después de enviarte tu plan de alimentación con todas las indicaciones necesarias, tendrás acceso a mi WhatsApp para hacer preguntas y compartir tus comentarios durante todo el tratamiento, sin límite de consultas.',
      parrafo2:
        'Recibirás tu plan en un documento detallado que podrás revisar digitalmente o imprimir si lo deseas.',
    },
  ];

  return (
    <div className="relative flex flex-col items-center gap-4 px-3 lg:bg-columna lg:bg-contain lg:bg-center lg:bg-no-repeat lg:px-12">
      {etapas.map((etapa, index) => (
        <div
          key={index}
          className={`mb-4 flex w-full flex-col ${index === 0 ? 'md:items-end' : ''} ${index === 1 ? 'md:items-start' : ''} ${index === 2 ? 'md:items-end' : ''} `}
        >
          <details className="flex w-full flex-col justify-center rounded-lg border-[1px] border-lime-500 bg-gradient-to-r from-lime-200 via-lime-100 to-lime-50 px-3 py-4 font-mulish text-primario md:w-[400px] lg:w-[450px]">
            <summary className="flex h-[30px] w-full cursor-pointer items-center justify-between gap-12 px-3 font-sourceSerif text-xl font-semibold text-subtitulo">
              {etapa.titulo}
            </summary>
            <p className="font-semibold">{etapa.parrafo1}</p>
            {etapa.parrafo2 && (
              <p className="font-semibold">{etapa.parrafo2}</p>
            )}
            {etapa.lista && (
              <ul>
                {etapa.lista.map((item, i) => (
                  <li
                    key={i}
                    className="ml-2 flex items-center gap-2 font-semibold"
                  >
                    {<FaCheck className="flex h-4 w-4 flex-shrink-0" />}
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </details>
        </div>
      ))}
    </div>
  );
};

export default Etapas;
