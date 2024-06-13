

export default function Button(params: {name: string; href: string; }) {
  return (
    <div>
      <a 
        href={params.href} 
        className="px-6 py-3 bg-[#131b46] hover:bg-[#030b31] text-white rounded-md"
        >{params.name}</a>
    </div>
  )
}
