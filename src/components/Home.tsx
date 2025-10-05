import { Link } from "react-router-dom";

export default function Home() {
    return (

        <main id="#home" className="flex flex-col items-center w-full overflow-x-hidden">
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/66 backdrop-blur-md shadow-lg">
                <div className="justify-end max-w-7xl mx-auto py-4 flex items-center text-white">

                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
                        <li><Link to="/#about" className="hover:text-green-300 transition">About</Link></li>
                        <li><Link to="/#research" className="hover:text-green-300 transition">Research</Link></li>
                        <li><Link to="/creative" className="hover:text-green-300 transition">Creative</Link></li>
                        <li><Link to="/#contact" className="hover:text-green-300 transition">Contact</Link></li>

                    </ul>
                </div>
            </nav>



        </main >
    );
}

