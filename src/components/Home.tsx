import { motion } from "framer-motion";
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

type CardProps = {
    title: string;
    children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-gray-900 text-white shadow-lg hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-300">{children}</p>
        </motion.div>
    );
}


type Transition1 = {
    text: string;
};

function Transition1({ text }: Transition1) {
    return (
        <motion.div
            className="pr-6 pl-6 rounded-2xl text-white shadow-lg bg-opacity-0 bg-gray-200 hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
        >
            <a href="https://nerdcave.com/tailwind-cheat-sheet" className="mt-2 text-sm text-black hover:scale-[1.05]">{text}</a>

        </motion.div>
    );
}


type VideoDemo = {
    link: string;
};

function VideoDemo({ link }: VideoDemo) {
    return (
        <motion.div
            className="pr-6 pl-6 rounded-2xl text-white shadow-lg bg-opacity-0 bg-gray-200 hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
        >
            <p className="mt-2 text-sm text-black">{link}</p>

        </motion.div>
    );
}


type HeroSlogan = {
    badText: string;
    goodText: string;
};

function HeroSlogan({ badText, goodText }: HeroSlogan) {
    return (
        <div className="flex items-center justify-center space-x-4">
            <div className="relative inline-block">

                <motion.h1
                    className="text-lg text-black"
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} viewport={{ once: true }}

                >
                    <h1 className="text-5xl md:text-5xl font-bold text-green-300">{badText}</h1>
                </motion.h1>

                <motion.div
                    className="absolute left-0 top-1/2 h-[2px] bg-red-500 rounded"
                    initial={{ width: 0, x: -5, y: 1 }}
                    animate={{ width: "105%" }}
                    transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}

                />
            </div>

            <motion.h1
                className="text-lg text-black"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.9 }} viewport={{ once: true }}

            >
                {goodText}
            </motion.h1>
        </div>
    );

}

