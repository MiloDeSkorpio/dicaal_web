

export default function Hero(params: { cont: any; title: any }) {
  return (
    <section className={params.cont}>
      <div className="w-full h-full bg-[rgba(0,0,0,0.55)] flex items-center text-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-black shadow-gray-950 ">{params.title}</h1>
      </div>
    </section>
  )
}
