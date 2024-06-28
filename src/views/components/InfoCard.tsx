import Button from "./Button";
export default function Card(params: {  title: any; text: any; cont: any; btnLink: any; btnName: any }) {
  return (
    <section className={params.cont}>
      <div className="proyectos  min-h-[600px] lg:w-1/3 flex flex-col items-center justify-center p-5 lg:p-10">
        <h1 className="mt-10 text-4xl lg:text-6xl text-white">{params.title}</h1>
        <p className="mt-5 mb-20 leading-normal text-xl">{params.text}</p>
        <div className="w-full mb-5">
          <Button href={params.btnLink} name={params.btnName} />
        </div>
      </div>
    </section>
  )
}
