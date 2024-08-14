"use client";

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from './ExperienceElement';
import ContactIcon from './SVGIcons/ContactIcon';
import VisitIcon from './SVGIcons/VisitIcon';
import contactImage from "../../../public/TimeLine/contactImage.png"
import visitImage from "../../../public/TimeLine/visitImage.png"

const experiences = [
  {
    
    title: "Contactanos por WhatsApp, E-mail o Celular",
    description: "Utiliza nuestro canal de whatsapp y te responderemos cualquier duda en un santiamen",
    icon: <ContactIcon></ContactIcon>,
    image: contactImage.src,
    iconStyle: {
      background: 'rgb(79 70 229)',
    },
    
  },
  {
    
    title: "Visita Previa",
    description: "Una corta visita de 10 minutos en donde se observa la mascota y se cuadran detalles",
    icon: <VisitIcon></VisitIcon>,
    image: visitImage.src,
    iconStyle: {
      background: 'rgb(79 70 229)',
    },
  },
  // Agrega más objetos aquí para cada elemento de la línea de tiempo
];

const TimeLineDemo = () => {

  return (
    <section>
      <VerticalTimeline 
      lineColor={"rgb(79 70 229)"}
      
      >
        {experiences.map((item, index) => (
          <ExperienceElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default TimeLineDemo;


