import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Home() {
    return (

        <main id="home" className="flex flex-col items-center w-full overflow-x-hidden">
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/66 backdrop-blur-md shadow-lg">
                <div className="justify-end max-w-7xl mx-auto py-4 flex items-center text-white">

                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><HashLink smooth to="/" className="hover:text-green-200 transition">Home</HashLink></li>
                        <li><HashLink smooth to="/#about" className="hover:text-green-300 transition">About</HashLink></li>
                        <li><HashLink smooth to="/#research" className="hover:text-green-400 transition">Research</HashLink></li>
                        <li><Link to="/creative" className="hover:text-green-500 transition">Creative</Link></li>
                        <li><HashLink smooth to="/#footer" className="hover:text-green-600 transition">Contact</HashLink></li>

                    </ul>
                </div>
            </nav>



        </main >
    );
}

