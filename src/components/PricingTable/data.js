
import pricingImg01 from "../../../public/Pricing/pricing01.webp"
import pricingImg02 from "../../../public/Pricing/pricing02.webp"
import pricingImg03 from "../../../public/Pricing/pricing03.webp"


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


export {pricingOptions};
