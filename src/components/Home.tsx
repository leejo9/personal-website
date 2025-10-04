import { Link } from "react-router-dom";

export default function Home() {
    return (

        <main id="home" className="flex flex-col items-center w-full overflow-x-hidden">
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/66 backdrop-blur-md shadow-lg">
                <div className="justify-end max-w-7xl mx-auto py-4 flex items-center text-white">

                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><a href="#home" className="hover:text-green-300 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-green-300 transition">About</a></li>
                        <li><a href="#research" className="hover:text-green-300 transition">Research</a></li>
                        <li>
                            <Link to="/Creative" className="hover:text-green-300 transition">Creative</Link>
                        </li>
                        <li><a href="#footer" className="hover:text-green-300 transition">Contact</a></li>
                    </ul>
                </div>
            </nav>



        </main >
    );
}

