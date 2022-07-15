import styled from "styled-components";

export const StyledContentContainer = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    overflow: hidden;
`;

export const StyledContent = styled.section`
    width: 100%;
    padding: 0 30px;
    overflow-y: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 100px;
    }
`;
