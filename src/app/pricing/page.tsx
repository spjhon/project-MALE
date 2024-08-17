import { Container } from "@/components/Container";
import PricingTable from "@/components/PricingTable/PricingTable";
import { pricingOptions } from "@/components/data";

import { FC } from "react";



const PricingPage: FC = function () {
  return (
    <Container>

<Container className="flex flex-wrap lg:p-2">
        <div className="flex items-center justify-center w-full">
          <div className="mb-8">
            <h1 className="pt-10 text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:pt-0 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Precios que te encantaran
            </h1>
            <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              
              Tabla de precios de los servicos ofrecidos por MalePet Care Manizales
            </p>

            
          </div>
        </div>
        
      </Container>


      <Container>

      <div className="flex flex-wrap gap-4">
      {pricingOptions.map((option, index) => (
        <PricingTable
          key={index}
          title={option.title}
          price={option.price}
          description={option.description}
          features={option.features}
          iconUrl={option.iconUrl}
        />
      ))}
    </div>
      </Container>

    </Container>
  );
};

export default PricingPage;
