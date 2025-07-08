import { useState } from 'react';
import Logo from '../assets/logo.png';
import Footer from '../Components/Footer';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contacto = () => {
  const placeholderStyle =
    'flex  h-[50px] min-h-[20px] w-full pl-4  items-center placeholder-black/40 placeholder:font-mulish placeholder:text-lg rounded-md outline-none  border-subtitulo/30  border-[1px] focus:border-carmesi shadow-md shadow-primario';

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: nombre,
      message: mensaje,
      email: email,
      user_phone: numero,
    };

    emailjs
      .send(
        'service_hocxb5o',
        'template_hbhswbb',
        templateParams,
        'AuiPKk9QljhIkwWU2'
      )
      .then(
        (res) => {
          console.log('respuesta', res);
          toast.success('Mensaje enviado con éxito !');
          setEmail('');
          setNombre('');
          setApellido('');
          setNumero('');
          setMensaje('');
        },
        (err) => {
          console.log('Error:', err);
        }
      );
  };

  return (
    <div className="flex h-[100dvh] flex-col bg-amber-50/0 pt-[50px] md:justify-between">
      <div className="container mx-auto flex h-full w-full flex-col px-4 md:flex-row md:items-center md:justify-center">
        <div className="flex h-auto w-full flex-col items-center font-lora font-medium text-rose-800 md:h-full md:justify-center md:gap-2 md:pb-20">
          <img
            src={Logo}
            alt="Logotipo de manzana"
            className="h-24 w-24"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          />
          <h2 className="text-xl lg:text-3xl">Contáctame</h2>
          <p className="text-md pb-4 text-center lg:text-2xl">
            ¡Completa tus datos y dime como puedo ayudarte!
          </p>
        </div>

        <form
          className="flex h-full w-full flex-col justify-center gap-4 lg:pt-[50px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              placeholder="Nombre"
              className={placeholderStyle}
              required
              aria-label="Nombres"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />

            <input
              type="text"
              placeholder="Apellido(s)"
              className={placeholderStyle}
              aria-label="Apellidos"
              required
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
          </div>

          <input
            type="email"
            placeholder="Correo electrónico"
            className={placeholderStyle}
            aria-label="Correo electrónico"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className={placeholderStyle}
            aria-label="Numero de Teléfono"
            required
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
          <textarea
            placeholder="Mensaje"
            className="flex h-[70px] w-full items-center rounded-md border-[1px] border-subtitulo/30 pl-4 placeholder-black/40 shadow-md shadow-primario outline-none placeholder:font-mulish placeholder:text-lg focus:border-carmesi"
            aria-label="Mensaje"
            required
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
          ></textarea>

          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center rounded-md bg-gradient-to-t from-rose-900 via-rose-800 to-rose-700 font-mulish text-lg text-white"
            aria-label="Enviar mensaje"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
