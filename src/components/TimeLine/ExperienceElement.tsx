import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export type ExperienceElementProps = {
  item: {
    date?: string;
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    image: string;
    iconStyle: React.CSSProperties;
    id: string;
  };
};

const ExperienceElement = ({ item }: ExperienceElementProps) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { ref, inView } = useInView({ triggerOnce: false });

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Edit / Close_Square">
        <path
          id="Vector"
          d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <div
      ref={ref}
      id={item.id}
      className="vertical-timeline-element text-gray-900"
    >
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0)" }}
        iconStyle={item.iconStyle}
        icon={item.icon}
        dateClassName="text-gray-600 dark:text-white"
        className=""
      >
        <div className="mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            closeIcon={closeIcon}
            classNames={{
              modal: "rounded-xl",
            }}
          >
            <div className="px-6 py-4 rounded-xl bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-100">
                {item.title}
              </h3>
              <div className="text-gray-100">{item.description}</div>
            </div>
          </Modal>

          <Image
            width={400}
            height={200}
            className="w-full h-48 object-cover"
            src={item.image}
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-100">
              {item.title}
            </h3>
            <div className="mt-4">
              {/* Aquí está el botón agregado */}
              <button
                onClick={onOpenModal} // Cambia esto a la función que necesites
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Mas Info
              </button>
            </div>
          </div>
        </div>
      </VerticalTimelineElement>
    </div>
  );
};

export default ExperienceElement;

/*
<div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
            <div className="text-gray-100">
              {item.description}
            </div>
          </div>*/
