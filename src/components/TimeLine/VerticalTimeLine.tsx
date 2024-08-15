"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceElement from "./ExperienceElement";


import {experiences} from "./data"



const TimeLineDemo = () => {
  return (
    <section>
      <VerticalTimeline lineColor={"rgb(79 70 229)"} animate={ false }>
        {experiences.map((item, index) => (
          <ExperienceElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default TimeLineDemo;
