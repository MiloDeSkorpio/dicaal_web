import { homeFeatures, homeCards } from "../data"
import Button from "./components/Button"
import Card from "./components/Card"

export default function Home() {
  const { feature1, feature2, feature3 } = homeFeatures
  const { cards } = homeCards
  return (
    <div>
      <div className="feature1 ">
        <div className="m-auto w-full bg-[rgba(0,0,0,0.55)] space-y-8 min-h-[770px] flex flex-col items-center text-center justify-center">
          <h1 className="text-white text-6xl font-black shadow-gray-950" >{feature1.title}</h1>
          <h2 className="text-white text-4xl font-bold shadow-gray-950">{feature1.subtitle}</h2>
          <Button href={feature1.btnLink} name={feature1.btnName} />
        </div>
      </div>
      {/* quienes somos */}
      <div className="m-auto max-w-6xl space-y-8 text-center">
        <h1 className="mt-5 text-6xl">{feature2.title}</h1>
        <p className="leading-loose p-4 text-base lg:text-xl">{feature2.textContent} {feature2.textContent2}</p>
        <Button href={feature2.btnLink} name={feature2.btnName} />
      </div>
      {/* proyectos */}
      <div className="contPro w-full lg:min-h-[666px] flex mt-10">
        <div className="proyectos lg:w-1/3 flex flex-col items-center text-center p-5 lg:p-10">
          <h1 className="mt-10 text-4xl lg:text-6xl text-white">{feature3.title}</h1>
          <p className="mt-5 mb-20 leading-normal text-xl">{feature3.textContent}</p>
          <div className="w-full mb-5">
          <Button href={feature3.btnLink} name={feature3.btnName} />
          </div>
        </div>
      </div>
      {/* Area de Actuacion */}
      <div className="mt-10 text-center">
        <hr className="border-[1px] border-gray-400"/>
        <h1 className="mt-10 text-2xl text-gray">{homeCards.title}</h1>
        <hr className="border-[1px] border-gray-400"/>
        {/* Card */}
        <div className="lg:flex w-auto items-center justify-center">
        <Card 
          src={cards[0].img}
          alt={cards[0].alt}
          title={cards[0].title}
          text={cards[0].text}
        />
        <Card 
          src={cards[1].img}
          alt={cards[1].alt}
          title={cards[1].title}
          text={cards[1].text}
        />
        <Card 
          src={cards[2].img}
          alt={cards[2].alt}
          title={cards[2].title}
          text={cards[2].text}
        />
        </div>
      </div>
      <div>
        <h2></h2>
        <p></p>
      </div>
    </div>

  )
}

