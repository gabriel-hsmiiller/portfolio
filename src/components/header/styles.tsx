import styled from 'styled-components';

export const StyledHeader = styled.header<any>`
    max-width: 100vw;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    background-image: linear-gradient(180deg, rgba(126, 87, 194, 0.3), rgba(0,0,0,0));
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .language-mode {
        display: flex;
        justify-content: flex-start;
    }

    .language-mode > input[type="radio"] { display: none; }

    .language-mode-select-box {
        position: relative;
    }

    .language-mode-select-box > .language-mode-selected {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transition: all ease-out .3s;
        width: 160px;
        padding: 0 12px;
    }

    .language-mode-select-box > .language-mode-select-options {
        position: absolute;
        display: ${props => props.display || 'flex'};
        flex-direction: column;
    }

    .language-mode-select-box > .language-mode-select-options > .language-mode-option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transition: all ease-out .3s;
        width: 160px;
        padding: 0 12px;
    }

    .language-mode-select-box > .language-mode-select-options > .language-mode-option:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transition: all ease-out .3s;
    }

    .navigation {
        display: flex;
        justify-content: flex-end;
        gap: 60px;
    }

    .navigation > a {
        color: #f0f0f0;
        transition: all ease-out .5s;
        font-family: 'Inter', sans-serif;
    }

    .navigation > a.selected {
        color: white;
        font-weight: 700;
        transition: all ease-out .5s;
    }
`;