// Components
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { AboutBusiness, BenefitsCart, BuildingSection, Header, Mission } from './components';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutBusiness />
            <div className='overflow-hidden'>
                <BenefitsCart />
                <BuildingSection />
                <Mission />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
