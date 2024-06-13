
import { nav } from "../../data"
export default function Nav() {
  return (
    <nav>
    <ul className='flex gap-x-10'>
      {nav.map((item, index) => {
        //destructure item
        const { href, name } = item
        return (
          <li key={index} className="hover:border-b-2 hover:shadow hover:border-gray-900">
            <a className='text-xl font-semibold text-gray-700 hover:text-gray-900 ' href={href}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
  )
}
