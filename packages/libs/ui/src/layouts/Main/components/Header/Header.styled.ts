import styled from "styled-components";

export const StyledContainer = styled.header`
    width: 100%;
    height: 100px;
    background-color: white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
