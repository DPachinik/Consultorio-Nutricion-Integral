import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { FaRegCopyright } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="mt-12 flex h-[50px] flex-col gap-3 border-t-[0.5px] border-primario pt-2 font-mulish font-semibold text-primario">
      <div className="text-md flex items-center justify-center gap-2">
        <p className="flex text-[17px]">Sigueme en redes sociales</p>
        <IoLogoInstagram className="h-8 w-8 shrink-0 text-carmesi duration-200 hover:scale-125" />
        <BiLogoFacebookSquare className="h-8 w-8 shrink-0 text-carmesi duration-200 hover:scale-125" />
        <IoLogoLinkedin className="h-8 w-8 shrink-0 text-carmesi duration-200 hover:scale-125" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <FaRegCopyright />
        <p className="text-[14px]"> 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
