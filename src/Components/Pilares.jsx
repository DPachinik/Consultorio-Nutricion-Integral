import { FaRegEdit } from 'react-icons/fa';
import { FiSliders, FiUserCheck } from 'react-icons/fi';
import { SlEnergy } from 'react-icons/sl';

const Pilares = () => {
  const pilares = [
    {
      numero: '(01)',
      titulo: 'Dieta Personalizada',
      icono: <FiSliders />,
    },
    {
      numero: '(02)',
      titulo: 'Balance Energético',
      icono: <SlEnergy />,
    },
    {
      numero: '(03)',
      titulo: 'Historial Médico',
      icono: <FaRegEdit />,
    },
    {
      numero: '(04)',
      titulo: 'Composición Corporal',
      icono: <FiUserCheck />,
    },
  ];

  return (
    <div className="flex flex-col">
      {pilares.map((pilar) => (
        <div
          className="flex flex-col justify-between gap-1 p-2 font-mulish lg:gap-0"
          key={pilar.numero}
        >
          <div className="flex items-center justify-between gap-4 text-black">
            <p className="flex items-center text-lg">
              <em className="min-w-[16px] flex-shrink-0 pr-1 text-xs">
                {pilar.numero}
              </em>
              <span className="ml- text-sm">{pilar.titulo}</span>
            </p>
            <div className="h-6 w-6 flex-shrink-0 pl-3">{pilar.icono}</div>
          </div>

          <div className="w-full border-b border-black"></div>
        </div>
      ))}
    </div>
  );
};

export default Pilares;
