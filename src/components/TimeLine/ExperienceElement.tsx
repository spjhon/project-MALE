import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export type ExperienceElementProps = {
  item: {
    date?: string;
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    image: string;
    iconStyle: React.CSSProperties;
    
  };
};

const ExperienceElement = ({ item }: ExperienceElementProps) => {
  const { ref, inView } = useInView({ triggerOnce: true});

  return (
    <div ref={ref} className="vertical-timeline-element text-gray-900">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{background: "rgba(255, 255, 255, 0)", boxShadow: "none"}}
        contentArrowStyle={{borderRight: "7px solid  rgba(255, 255, 255, 0)"}}
        iconStyle={item.iconStyle}
        icon={item.icon}
        dateClassName="text-gray-600 dark:text-white"
        className=""
      >
        <div className="mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 dark: hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
          <Image
          width={400}
          height={200}
            className="w-full h-48 object-cover"
            src={item.image}
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
            <div className="text-gray-100">
              {item.description}
            </div>
          </div>
        </div>
      </VerticalTimelineElement>
    </div>
  );
};

export default ExperienceElement;
