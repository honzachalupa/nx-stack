import { Fragment } from "react";
import { StyledContainer, StyledIcon, StyledLink } from "./Breadcrumbs.styled";

interface IPath {
    label: string;
    path?: string;
}

interface IProps {
    paths: IPath[];
}

export const Breadcrumbs: React.FC<IProps> = ({ paths }) => (
    <StyledContainer>
        {paths.map(({ label, path }, i) => {
            const isLast = i === paths.length - 1;

            return (
                <Fragment>
                    <span key={label}>
                        <StyledLink to={path || ""} isInactive={!path}>
                            {label}
                        </StyledLink>
                    </span>

                    {!isLast && <StyledIcon name="arrowRight" />}
                </Fragment>
            );
        })}
    </StyledContainer>
);
