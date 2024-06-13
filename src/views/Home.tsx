import { homeFeatures, homeCards } from "../data"
import Button from "./components/Button"

export default function Home() {
  const { feature1, feature2, feature3 } = homeFeatures
  const { cards, title } = homeCards
  return (
    <div>
      <div className="feature1 ">
        <div className="m-auto w-full bg-[rgba(0,0,0,0.3)] space-y-8 mt-[140px] min-h-[770px]  flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-black" >{feature1.title}</h1>
          <h2 className="text-white text-4xl font-bold">{feature1.subtitle}</h2>
          <Button href={feature1.btnLink} name={feature1.btnName} />
        </div>
      </div>
      {/* quienes somos */}
      <div className="m-auto max-w-6xl space-y-8 text-center">
        <h1 className="mt-5 text-6xl">{feature2.title}</h1>
        <p className="leading-loose text-xl">{feature2.textContent} {feature2.textContent2}</p>
        <Button href={feature2.btnLink} name={feature2.btnName} />
      </div>
      {/* proyectos */}
      <div className="contPro w-full min-h-[666px] flex mt-10">
        <div className="proyectos w-1/3 flex flex-col items-center p-10">
          <h1 className="mt-10 text-6xl text-white">{feature3.title}</h1>
          <p className="mt-5 mb-20 leading-normal text-xl">{feature3.textContent}</p>
          <Button href={feature3.btnLink} name={feature3.btnName} />
        </div>
      </div>
      {/* Area de Actuacion */}
      <div className="mt-10 text-center">
        <hr className="border-[1px] border-gray-400"/>
        <h1 className="mt-10 text-2xl text-gray">{homeCards.title}</h1>
        <hr className="border-[1px] border-gray-400"/>
        {/* Card */}
        
        <div>
          <img src="" alt="" />
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div>
        <h2></h2>
        <p></p>
      </div>
    </div>

  )
}

