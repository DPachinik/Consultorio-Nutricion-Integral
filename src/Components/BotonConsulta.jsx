import { IoEnterOutline } from 'react-icons/io5';

const BotonConsulta = () => {
  return (
    <a
      href="https://wa.me/+5950962106039?text=Hola,%20quiero%20agendar%20una%20consulta!%20"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex w-[200px] items-center justify-center gap-2 rounded-md bg-gradient-to-br from-carmesi via-rose-800 to-carmesi py-2 text-white"
      aria-label="Abrir WhatsApp para agendar una consulta"
    >
      <p className="font-mulish font-semibold"> Agendar Consulta </p>
      <IoEnterOutline className="text-[25px] hover:text-lime-400" />
    </a>
  );
};

export default BotonConsulta;
