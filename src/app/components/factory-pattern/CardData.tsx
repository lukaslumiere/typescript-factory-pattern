import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { AiFillAlipayCircle } from "react-icons/ai";

export type CardItem = {
  id: number;
  icon: React.JSX.Element;
  title: string;
  description: string;
};

const createCardItem = (
  id: number,
  icon: React.JSX.Element,
  title: string,
  description: string
): CardItem => ({
  id,
  icon,
  title,
  description,
});

export const cardItems: CardItem[] = [
  createCardItem(1, <AiFillAccountBook />, "title 1", "description 1"),
  createCardItem(2, <AiFillAlert />, "title 2", "description 2"),
  createCardItem(3, <AiFillAlipayCircle />, "title 3", "description 3"),
];
