import benefitOneImg from "../../../public/img/benefit-one.webp";
import benefitTwoImg from "../../../public/img/benefit-two.webp";

import manitos from "../../../public/img/icon-one.png"
import brain from "../../../public/img/icon-two.png"
import time from "../../../public/img/icon-three.png"
import dog from "../../../public/img/dog.png"
import dogWalking from "../../../public/img/walking-the-dog.png"
import dogSecurity from "../../../public/img/dogSecurity.png"

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

  export { benefitOne, benefitTwo};