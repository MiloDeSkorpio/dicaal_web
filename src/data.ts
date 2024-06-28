// import images
import LogoImg from './assets/header/DICAAL_black.png'
import Feature5Img from '../src/assets/home/home_cali.webp';
import Feature6Img from '../src/assets/home/home_style.webp';
import iconFeature5 from '../src/assets/home/check-circle.svg'
import iconFeature6 from '../src/assets/home/diamond.svg'
import iconFeature7 from '../src/assets/home/user.svg'
import iconFeature8 from '../src/assets/home/check.svg'
import iconFeature9 from '../src/assets/home/clock.svg'
import imgC1 from '../src/assets/home/negocio.webp'
import imgC2 from '../src/assets/home/hom_proyectos.webp'
import imgC3 from '../src/assets/home/Hogar.webp'
//footer
import LogoImgF from './assets/footer/WhiteDicaal.webp'
import icoFoot1 from '../src/assets/footer/facebook.svg'
import icoFoot2 from '../src/assets/footer/instagram.svg'
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
    btnLink: '/contactanos',
    btnName: 'Contáctanos',

  },
  feature2: {
    title: '¿Quienes somos?',
    textContent:
      'Somos una empresa especialista con más de 10 años de experiencia ofreciendo soluciones arquitectónicas de aluminio y vidrio para todo tipo de proyectos hecho a la medida de sus necesidades. Nuestro portafolio ofrece una amplia gama de servicios en ventanas de lineas: nacionales, europea y española.',
    textContent2: 'Desarrollamos trabajos en vidrio templado vidrio laminado (doble) y peliculas de seguridad, ademas de contar con canceleria para oficinas y accesos, canceleria comercial, canceleria para baños, techos, domos, barandales y pergolas. Contamos con el quipo para trabajar en obras de alto nivel.',
    btnLink: '/nosotros',
    btnName: 'Conoce más de nosotros',
    // image: Feature2Img,
  },
  feature3: {
    title: 'Proyectos Personalizados',
    textContent:
      'En DICAAL diseñamos proyectos personalizados en aluminio y vidrio que no solo son funcionales, si no tambien esteticamente atractivas y duraderas para tu espacio.',
    btnLink: '/nuestros-proyectos',
    btnName: 'Nuestros proyectos',
    cont: 'contPro w-full lg:min-h-[666px] flex mt-10',
  },
  feature4: {
    // Despues de Area de Actuacion
    title: 'Aseguramos el éxito de tus proyectos.',
    textContent:
      'Confie en DICAAL para garantizar el éxito y la excelencia en cada obra. Nuestra dedicacion y compromiso nos hacen la eleccion ideal para construtoras que buscan lo mejor en Aluminio y Vidrio.\n\n Contáctenos hoy mismo y descubra por que somos su socio estrategico.',
    cont: 'contExi w-full lg:min-h-[666px] flex mt-10',
    btnLink: '/contacto',
    btnName: 'Contáctenos',
  },
  feature5: {
    image: Feature5Img,
    icon: iconFeature5,
    alt: 'imgCalidad',
    altIco: 'iconCalidad',
    title: 'Calidad en cada detalle.',
    textContent:
      'Nuestro compromiso con la excelencia se refleja en la meticulosa seleccion de materiales en aluminio y vidrio de primera calidad, para asegurar la durabilidad, resistencia y estetica de cada pieza que creamos.',
  },
  feature6: {
    image: Feature6Img,
    title: 'Estilo en cada rincón',
    icon: iconFeature6,
    altIco: 'iconCalidad',
    textContent:
      'Nuestros barandales son la elección perfecta para darle un toque sofisticado a cada espacio. Esta imagen es la prueba de ello: un ejemplo inspirador de cómo nuestros diseños resaltan la belleza y la transparecnia en cualquier entorno',
  },
  feature7: {
    icon: iconFeature7,
    title: 'Satisfaccion de Clientes',
    textContent:
      'La satisfaccion de nuestros clientes es la maxima prioridad es por eso que nos esforzamos en ofecerle soluciones de aluminio y vidrio de la más alta calidad, respaldadas por un serrvicio excepcional.',
  },
  feature8: {
    icon: iconFeature8,
    title: 'Garantia',
    textContent:
      'Respaldamos ada uno de nuestros servicios con nuestra solida Garantia de satisfaccion total. Estamos seguros de  la calidad de nuestro trabajo lo que te ofrece una tranquilidad y confianza en cada proyecto',
  },
  feature9: {
    icon: iconFeature9,
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
      img: imgC1,
      title: 'Comercios',
      text: 'El aluminio y el vidrio son materiales que aportan una apariencia sofisticada y elegante a tu negocio. Su combinacion puede crear una imagen moderna y atractiva que atraiga a los clientes y refleja la vision de tu marca.',
      alt: 'ImgComercios'
    },
    {
      img: imgC2,
      title: 'Oficinas',
      text: 'Transformamos tu espacio de trabajo con la combinacion perfecta de elegancia y modernidad, da un toque de distincion con nuestros canceles de aluminio y vidrio.',
      alt: 'ImgOficinas'
    },
    {
      img: imgC3,
      title: 'Hogar',
      text: 'Nos especialozamos en crear un espacio innovador y acogedor para tu hogar desde ventaans hasta domos para brindar una mayor luminocidad en cada rincon.',
      alt: 'ImgHogar'
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

export const footer = {
  logoF: LogoImgF,
  dir: 'Mariano Zuñiga 113, Col. Hipico, Metepec, Estado de México',
  contacto: 'Tel.(720)296 4731 | dicaal.mx@gmail.com',
  ico1: icoFoot1 ,
  ico2:icoFoot2 ,

};

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

