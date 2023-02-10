import styled from "styled-components";

export const StyledHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .go-to-top {
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 40px;
        height: 40px;
        background: #7E57C2;border-radius: 50%;
        cursor: pointer;
    }

    hr {
        width: 80vw;
        max-width: 600px;
        margin: 0 10vw;
    }

    .face {
        margin-top: 100px;
        display: flex;
        height: calc(100vh - 100px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .face h1, .face h2 {
        font-weight: 400;
    }

    .face h1 {
        margin-top: 32px;
        font-size: 32px;
    }

    .face h2 {
        margin-top: 8px;
        font-size: 24px;
    }

    .face .arrow-container > svg {
        margin-top: 60px;
        transition: all ease-in-out .2s;
    }

    .face .arrow-container > svg:hover {
        transform: translateY(10px);
        cursor: pointer;
        transition: all ease-in-out .2s;
    }

    .common-informations {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
    }

    .common-informations h2, .common-informations h3, .common-informations article {
        text-align: center;
    }

    .common-informations > h2 {
        display: flex;
        align-items: center;
        margin: 60px auto;
        font-size: 32px;
    }

    .common-informations > h2 > svg {
        margin: 0 24px;
    }

    .common-informations .letter-container > h3 {
        margin-bottom: 20px;
        font-size: 32px;
    }

    .common-informations .letter-container article {
        font-size: 20px;
        max-width: 640px;
    }

    .skill-gauges-container {
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: center;
    }

    .skill-gauges {
        position: relative;
        border: solid 12px #4F4F4F;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-bottom: solid 12px transparent;
        user-select: none;
    }

    .skill-gauges-range {
        position: absolute;
        left: -12px;
        right: -12px;
        bottom: -12px;
        top: -12px;
        border: solid 12px #7E57C2;
        border-bottom: solid 12px transparent;
        border-radius: 50%;
    }

    .skill-gauges-range-medium {
        position: absolute;
        left: -12px;
        right: -12px;
        bottom: -12px;
        top: -12px;
        border: solid 12px #7E57C2;
        border-bottom: solid 12px transparent;
        border-left: solid 12px transparent;
        border-radius: 50%;
    }

    .skill-gauges-mask {
        position: absolute;
        left: -13px;
        right: -13px;
        bottom: -13px;
        top: -13px;
        border: solid 14px transparent;
        border-radius: 50%;
        border-bottom: solid 14px #2A2A2A;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skill-language {
        font-size: 32px;
    }

    .education-experience {
        margin: 60px 10vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 640px;
        width: 80vw;
    }

    .education, .experience {
        width: 100%;
    }

    .education-experience > h2 {
        margin-bottom: 20px;
    }

    .education-experience-item {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 20px;
        gap: 16px;
    }
`