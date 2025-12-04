// Components
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { AboutBusiness, BenefitsCart, BuildingSection, Header } from './components';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <AboutBusiness />
            <BenefitsCart />
            <BuildingSection />
            <Footer />
        </main>
    );
};

export default Home;
