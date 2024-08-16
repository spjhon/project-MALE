import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.webp";
import benefitTwoImg from "../../public/img/benefit-two.webp";


import manitos from "../../public/img/icon-one.png"
import brain from "../../public/img/icon-two.png"
import time from "../../public/img/icon-three.png"
import dog from "../../public/img/dog.png"
import dogWalking from "../../public/img/walking-the-dog.png"
import dogSecurity from "../../public/img/dogSecurity.png"


import photo001 from "../../public/photos/photo (1).jpeg"
import photo002 from "../../public/photos/photo (2).jpeg"
import photo003 from "../../public/photos/photo (3).jpeg"
import photo004 from "../../public/photos/photo (4).jpeg"
import photo005 from "../../public/photos/photo (5).jpeg"
import photo006 from "../../public/photos/photo (6).jpeg"
import photo007 from "../../public/photos/photo (7).jpeg"
import photo008 from "../../public/photos/photo (8).jpeg"



//IMPORTACIONES PARA LA TABLA

import pricingImg01 from "../../public/Pricing/pricing01.webp"
import pricingImg02 from "../../public/Pricing/pricing02.webp"
import pricingImg03 from "../../public/Pricing/pricing03.webp"

const benefitOne = {
  title: "Cuidados en Casa",
  desc: "En MalePets Care, tratamos a cada mascota como si fuera nuestra, proporcionando amor, atención y cuidado de calidad. Con nosotros, puedes estar seguro de que tu mascota está en las mejores manos.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Atención Personalizada",
      desc: "Cada mascota recibe cuidados adaptados a sus necesidades específicas y preferencias individuales.",
      icon: manitos,
    },
    {
      title: "Reducción del estrés",
      desc: "Mantener a las mascotas en su entorno reduce su ansiedad y estrés al evitar cambios drásticos en su rutina.",
      icon: brain,
    },
    {
      title: "Flexibilidad",
      desc: "Servicios disponibles según las necesidades del dueño, ya sea durante viajes, largas jornadas laborales o emergencias inesperadas.",
      icon: time,
    },
  ],
};

const benefitTwo = {
  title: "Paseos Exclusivos",
  desc: "Cada paseo se realiza de manera individual, lo que permite una atención completa y personalizada. Esto garantiza la seguridad de tu mascota y una conexión más cercana con el cuidador.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Ejercicio adecuado",
      desc: "Cada paseo se adapta a las necesidades específicas de tu peludito, como su ritmo, nivel de energía, preferencias y edad.",
      icon: dog,
    },
    {
      title: "Mayor Control",
      desc: "Permite al dueño especificar exactamente lo que necesita su mascota, asegurando que sus necesidades se satisfacen completamente.",
      icon: dogWalking,
    },
    {
      title: "Seguridad",
      desc: "Los paseos individuales aseguran que tu peludito esté bajo supervisión constante, reduciendo el riesgo de contagio de enfermedades, accidentes o imprevistos.",
      icon: dogSecurity,
    },
  ],
};

const photos =  [
    {
      largeURL:photo001.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
      width: photo001.width,
      height: photo001.height,
    },

    {
      largeURL:
      photo002.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
      width: photo002.width,
      height: photo002.height,
    },

    {
      largeURL:
      photo003.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo003.width,
      height: photo003.height,
    },
    {
      largeURL:
      photo004.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo004.width,
      height: photo004.height,
    },
    {
      largeURL:
      photo005.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo005.width,
      height: photo005.height,
    },
    {
      largeURL:
      photo006.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo006.width,
      height: photo006.height,
    },
    {
      largeURL:
      photo007.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo007.width,
      height: photo007.height,
    },
    {
      largeURL:
      photo008.src,
      thumbnailURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
      width: photo008.width,
      height: photo008.height,
    },
  ];



  //DATOS PARA LA TABLA DE PRECIOS

  const pricingOptions = [
    {
      title: "Paseo Individual",
      price: 50000,
      description: "Ideal para cuando tu mascota debe salir de la casa por que le gusta caminar",
      features: [
        "Caminata con bolsita para excremento",
        "Reporte de como va el perrito",
        "Se juega un rato con el perrito",
        "Recargo por perrito o gatico adiconal",
      ],
      iconUrl: pricingImg01.src,
    },
    {
      title: "Cuidado en Casa",
      price: 60000,
      description: "Perfecto para cuando no puedes cuidar de tus michis",
      features: [
        "Reporte de como va el michi o el lomito",
        "Se juega un rato con el perrito",
        "Se limpia la caja de arena",
        "Recargo por perrito o michi extra",
      ],
      iconUrl: pricingImg02.src,
    },
    {
      title: "Visitas Medicas",
      price: 50000,
      description: "Cuando una cita esta en horarios que no puedes nosotros te ayudamos.",
      features: [
        "Se recoge el michi o lomito en la puerta de la casa",
        "Se esta pendiente de recomendaciones veterinarias",
        "Domicilio solo para la ciudad de manizales",
        "Y mas",
      ],
      iconUrl: pricingImg03.src,
    },
  ];


export {benefitOne, benefitTwo, photos, pricingOptions};
