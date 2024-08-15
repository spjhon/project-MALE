"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "•	¿Puedo conocer al cuidador antes de contratar el servicio?",
    answer: "Recuerda que se realiza una visita previa con el cuidador.",
  },
  {
    question: "•	¿Qué sucede si mi mascota necesita atención veterinaria mientras estoy fuera?",
    answer: "Tenemos un protocolo para emergencias veterinarias el cual se explica en la visita previa. ",
  },
  {
    question: "•	¿Con qué frecuencia recibiré actualizaciones sobre mi mascota? ",
    answer:
      "En cada visita o paseo se hace la actualización con videos, fotos o video llamada y un resumen del comportamiento de cada peludito.",
  },
  {
    question: "¿Pueden cuidar a mi mascota si tiene necesidades médicas especiales? ",
    answer:
      "Claro que si, siempre y cuando sean informadas en la visita previa.",
  },
  {
    question: "¿Qué debo preparar antes de la llegada del cuidador? ",
    answer:
      "Debes de dejar todos los implementos al alcance de los cuidadores y en la visita previa informar donde se ubican los elementos correspondientes al cuidado de la mascota dependiendo de sus necesidades  (Alimentos, golosinas, Platos, medicamentos,  utensilios de aseo, arena, etc.)",
  },
];
