import { createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './views/Home'
import Portafolio from './views/Portafolio'
import Servicios from './views/Servicios'
import Herrajes from './views/Herrajes'
import Nosotros from './views/Nosotros'
import Contacto from './views/Contacto'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'nuestros-servicios',
                element: <Servicios />
            },
            {
                path: 'herrajes',
                element: <Herrajes />
            },
            {
                path: 'nuestros-proyectos',
                element: <Portafolio />
            },
            {
                path: 'nosotros',
                element: <Nosotros />
            },
            {
                path: 'contactanos',
                element: <Contacto />
            }
        ]
    }
])