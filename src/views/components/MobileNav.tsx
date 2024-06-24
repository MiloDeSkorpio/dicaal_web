
import { nav } from "../../data"
export default function MobileNav() {
  return (
    <div className='bg-[rgba(3,11,49,0.78)] backdrop-blur-sm w-full h-full'>
      <ul className='h-full flex flex-col justify-center gap-y-8 p-10'>
        {nav.map((item, index) => {
          //destrucure item
          const { href, name } = item
          return (
            <li key={index}>
              <a className='link text-white hover:font-semibold text-xl hover:border-b-2 hover: shadow-white' href={href}>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
