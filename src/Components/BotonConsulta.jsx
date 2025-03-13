import { IoEnterOutline } from 'react-icons/io5';

const BotonConsulta = () => {
  return (
    <div className="mx-auto flex w-[200px] items-center justify-center gap-2 rounded-md bg-gradient-to-br from-carmesi via-rose-800 to-carmesi py-2 text-white">
      <p className="font-mulish font-semibold"> Agendar Consulta </p>
      <IoEnterOutline className="text-[25px] hover:text-lime-400" />
    </div>
  );
};

export default BotonConsulta;
