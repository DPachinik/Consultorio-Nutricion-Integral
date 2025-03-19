import { useState } from 'react';
import Estetica from '../assets/adelgazamiento.jpg';
import Calidad from '../assets/calidad-vida.png';
import Nutriologa from '../assets/nutriologa.png';
import Nutricion from '../assets/nutricion-deportiva.png';
import Hipertrofia from '../assets/hipertrofia.png';
import Performance from '../assets/performance.png';

const TarjetaServicios = () => {
  const servicios = [
    {
      imagen: Estetica,
      titulo: 'ESTÉTICA',
      alt: 'silueta del cuerpo',
      texto:
        'Una alimentación equilibrada no solo impacta la salud interna, sino que también influye directamente en la apariencia de la piel, el cabello, la composición corporal y la salud de los tejidos. Un acompañamiento nutricional permite optimizar la ingesta de nutrientes esenciales para mejorar la estética de manera sostenible y saludable.',
    },
    {
      imagen: Calidad,
      titulo: 'CALIDAD DE VIDA',
      alt: 'adultos sanos',
      texto:
        'Una alimentación adecuada es clave para un envejecimiento saludable, ya que ayuda a preservar la masa muscular, fortalecer el sistema inmunológico y reducir el riesgo de enfermedades crónicas, mejorando así la calidad de vida a largo plazo.',
    },
    {
      imagen: Nutriologa,
      titulo: 'MANEJO DE ENFERMEDADES CRÓNICAS',
      alt: 'adultos sanos',
      texto:
        'Una alimentación estratégica juega un papel fundamental en el manejo de enfermedades crónicas, ayudando a controlar síntomas, prevenir complicaciones y mejorar la calidad de vida del paciente',
    },
    {
      imagen: Nutricion,
      titulo: 'NUTRICIÓN DEPORTIVA',
      alt: 'nutricionista',
      texto:
        'La nutrición deportiva es clave para optimizar el rendimiento, acelerar la recuperación y prevenir lesiones, ajustando la ingesta de macronutrientes y micronutrientes según las demandas de cada disciplina.',
    },
    {
      imagen: Hipertrofia,
      titulo: 'HIPERTROFIA',
      alt: 'cuerpo musculoso',
      texto:
        'Una alimentación adecuada, rica en proteínas de alta calidad, carbohidratos estratégicos y grasas saludables, es fundamental para favorecer la hipertrofia muscular y optimizar la recuperación tras el ejercicio.',
    },
    {
      imagen: Performance,
      titulo: 'PERFORMANCE',
      alt: 'actividad física',
      texto:
        'Una nutrición equilibrada y adaptada a las necesidades individuales mejora el rendimiento físico y mental, optimizando la energía, la resistencia y la recuperación.',
    },
  ];
  const [description, setDescription] = useState(
    new Array(servicios.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newDescription = [...description];
    newDescription[index] = true;
    setDescription(newDescription);
  };
  const handleMouseLeave = (index) => {
    const newDescription = [...description];
    newDescription[index] = false;
    setDescription(newDescription);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {servicios.map((servicio, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={`relative flex h-[150px] w-[300px] items-center justify-center rounded-lg bg-cover bg-center transition-all duration-1000 ${description[index] ? 'h-[300px] w-[400px]' : ''}`}
          style={{ backgroundImage: `url(${servicio.imagen})` }}
        >
          <div
            className={`absolute inset-0 left-0 top-0 rounded-lg bg-black/60 ${description[index] ? 'bg-black' : ''} `}
          />

          <div className="relative z-10 text-center">
            {description[index] ? (
              <p className="font-sourceSerif text-sm font-normal text-white">
                {servicio.texto}
              </p>
            ) : (
              <p className="font-sourceSerif text-lg font-normal text-white">
                {servicio.titulo}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaServicios;
