import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <article>
      <header>
        <div>{icon}</div>
        <h2>{title}</h2>
      </header>
      <main>{description}</main>
    </article>
  );
};

export default Card;
