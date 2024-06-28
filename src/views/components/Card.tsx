
export default function Card( params: {src: any; title: string; text: string; alt: string;}) {
    return (
      <div className="flex-1 w-auto h-auto shadow-xl rounded-md bg-white m-5 overflow-hidden ">
            <div>
                <img className="w-full" src={params.src} alt={params.alt} />
            </div>
            <div>
                <h1 className=" text-xl p-2 font-semibold text-[#030b31]">{params.title}</h1>
                <div className="p-3 text-wrap">
                    <p className="">{params.text}</p>
                </div>
            </div>
      </div>
    )
  }
  