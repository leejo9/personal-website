import Home from '../components/Home';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Creative from '../components/Creative';
import Footer from '../components/Footer';

export default function MainPage() {
    return (
        <main className='scrollbar-hide relative min-h-screen overflow-x-hidden'>
            <Home />
            <Hero />
            <About />
            <Research />
            <Creative />
            <Footer />
        </main>


    );
}