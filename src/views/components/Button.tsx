

export default function Button(params: {name: string; href: string; }) {
  return (
    <div >
      <a 
        href={params.href} 
        className="px-7 py-3 text-xl bg-[#030b31] hover:bg-[#030b31] text-white rounded-md "
        >{params.name}</a>
    </div>
  )
}
