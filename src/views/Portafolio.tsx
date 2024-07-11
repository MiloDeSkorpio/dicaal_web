// import Galeria from "./components/Galeria";

import { proyectos } from "../data";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";


export default function Portafolio() {
  const { pro1,title,cont,pro2,pro3 } = proyectos
  return (
    <main className=" bg-gray-300">
      <section>
        <Hero cont={cont} title={title} />
      </section>
      <section className="container m-auto w-11/12 lg:w-[1200px] py-5 lg:h-[800px] overflow-clip">
        <div className="space-y-4 text-center bg-white shadow-sm rounded-md py-2  ">
        <h1 className="text-5xl font-bold text-[#0d497f]">{pro1.title}</h1>
        <h2 className="text-2xl font-semibold">{pro1.dir1}</h2>
        <p className="">{pro1.details}</p>
        </div>
        <Galeria 
          imagenes={pro1.imagenes}
        />
      </section>
      <section className="container m-auto w-11/12 lg:w-[1200px] py-5 lg:h-[900px] overflow-clip">
        <div className="space-y-4 text-center bg-white shadow-sm rounded-md py-2  ">
        <h1 className="text-5xl font-bold text-[#0d497f]">{pro2.title}</h1>
        <h2 className="text-2xl font-semibold">{pro2.dir1}</h2>
        <p className="">{pro2.details}</p>
        </div>
        <Galeria 
          imagenes={pro2.imagenes}
        />
      </section>
      <section className="container m-auto w-11/12 lg:w-[1200px] py-5 lg:h-[900px] overflow-clip mb-5">
        <div className="space-y-4 text-center bg-white shadow-sm rounded-md py-2  ">
        <h1 className="text-5xl font-bold text-[#0d497f]">{pro3.title}</h1>
        <h2 className="text-2xl font-semibold">{pro3.dir1}</h2>
        <p className="">{pro3.details}</p>
        </div>
        <Galeria 
          imagenes={pro3.imagenes}
        />
      </section>
    </main>
  )
}
