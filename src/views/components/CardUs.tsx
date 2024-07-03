
export default function CardUs(params: { src: any; title: string; text: string; alt: string; class: any }) {
  return (
    <div className={params.class}>
      <div className="w-full lg:w-1/2">
        <img className="h-[260px] lg:h-[360px] w-full" src={params.src} alt={params.alt} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className=" text-xl p-2 font-semibold text-[#030b31]">{params.title}</h1>
        <div className="p-3 text-wrap">
          <p className="">{params.text}</p>
        </div>
      </div>
    </div>
  )
}
