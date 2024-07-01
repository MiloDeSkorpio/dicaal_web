import { servicios } from "../data"
import Service from "./components/Service"

export default function Servicios() {
  const { feature1, feature2,feature3,feature4 } = servicios
  const { services } = feature3
  const { solutions} = feature4
  return (
    <main>
      <section className="heroServices h-[400px] ">
        <div className="bg-[rgba(0,0,0,0.55)] h-full w-full flex items-center justify-center">
        <h1 className="text-white text-6xl font-black shadow-gray-950">{feature1.title}</h1>
        </div>
      </section>
      <section className="container mt-20 m-auto text-center">
        <div className="">
          <h1 className="mt-5 text-2xl text-[#0d497f]">{feature2.title}</h1>
          <p className="mt-8">En <span className="font-semibold text-[#030b31]">DICAAL</span>,{feature2.text}</p>
          <p className="mt-8">{feature2.text2}<span className="font-bold">¡Tu Elijes!</span> {feature2.text3}</p>
          <p className="text-2xl font-bold mt-10" >{feature2.text4}</p>
        </div>
      </section>
      <section className="container m-auto gap-10 flex-1 flex-wrap flex mt-32">
      {services.map((service, index) => (
            <Service key={index} src={service.img} alt={service.alt} title={service.title} />
          ))}
      </section>
      <section className="container m-auto mt-32">
        <h2>{feature4.title}</h2>
        <p>{feature4.text}<span className="font-bold">{feature4.span}</span>{feature4.text2}</p>
        <div className="container m-auto gap-10 flex-1 flex-wrap flex mt-10">

        {solutions.map((solution, index) => (
            <Service key={index} src={solution.img} alt={solution.alt} title={solution.title} />
          ))}    
        </div>
      </section>

    </main>
  )
}
