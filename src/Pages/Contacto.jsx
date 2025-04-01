import { useState } from 'react';
import Footer from '../Components/Footer';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const placeholderStyle =
    'flex  h-[50px] w-full pl-4   items-center placeholder-black/70 placeholder:font-mulish placeholder:text-lg rounded-md border-[1px] border-subtitulo/30';

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

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
          setRespuesta('Su mensaje ha sido enviado!');
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
    <div className="flex min-h-screen flex-col justify-between bg-back pt-[50px]">
      <div className="flex h-[calc(100vh-200px)] w-full flex-col px-4 lg:flex-row lg:items-center lg:justify-center">
        <div className="my-8 flex w-full flex-col items-center gap-2 font-sourceSerif text-carmesi lg:justify-center">
          <h2 className="text-2xl lg:text-3xl">CONTACTAME</h2>
          <p className="text-center text-lg lg:text-xl">
            ¡Completa tus datos y dime como puedo ayudarte!
          </p>
        </div>

        <form
          className="flex w-full flex-col justify-center gap-6 py-4 lg:pt-[50px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 lg:flex-row">
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
            className="flex h-[70px] w-full items-center rounded-md border-[1px] border-subtitulo/20 pl-4 placeholder-black/70 placeholder:font-mulish placeholder:text-lg"
            aria-label="Mensaje"
            required
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
          ></textarea>

          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center rounded-md bg-limon font-mulish text-lg text-white"
            aria-label="Enviar mensaje"
          >
            Enviar
          </button>
          <p className="text-center font-mulish font-bold text-carmesi">
            {respuesta}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
