import React from "react";
import Card from "@/app/components/ui/Card";
import { CardItem, cardItems } from "@/app/components/factory-pattern/CardData";

const Hero = () => {
  return (
    <section>
      {cardItems.map(({ id, ...props }: CardItem) => (
        <Card key={id} {...props} />
      ))}
    </section>
  );
};

export default Hero;
