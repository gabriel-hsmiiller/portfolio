import { useRouter } from 'next/router';
import Home from './home/index.page';
import Header from '../src/components/header';

export default function Root({ Component, props }) {
    const router = useRouter();

    return (
        <main>
            <Header />
            {
            router.asPath === '/' ? 
                (<Home />)
            : (<Component {...props} />)
            }
        </main>
    );
}
