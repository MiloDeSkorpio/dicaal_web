import { contacto } from "../data";
import Hero from "./components/Hero";
import  { useState } from 'react';


export default function Contacto() {
  const {hero } = contacto
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: { target: { value: any; }; }) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate email using regular expression
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([\w-]+\.)+[a-zA-Z]{2,})$/;
    const isValid = regex.test(newEmail);
    setIsValidEmail(isValid);
  }
  return (
    <main className="bg-gray-300">
      <section >
      <Hero cont={hero.cont} title={hero.title} />
      </section>
      <section className="space-y-4 container m-auto p-5 lg:flex lg:space-x-4 lg:space-y-0">
        <form  
        action=""
        className="container m-auto p-4 w-11/12 bg-white rounded-lg shadow lg:max-w-[600px] space-y-2 max-h-[670px]"
        >
          <div>
           
            <label
              className="text-ortgray-950 font-bold"
              htmlFor="nombre"
            >Su nombre:</label>
            <input
              id="nombre"
              type="text"
        className="mt-2 block w-full p-3 
        bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
        focus:bg-gray-300 focus:shadow-[#030b31]
        focus:placeholder:text-gray-500 placeholder:text-gray-950 
        rounded-md"
              placeholder=""
              name="nombre"
              inputMode="text"  
              pattern="[a-zA-Z\s]+"  
              title="Ingresa un nombre valido: ej: Luis"
              required
            />
          </div>
          <div>
            <label
              className="text-ortgray-950 font-bold"
              htmlFor="telefono"
            >Número de teléfono:</label>
            <input
              id="telefono"
              type="number"
        className="mt-2 block w-full p-3 
        bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
        focus:bg-gray-300 focus:shadow-[#030b31]
        focus:placeholder:text-gray-500 placeholder:text-gray-950 
        rounded-md"
              placeholder=""
              name="telefono"
            />
          </div>

          <div className="mt-2">
      <label 
        htmlFor="email"
        className="text-ortgray-950 font-bold"
        >Email:</label>
      <input
        id="email"
        type="email"
        className="mt-2 block w-full p-3 
        bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
        focus:bg-gray-300 focus:shadow-[#030b31]
        focus:placeholder:text-gray-500 placeholder:text-gray-950 
        rounded-md"
        placeholder="Ingresa Correo"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      {!isValidEmail && <p className="text-red-500 ">Ingresa un correo valido</p>}
    </div>

          <div>
            <label
              className="text-ortgray-950 font-bold"
              htmlFor="empresa"
            >Empresa:</label>
            <input
              id="empresa"
              type="text"
        className="mt-2 block w-full p-3 
        bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
        focus:bg-gray-300 focus:shadow-[#030b31]
        focus:placeholder:text-gray-500 placeholder:text-gray-950 
        rounded-md"
              placeholder=""
              name="empresa"
            />
          </div>
          <div>
            <label
              className="text-ortgray-950 font-bold"
              htmlFor="asunto"
            >Asunto:</label>
            <input
              id="asunto"
              type="text"
        className="mt-2 block w-full p-3 
        bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
        focus:bg-gray-300 focus:shadow-[#030b31]
        focus:placeholder:text-gray-500 placeholder:text-gray-950 
        rounded-md"
              placeholder=""
              name="asunto"
              required
            />
          </div>
          <div>
          <label
              className="text-ortgray-950 font-bold"
              htmlFor="ask"
            >Su pregunta: </label>
            <textarea 
            name="ask" 
            id="ask" 
            className="mt-2 block w-full p-3 
            bg-gray-100 border-[1px] border-gray-600 focus:border-[#030b31]
            focus:bg-gray-300 focus:shadow-[#030b31]
            focus:placeholder:text-gray-500 placeholder:text-gray-950 
            rounded-md"
            required
            />
          </div>
          <div>
          <input type="submit" value="Enviar Correo" className="px-7 py-3 text-xl bg-[#030b31] hover:bg-[#030b31] text-white rounded-md " />

          </div>
        </form>
        <div className="container bg-white lg:-h-[670px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.1871301562578!2d-99.6323451350182!3d19.26608407836239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b77a40b1539%3A0xec58122f58e59820!2sDICAAL%20(Dise%C3%B1o%20de%20Canceler%C3%ADa%20en%20Aluminio)!5e0!3m2!1ses-419!2smx!4v1720632657693!5m2!1ses-419!2smx" 
          className="w-full shadow h-full rounded-md"  
          loading="lazy" ></iframe>

        </div>
      </section>
    </main>
  )
}
