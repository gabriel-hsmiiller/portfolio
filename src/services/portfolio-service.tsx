import portfolio from '../../assets/portfolio/portfolio.json';
import { IPortfolioItem } from '../models/portfolio-item';

export function PortfolioService() {

    return {
        getPortfolioItems(): Array<IPortfolioItem> {
            return portfolio.items;
        }
    }
}