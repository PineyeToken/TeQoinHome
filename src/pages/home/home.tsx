// Components
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { AboutBusiness, BenefitsCart, BuildingSection, Header, Mission, ProgramsCard } from './components';

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
                <ProgramsCard />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
