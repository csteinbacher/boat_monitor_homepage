import { FC } from "react";
import { CardContainer } from "./styles";

type CardProps = {
  title?: string;
  children?: React.ReactNode;
};

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      {title ? <h3>{title}</h3> : null}
      <div>{children}</div>
    </CardContainer>
  );
};

export default Card;
