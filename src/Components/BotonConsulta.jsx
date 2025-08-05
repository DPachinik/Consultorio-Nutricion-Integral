import { GoArrowUpRight } from 'react-icons/go';

const BotonConsulta = () => {
  return (
    <a
      href="https://wa.me/+5950962106039?text=Hola,%20quiero%20agendar%20una%20consulta!%20"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex w-[200px] items-center justify-center gap-2 rounded-md bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 py-2 text-white shadow-md shadow-primario hover:shadow-inner hover:shadow-slate-900"
      aria-label="Abrir WhatsApp para agendar una consulta"
    >
      <p className="font-mulish font-semibold"> Agendar Consulta </p>
      <GoArrowUpRight className="text-[25px]" />
    </a>
  );
};

export default BotonConsulta;
