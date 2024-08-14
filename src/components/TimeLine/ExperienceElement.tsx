import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';

export type ExperienceElementProps = {
  item: {
    date: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    iconStyle: React.CSSProperties;
    contentStyle: React.CSSProperties;
    contentArrowStyle: React.CSSProperties;
  };
};

const ExperienceElement = ({ item }: ExperienceElementProps) => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={item.contentStyle}
        contentArrowStyle={item.contentArrowStyle}
        date={item.date}
        iconStyle={item.iconStyle}
        icon={item.icon}
        
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default ExperienceElement;
