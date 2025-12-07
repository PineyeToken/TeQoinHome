// Components
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { AboutBusiness, BenefitsCart, BuildingSection, Header, Mission, ProgramsCard, Roadmap } from './components';

const Home = () => {
    return (
        <main className='md:overflow-[initial] overflow-hidden'>
            <Navbar />
            <Header />
            <AboutBusiness />
            <div>
                <BenefitsCart />
                <BuildingSection />
                <Mission />
                <ProgramsCard />
                <Roadmap />
            </div>
            <div className='absolute z-10 flex w-full justify-center'>
                <Footer />
            </div>
        </main>
    );
};

export default Home;
