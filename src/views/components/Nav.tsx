
import { nav } from "../../data"
export default function Nav() {
  return (
    <nav>
    <ul className='flex gap-x-10'>
      {nav.map((item, index) => {
        //destructure item
        const { href, name } = item
        return (
          <li key={index}>
            <a className='text-sm text-blue-500 hover:text-blue-600 no-underline' href={href}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
  )
}
