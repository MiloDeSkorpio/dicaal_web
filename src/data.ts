// import images
import LogoImg from './assets/header/DICAL.webp'
// import HeroImg from '../src/assets/img/hero/image.svg';
// import Feature1Img from '../src/assets/img/features/feature1-img.svg';
// import Feature2Img from '../src/assets/img/features/feature2-img.svg';
// import Feature3Img from '../src/assets/img/features/feature3-img.svg';
// import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
// import LaboralImg from '../src/assets/img/pricing/work.svg'
// import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
// import WhatsAppIcon from '../src/assets/img/copyright/whatsapp.svg';
// import ContactImg from '../src/assets/img/form/contact.svg';
// import ContableImg from '../src/assets/img/product/contable.svg'

export const header = {
  logo: LogoImg,
  btnText: 'Contáctanos',
};

export const nav = [
  { name: 'Inicio', href: '/' },
  { name: 'Portafolio de Serviciós', href: '/nuestros-servicios' },
  { name: 'Herrajes', href: '/herrajes' },
  
];


export const homeFeatures = {
  feature1: {
    title: 'Ilumina tus interiores',
    subtitle:
      'Arquitectura de Aluminio',
    btnLink: 'Contactenos',
    // image: Feature1Img,
  },
  feature2: {
    title: '¿Quienes somos?',
    textContent:
      'Somos una empresa especialista con más de 10 años de experiencia ofreciendo soluciones arquitectónicas de aluminio y vidfrio para todo tipo de proyectos hecho a la medida de sus necesidades. Nuestro portafolio ofrece una amplia gama de servicios en ventanas de lineas: nacionales, europea y española.',
    textContent2: 'Desarrollamos trabajos en vidrio templado vidrio laminado (doble) y peliculas de seguridad, ademas de contar con canceleria para oficinas y accesos, canceleria comercial, canceleria para baños, techos, domos, barandales y pergolas. Contamos con el quipo para trabajar en obras de alto nivel.',
    btnLink: 'Conoce más de nosotros',
    // image: Feature2Img,
  },
  feature3: {
    title: 'Proyectos Personalizados',
    textContent:
      'En DICAAL diseñamos proyectos personalizados en aluminio y vidrio que no solo son funcionales, si no tambien esteticamente atractivas y duraderas para tu espacio.',
    btnLink1: 'Conoce más de nuestros proyectos',

    // image: Feature3Img,
  },
  feature4: {
    // Despues de Area de Actuacion
    title: 'Aseguramos el éxito de tus proyectos.',
    textContent:
      'Confie en DICAAL para garantizar el éxito y la excelencia en cada obra. Nuestra dedicacion y compromiso nos hacen la eleccion ideal para construtoras que buscan lo mejor en Aluminio y Vidrio.',
    textContent2: 'Contáctenos hoy mismo y descubra por que somos su socio estrategico.',

    // image: Feature3Img,
  },
  feature5: {
    // image: Feature3Img, -- logo de paloma en circulo
    title: 'Calidad en cada detalle.',
    textContent:
      'Nuestro compromiso con la excelencia se refleja en la meticulosa seleccion de materiales en aluminio y vidrio de primera calidad, para asegurar la durabilidad, resistencia y estetica de cada pieza que creamos.',
  },
  feature6: {
    // image: Feature3Img, -- logo de diamante
    title: 'Estilo en cada rincón',
    textContent:
      'Nuestros barandales son la elección perfecta para darle un toque sofisticado a cada espacio. Esta imagen es la prueba de ello: un ejemplo inspirador de cómo nuestros diseños resaltan la belleza y la transparecnia en cualquier entorno',
  },
  feature7: {
    // image: Feature3Img, -- logo de usuario en rounde cube
    title: 'Satisfaccion de Clientes',
    textContent:
      'La satisfaccion de nuestros clientes es la maxima prioridad es por eso que nos esforzamos en ofecerle soluciones de aluminio y vidrio de la más alta calidad, respaldadas por un serrvicio excepcional.',
  },
  feature8: {
    // image: Feature3Img, -- logo de paloma en rounde cube
    title: 'Garantia',
    textContent:
      'Respaldamos ada uno de nuestros servicios con nuestra solida Garantia de satisfaccion total. Estamos seguros de  la calidad de nuestro trabajo lo que te ofrece una tranquilidad y confianza en cada proyecto',
  },
  feature9: {
    // image: Feature3Img, -- logo de paloma en rounde cube
    title: 'Tiempo de respuesta',
    textContent:
      'En DICAAL nos comprometemos a ofreceerte una respuesta rapida y soluciones inmediatas a tus necesidades.',
  },
};

export const herrajes = {
  feature1: {
    title: 'En DICAAL ofrecemos una gran variedad de herrajes para la venta al publico.',
    text: 'En nuestra coleccion de herrajes para aluminio y vidrio, encontraras soluciones excepcionales para tus proyectos, desde bisagras y soportes hasta sistemas de sujecion y cerraduras, cada uno de nuestros productos esta diseñado para ofrecer una combinacion perfecta de rendimiento confiable y elegancia moderna.',
    // image: Feature1Img,
  },
  feature2: {
    title: 'Herrajes de Aluminio',
    text:
      'Ofrecemos una amplia variedad de herrajes para todo tipo de proyectos de aluminio. Nuestros productos son la eleccion perfecta para tus necesidades. Contactanos hoy para llevar tus proyectos al siguiente nivel.',
    btnLink: 'Ver Catálogo',
    // image: Feature1Img,
  },
  feature3: {
    title: 'Herrajes para vidrio',
    text:
      'Con un enfoque en la estetica, nuestris herrajespara vidrio realzan la belleza aportando un toque de estilo y sofisticación a cualquier proyecto.',
    btnLink: 'Ver Catálogo',
    // image: Feature1Img,
  },
}

export const homeCards = {
  title: 'Área de Actuación',
  // img: ContableImg,
  cards: [
    {
      // img: img,
      title: 'Comercios',
      text: 'El aluminio y el vidrio son materiales que aportan una apariencia sofisticada y elegante a tu negocio. Su combinacion puede crear una imagen moderna y atractiva que atraiga a los clientes y refleja la vision de tu marca.'
    },
    {
      // img: img,
      title: 'Oficinas',
      text: 'Transformamos tu espacio de trabajo con la combinacion perfecta de elegancia y modernidad, da un toque de distincion con nuestros canceles de aluminio y vidrio.'
    },
    {
      // img: img,
      title: 'Hogar',
      text: 'Nos especialozamos en crear un espacio innovador y acogedor para tu hogar desde ventaans hasta domos para brindar una mayor luminocidad en cada rincon.'
    },


  ],
};

export const nostros = {
  title: 'Voz de nuestra Marca',
  // img: LaboralImg,
  cards: [
    {
      // img: ImGift,
      title: 'Misión',
      p: 'Diseñar, fabricar y distribuir productos de cidrio y aluminio de vanguardia comprometidos con la sotenibilidad, la eficiencia y la satisfaccion del cliente impulsamos el desarrollo de nuestros colaboradores y contribuimos al progreso de las comunidades donde operamos promoviendo un entorno de trabajo seguro y etico.'
    },
    {
      // img: ImGift,
      title: 'Visión',
      p: 'Ser lideres en innovacion, tecnologica y excelencia en la industria del vidrio y aluminio, proporcionando soluciones de calidad que transformen los espacios y mejoren la vida de las personas.'
    },
    {
      // img: ImGift,
      title: 'Valores',
      p: 'En DICAAL la calidad, la innovacion y el compromiso con la satisfaccion del cliente son nuestros valores fundamentales.',
      p2: 'Descubre como podemos hacer realidad tus proyectos con excelencia y profesionalismo.'
    },
    
  ],
};

// export const footer = {
//   logo: LogoImg,
//   form: {
//     ph1: 'Pedro López',
//     ph2: 'pedro.lopez@correo.es',
//     ph3: 'Cotizacion',
//     ph4: 'Requiero informes sobre...',
//     btnText: 'Enviar',
//     smallText: 'Recuerda revisar tus datos!',
//     logo: ContactImg
//   },
// };

// export const copyright = {
//   link: {
//     name: 'Contáctanos',
//     href: '#contacto',
//   },
//   copyText: 'Copyright @ 2023 Decofis',
//   social: [
//     { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100064041577037' },
//     { icon: WhatsAppIcon, href: 'https://wa.me/qr/TIL6M66BGOQ5H1' }
//   ],
// };

