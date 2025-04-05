import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { FaRegCopyright } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';

const Footer = () => {
  const iconos = [
    {
      icono: <IoLogoInstagram size={32} />,
      red: 'instagram',
      usuario: 'nutricionintegral1',
    },
    {
      icono: <BiLogoFacebookSquare size={32} />,
      red: 'facebook',
      usuario: 'JessicaPachinikR',
    },
    {
      icono: <IoLogoLinkedin size={32} />,
      red: 'linkedin',
      usuario: 'in/jessica-pachinik-rotela-008974244/',
    },
  ];
  const iconoStyle =
    'flex items-center justify-center   text-limon duration-200 hover:scale-125';

  return (
    <footer className="flex flex-col gap-2 bg-back/50 pt-4 font-mulish font-semibold italic text-subtitulo">
      <div className="text-md flex items-center justify-center gap-3">
        <p className="flex text-[17px]">Sigueme en redes sociales</p>
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

      <div className="flex items-center justify-center gap-2">
        <FaRegCopyright />
        <p className="text-md"> 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
