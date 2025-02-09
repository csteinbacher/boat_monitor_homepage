import { FC } from "react";
import { StyledButton } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
