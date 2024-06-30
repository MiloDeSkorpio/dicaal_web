import { homeFeatures, homeCards } from "../data"
import Button from "./components/Button"
import Card from "./components/Card"
import InfoCard from "./components/InfoCard"

export default function Home() {
  const { feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9 } = homeFeatures
  const { cards } = homeCards
  return (
    <div>
      <section className="feature1 h-screen">
        <div className="bg-[rgba(0,0,0,0.55)] min-h-screen w-full m-auto space-y-[90px] flex flex-col items-center justify-center">
          <div className=" space-y-5 text-center">
            <h1 className="text-white text-6xl font-black shadow-gray-950" >{feature1.title}</h1>
            <h2 className="text-white text-4xl shadow-gray-950">{feature1.subtitle}</h2>
          </div>
          <Button href={feature1.btnLink} name={feature1.btnName} />
        </div>
      </section>
      {/* quienes somos */}
      <section className="container m-auto max-w-6xl space-y-8 text-center">
        <h1 className="mt-5 text-6xl text-[#0d497f]">{feature2.title}</h1>
        <p className="leading-loose lg:leading-10 p-4 text-base lg:text-xl ">{feature2.textContent} {feature2.textContent2}</p>
        <Button href={feature2.btnLink} name={feature2.btnName} />
      </section>
      {/* proyectos */}
      <InfoCard
        title={feature3.title}
        text={feature3.textContent}
        cont={feature3.cont}
        btnLink={feature3.btnLink}
        btnName={feature3.btnName}
      />
      {/* Area de Actuacion */}
      <div className="mt-10 ">
        <div className="text-center">
          <hr className="border-[1px] border-gray-400" />
          <h1 className="m-5 text-2xl text-gray">{homeCards.title}</h1>
          <hr className="border-[1px] border-gray-400" />
        </div>
        {/* Card */}
        <div className="lg:flex w-auto bg-gray-300 py-2">
          {cards.map((card, index) => (
            <Card key={index} src={card.img} alt={card.alt} title={card.title} text={card.text} />
          ))}

        </div>
      </div>
      {/* exito */}
      <InfoCard
        title={feature4.title}
        text={feature4.textContent}
        cont={feature4.cont}
        btnLink={feature4.btnLink}
        btnName={feature4.btnName}
      />
      {/*  */}
      <section className="mt-10">
        <div className="lg:flex lg:max-h-[500px]">
          <div className="h-24 md:h-36 lg:h-auto  lg:w-1/2 bg-cover overflow-hidden ">
            <img src={feature5.image} alt={feature5.alt} />
          </div>
          <div className="flex flex-col p-16 text-center items-center lg:w-1/2 justify-center">
            <img src={feature5.icon} alt={feature5.altIco} className="w-20 h-20" />
            <h2 className="text-4xl my-5 font-semibold">{feature5.title}</h2>
            <p>{feature5.textContent}</p>
          </div>
        </div>
        <div className="lg:flex lg:max-h-[500px]">
          <div className="flex flex-col p-16 text-center items-center lg:w-1/2 justify-center">
            <img src={feature6.icon} alt={feature6.altIco} className="w-20 h-20" />
            <h2 className="text-4xl my-5 font-semibold">{feature6.title}</h2>
            <p>{feature6.textContent}</p>
          </div>
          <div className="h-24 md:h-36 lg:h-auto lg:w-1/2 bg-cover overflow-hidden ">
            <img src={feature6.image} alt="" />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="mt-28 lg:flex lg:justify-between">
        <div className=" flex flex-col items-center p-5 text-center">
          <div className="bg-[#030b31] rounded-md h-20 w-20 flex items-center justify-center">
            <img src={feature7.icon} alt="" />
          </div>
          <h2 className="text-2xl my-5 font-semibold">{feature7.title}</h2>
          <p>{feature7.textContent}</p>
        </div>
        <div className="flex flex-col items-center p-5 text-center">
          <div className="bg-[#030b31] rounded-md h-20 w-20 flex items-center justify-center">
            <img src={feature8.icon} alt="" />
          </div>
          <h2 className="text-2xl my-5 font-semibold">{feature8.title}</h2>
          <p>{feature8.textContent}</p>
        </div>
        <div className="flex flex-col items-center p-5 text-center">
          <div className="bg-[#030b31] rounded-md h-20 w-20 flex items-center justify-center">
            <img src={feature9.icon} alt="" />
          </div>
          <h2 className="text-2xl my-5 font-semibold">{feature9.title}</h2>
          <p>{feature9.textContent}</p>
        </div>
      </section>
    </div>

  )
}

