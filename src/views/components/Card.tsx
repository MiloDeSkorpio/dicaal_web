
export default function Card( params: {src: any; title: string; text: string; alt: string;}) {
    return (
      <div className="max-w-[300px] h-auto shadow-xl rounded border-[1px] bg-white m-5">
            <div>
                <img className="w-full" src={params.src} alt={params.alt} />
            </div>
            <div>
                <h1 className=" text-xl p-2 font-semibold text-[#030b31]">{params.title}</h1>
                <div className="p-3 text-wrap">
                    <p className="text-xs">{params.text}</p>
                </div>
            </div>
      </div>
    )
  }
  