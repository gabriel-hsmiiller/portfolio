import styled from "@emotion/styled";
import Link from "next/link";
import { RiLink } from "react-icons/ri";
import { SiFigma, SiGithub } from "react-icons/si";

export default function Card(props: any) {
    const {item} = props;

    return(
        <StyledCard invertRatio={item.platform === 'mobile'}>
            <div className="card-image" style={{ backgroundImage: `url("${item.image}")` }} />
            <div className="card-info">
                <span className="card-title">{item.name.substring(0, 20)}{item.name.length > 20 ? '...' : ''}</span>
                {
                    item.figma &&
                    <Link href={item.figma}>
                        <SiFigma size={20} />
                    </Link>
                }
                {
                    item.github &&
                    <Link href={item.github}>
                        <SiGithub size={20} />
                    </Link>
                }
                {
                    item.live &&
                    <Link href={item.live}>
                        <RiLink size={20} />
                    </Link>
                }
            </div>
        </StyledCard>
    );
}

const StyledCard = styled.article<any>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #303030;
    margin-bottom: 20px;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;

    .card-image {
        background-size: cover;
        background-position: center;
        width: calc(100% - 40px);
        margin: 20px;
        aspect-ratio: ${(props) => props.invertRatio ? '9 / 16' : '16 / 9'};
    }

    .card-info {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        > .card-title {
            font-size: 24px;
            
            @media screen and (max-width: 768px) {
                font-size: 18px;
            }
        }

        > a {
            position: absolute;
            right: 20px;
            color: #F0F0F0;
            bottom: 0;

            &:nth-of-type(3) {
                right: 84px;
            }

            &:nth-of-type(2) {
                right: 52px;
            }
        }
    }
`;