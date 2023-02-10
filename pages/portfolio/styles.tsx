import styled from "@emotion/styled";

export const StyledPortfolio = styled.section`
    margin: 120px 20vw;
    width: 60vw;
    justify-content: center;
    column-gap: 40px;
    column-count: ${(props) => props.oneColumn ? '1' : '2'};
    column-fill: auto;
`