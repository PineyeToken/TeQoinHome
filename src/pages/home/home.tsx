// Components
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { AboutBusiness, BenefitsCart, BuildingSection, Header, Mission, ProgramsCard, Roadmap } from './components';

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
                <Roadmap />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
