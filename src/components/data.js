import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.jpeg";
import benefitTwoImg from "../../public/img/benefit-two.jpeg";


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

const benefitOne = {
  title: "Cuidados en Casa",
  desc: "En MalePet Care, tratamos a cada mascota como si fuera nuestra, proporcionando amor, atención y cuidado de calidad. Con nosotros puedes estar seguro que tu mascota esta en las mejores manos",
  image: benefitOneImg,
  bullets: [
    {
      title: "Atencion Personalizada",
      desc: "Cada mascota recibe cuidados adaptados a sus necesidades específicas y preferencias individuales",
      icon: manitos,
    },
    {
      title: "Reduccion del estrés",
      desc: "Mantener a las mascotas en su entorno reduce su ansiedad y estres al evitar cambios drasticos en su rutina",
      icon: brain,
    },
    {
      title: "Flexibilidad",
      desc: "Servicios disponibles seguin las necesidades del dueño, ya sea durante viajes, largas jornadas laborales o emergencias inesperadas",
      icon: time,
    },
  ],
};

const benefitTwo = {
  title: "Paseos Individuales",
  desc: "Cada paseo se realiza de manera individual, lo que permite una atencion completa y personalizada. Esto garantiza la seguridad de tu mascota y la conexion mas cercana con el cuidador",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Ejercicio adecuado",
      desc: "Cada paseo se adapta a las necesidades especificas del lomito como su ritmo, nivel de energia, preferencias y edad",
      icon: dog,
    },
    {
      title: "Mayor Control",
      desc: "Permite al dueño especificar exactamente lo que neceista su mascota, asegurando que sus necesidades se satisfacen completamente",
      icon: dogWalking,
    },
    {
      title: "Seguridad",
      desc: "Los paseos individuales aseguran que el lomito este bajo supervisión constante, reduciendo el riesgo de contagio de enfermedades, accidentes o imprevistos.",
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


export {benefitOne, benefitTwo, photos};
