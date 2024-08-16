import { Container } from "@/components/Container";
import PricingTable from "@/components/PricingTable/PricingTable";
import { pricingOptions } from "@/components/data";

import { FC } from "react";

interface PricingTableProps {
  data: Array<{
    title: string;
    price: number;
    description: string;
    features: string[];
    iconUrl: string;
  }>;
}

const PricingPage: FC<PricingTableProps> = function () {
  return (
    <Container>

      <Container>
      <h1>Precios para MalePet Care</h1>
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
