import { ITitleProps } from "../../..";
import { StyledTitle } from "./Title.styled";

export const Title: React.FC<ITitleProps> = (props) => (
    <StyledTitle {...props} />
);
