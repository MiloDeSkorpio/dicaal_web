
export default function Service( params: {src: any; title: string; alt: string;}) {
  return (
    <div className="h-auto w-[200px] text-center flex flex-col items-center">
          <div className="w-[130px] h-[130px]">
              <img src={params.src} alt={params.alt} />
          </div>
          <div>
              <h1 className=" text-xl p-2 font-semibold text-[#030b31]">{params.title}</h1>
          </div>
    </div>
  )
}
