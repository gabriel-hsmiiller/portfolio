import { IPortfolioItem } from "../../src/models/portfolio-item";
import { PortfolioService } from "../../src/services/portfolio-service";
import Card from "./components/card";
import { StyledPortfolio } from "./style";

function Portfolio() {
    const portfolioService = PortfolioService();
    let portFolioItems: Array<IPortfolioItem> = portfolioService.getPortfolioItems();

    return (
        <StyledPortfolio oneColumn={portFolioItems.length <= 1} >
            {
                portFolioItems.map((item, index) => {

                    return (
                        <Card key={index} item={item} id={index} />
                    )
                })
            }
        </StyledPortfolio>
    )
}

export default Portfolio;