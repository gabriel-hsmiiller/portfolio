import styled from "@emotion/styled";

export const StyledPortfolio = styled.section<any>`
    margin: 120px 20vw;
    width: 60vw;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
    column-count: ${(props) => props.oneColumn ? '1' : '2'};
    column-fill: 1fr;
    
    @media screen and (max-width: 768px) {
        column-count: 1;
        margin: 120px 5vw;
        width: 90vw;
    }
`