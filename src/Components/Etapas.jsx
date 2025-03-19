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
    <div>
      {etapas.map((etapa, index) => (
        <div key={index}>
          <details>
            <summary>{etapa.titulo}</summary>
            <p>{etapa.parrafo1}</p>
            {etapa.parrafo2 && <p>{etapa.parrafo2}</p>}
            {etapa.lista && (
              <ul>
                {etapa.lista.map((item, i) => (
                  <li key={i}>{item}</li>
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
