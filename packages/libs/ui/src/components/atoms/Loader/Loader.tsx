import { ILoaderProps } from "../../..";
import { StyledLoader } from "./Loader.styled";

export const Loader: React.FC<ILoaderProps> = (props) => (
    <StyledLoader {...props} />
);
