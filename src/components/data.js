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


export {benefitOne, benefitTwo};
