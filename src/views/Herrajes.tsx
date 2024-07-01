import { herrajes } from "../data"
import Button from "./components/Button"
import Hero from "./components/Hero"


export default function Herrajes() {
  const { feature1, feature2, feature3 } = herrajes
  return (
    <main className="space-y-5">
      <Hero cont={feature1.cont} title={feature1.title} />
      <section className="w-full max-w-[1320px] m-auto text-center py-10">
        <p className="text-2xl">{feature1.text}</p>
      </section>
      <section className="proyectos mt-10 py-10 p-2 space-y-4 lg:h-[388px] text-white flex flex-col items-center lg:flex-row lg:justify-center lg:gap-10">
        <div className="space-y-4 flex items-center flex-col justify-center max-w-[620px]">
          <h1 className="text-4xl">{feature2.title}</h1>
          <p>{feature2.text}</p>
          <Button href={feature2.href} name={feature2.btnLink} />
        </div>
        <div className="max-h-[690px] w-auto flex mt-5">
          <img className='lg:h-[240px]' src={feature2.image} alt={feature2.alt} />
        </div>
      </section>
      <section className="bgHerra2 mt-10 py-10 p-2 space-y-5 lg:h-[388px] lg:flex flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-10">
        <div className="max-h-[690px] w-auto flex mt-5">
          <img className='lg:h-[240px]' src={feature3.image} alt={feature3.alt} />
        </div>
        <div className="space-y-4 flex items-center flex-col justify-center max-w-[620px]">
          <h1 className="text-4xl">{feature3.title}</h1>
          <p>{feature3.text}</p>
          <Button href={feature3.href} name={feature3.btnLink} />
        </div>
      </section>
    </main>
  )
}
