import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { FaRegCopyright } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';

const Footer = () => {
  const iconos = [
    {
      icono: <IoLogoInstagram size={24} />,
      red: 'instagram',
      usuario: 'nutricionintegral1',
    },
    {
      icono: <BiLogoFacebookSquare size={24} />,
      red: 'facebook',
      usuario: 'JessicaPachinikR',
    },
    {
      icono: <IoLogoLinkedin size={24} />,
      red: 'linkedin',
      usuario: 'in/jessica-pachinik-rotela-008974244/',
    },
  ];
  const iconoStyle =
    'flex items-center justify-center  flex-shrink-0 p-1 text-limon duration-200 hover:scale-125 rounded-full shadow-md shadow-primario';

  return (
    <footer className="flex w-full flex-col justify-around gap-4 border-t-[1px] border-black bg-white p-4 font-mulish font-semibold text-black lg:flex-row">
      <div className="text-md flex items-center justify-center gap-3">
        <p>Sigueme en redes sociales</p>
        {iconos.map((social) => (
          <a
            key={social.red}
            href={`https://www.${social.red}.com/${social.usuario}`}
            target="_blank"
            rel="noopener noreferrer"
            className={iconoStyle}
          >
            {social.icono}
          </a>
        ))}
      </div>

      <div className="text-md flex items-center justify-center gap-2">
        <FaRegCopyright />
        <p> 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
