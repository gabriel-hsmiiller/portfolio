import styled from "@emotion/styled"

export const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 180px;
    align-items: center;
    justify-content: center;

    .contact-links {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 160px;
        row-gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 40px;

        @media screen and (max-width: 768px) {
            margin: auto 10vw 10vw 40px;
            column-gap: 80px;
        }

        & .contact-item {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            color: #F0F0F0;
        }
    }

    .form-container {
        margin-bottom: 40px;

        & form {
            display: flex;
            flex-direction: column;
            align-items: center;

            & > .form-fields {
                display: grid;
                height: 256px;
                max-width: 660px;
                width: 80vw;
                margin: 40px 10vw 20px 10vw;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 32px 32px 160px;
                column-gap: 20px;
                row-gap: 16px;

                @media screen and (max-width: 768px) {
                    height: 304px;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: 32px 32px 32px 160px;
                }

                .grid-item-span {
                    grid-column: 1 / 3;
                    
                    @media screen and (max-width: 768px) {
                        grid-column: inherit;
                    }
                }

                input, textarea {
                    background: transparent;
                    border: solid 1px #F0F0F0;
                    border-radius: 16px;
                    color: #F0F0F0;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-family: 'Inter', sans-serif;
                }

                textarea {
                    resize: none;
                }
            }

            button {
                padding: 7px 25px;
                font-size: 20px;
                border-radius: 20px;
                border: none;
                background-color: #7E57C2;
                color: white;
                font-family: 'Noto Serif', serif;
                cursor: pointer;
            }
        }
    }

    h3 {
        font-size: 24px;
        margin: 50px auto;
    }

    .contact-sent-toast {
        position: absolute;
        bottom: 40px;
        right: 40px;
        background-color: #5C9E3144;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        transition: all ease 0.4s;

        & > .contact-sent-toast-close {
            align-self: flex-end;
            cursor: pointer;
        }

        & > .contact-sent-toast-message {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 20px;
            margin: auto 12px 24px 12px;
            font-family: 'Inter', sans-serif;
        }
    }
`;