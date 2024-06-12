
import { nav } from "../../data"
export default function Nav() {
  return (
    <nav>
    <ul className='flex gap-x-10'>
      {nav.map((item, index) => {
        //destructure item
        const { href, name } = item
        return (
          <li key={index} className="">
            <a className='text-xl font-bold text-slate-500 hover:text-slate-600 ' href={href}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
  )
}
