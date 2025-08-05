import { FaWhatsapp } from 'react-icons/fa';

const BotonWhastApp = () => {
  return (
    <a
      href="https://wa.me/+5950962106039?text=Hola,%20quiero%20agendar%20una%20consulta!"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-limon shadow-md shadow-primario hover:cursor-pointer hover:bg-lima hover:shadow-inner hover:shadow-lime-900"
    >
      <FaWhatsapp
        className="text-[42px] text-white"
        aria-label="boton de WhastApp "
      />
    </a>
  );
};

export default BotonWhastApp;
