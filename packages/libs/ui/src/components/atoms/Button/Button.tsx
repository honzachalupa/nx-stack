import { IButtonProps } from "@honzachalupa/ui";
import { StyledButton } from "./Button.styled";

interface IProps extends IButtonProps {
    accent?: string;
}

export const Button: React.FC<IProps> = ({ accent, ...props }) => (
    <StyledButton accent={accent} {...props} />
);
