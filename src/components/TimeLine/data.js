import ContactIcon from "./SVGIcons/ContactIcon";
import VisitIcon from "./SVGIcons/VisitIcon";
import contactImage from "../../../public/TimeLine/contactImage.png";
import visitImage from "../../../public/TimeLine/visitImage.png";

export const experiences = [
    {
      id: "1",
      title: "Contacto inicial ",
      description: (
        <>
          <p>
            • El cliente se pone en contacto con MalePets Care mediante WhatsApp,
            Instagram o llamada.
          </p>
          <p>
            • Recibimos y respondemos a su consulta, proporcionando información
            básica sobre nuestros servicios y recogiendo detalles iniciales sobre
            las necesidades de la mascota.
          </p>
        </>
      ),
      icon: <ContactIcon></ContactIcon>,
      image: contactImage.src,
      iconStyle: {
        background: "rgb(79 70 229)",
      },
    },
    {
      id: "2",
      title: "Contacto de seguimiento",
      description: (
        <>
          <p>
            • Realizamos una llamada o enviamos un mensaje al cliente para
            confirmar los detalles y agendar una Visita Previa.
          </p>
          <p>
            • Durante este contacto, también aclaramos cualquier duda y nos
            aseguramos de que todas las necesidades de la mascota estén cubiertas.
          </p>
        </>
      ),
      icon: <VisitIcon></VisitIcon>,
      image: visitImage.src,
      iconStyle: {
        background: "rgb(79 70 229)",
      },
    },
    {
      id: "3",
      title: "Visita previa",
      description: (
        <>
          <p>
            • Un cuidador de MalePets Care visita el hogar del cliente para
            conocer a la mascota y discutir en detalle sus necesidades.
          </p>
          <p>
            • Evaluamos el entorno, entendemos las rutinas y preferencias de la
            mascota, y ajustamos el servicio en consecuencia.
          </p>
          <p>
            • Se establecen los términos del servicio y se programan las fechas de
            inicio.
          </p>
        </>
      ),
      icon: <VisitIcon></VisitIcon>,
      image: visitImage.src,
      iconStyle: {
        background: "rgb(79 70 229)",
      },
    },
    {
      id: "4",
      title: "Iniciación del servicio",
      description: (
        <>
          <p>
            • Comienza el servicio de cuidado o paseo según lo acordado. Se
            proporciona un cuidado personalizado a la mascota, siguiendo todas las
            instrucciones del cliente.
          </p>
          <p>
            • Actualización en tiempo real: Durante el servicio, enviamos fotos y
            videos de la mascota para mantener al cliente informado. Si es
            necesario, se realizan videollamadas para mostrar cómo está la mascota
            en tiempo real.
          </p>
          <p>
            • Reporte de comportamiento: Se describe el comportamiento del
            peludito, informando sobre su estado de ánimo, alimentación, ejercicio
            y cualquier otra observación relevante.
          </p>
          <p>
            • Mantenemos comunicación constante con el cliente para asegurarnos de
            que el servicio cumple con sus expectativas.
          </p>
        </>
      ),
      icon: <VisitIcon></VisitIcon>,
      image: visitImage.src,
      iconStyle: {
        background: "rgb(79 70 229)",
      },
    },
    {
      id: "5",
      title: "Finalización del servicio ",
      description: (
        <>
          <p>• El servicio se completa según lo programado.</p>
          <p>
            • Realizamos un seguimiento con el cliente para asegurarnos de que
            esté satisfecho con la atención brindada.
          </p>
          <p>
            • Se ofrece la posibilidad de reprogramar servicios futuros o
            establecer un plan de cuidado recurrente.
          </p>
        </>
      ),
      icon: <VisitIcon></VisitIcon>,
      image: visitImage.src,
      iconStyle: {
        background: "rgb(79 70 229)",
      },
    },
    // Agrega más objetos aquí para cada elemento de la línea de tiempo
  ];