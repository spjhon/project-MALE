"use client";

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from './ExperienceElement';

const experiences = [
  {
    date: "CONTACTANOS",
    title: "Por WhatsApp, E-mail o Celular",
    subtitle: "Por WhatsApp, E-mail o Celular",
    description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    icon: "icon",
    className:"bg-red-500 dark:bg-blue-300",
    iconStyle: {
      background: 'rgb(79 70 229)',
      color: 'red',
      borderColor: 'red',
      boxShadow: '2px 2px 5px red',

    },
    contentStyle: {
      background: "bg-red",
      color: 'rgb(79 70 229)'
    },
    contentArrowStyle: {
      borderRight: '7px solid  rgb(79 70 229)'
    }
  },
  {
    date: "2010 - 2011",
    title: "Art Director",
    subtitle: "San Francisco, CA",
    description: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    icon: "icon",
    iconStyle: {
      background: 'rgb(79 70 229)',
      color: 'red'
    },
    contentStyle: {
      background: 'rgb(79 70 229)',
      color: 'red'
    },
    contentArrowStyle: {
      borderRight: '7px solid  rgb(79 70 229)'
    }
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
