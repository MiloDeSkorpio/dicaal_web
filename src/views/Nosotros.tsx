import { nostros } from "../data"
import CardUs from "./components/CardUs"
import Hero from "./components/Hero"


export default function Nosotros() {
  const { title, cont, cards } = nostros
  return (
    <main className="space-y-5">
      <Hero cont={cont} title={title} />
      <section className="bg-gray-300 w-full py-10" >
        {cards.map((card, index) => (
          <CardUs key={index} src={card.img} alt={card.alt} title={card.title} text={card.p} />
        ))}

      </section>
    </main>
  )
}
