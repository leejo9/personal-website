import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Creative() {
    return (

        <main id="creative" className="flex flex-col items-center w-full overflow-x-hidden">
            <Section title="Creative Work">
                <div className="mt-4 space-y-4">
                    <p> <a className="text-indigo-400 hover:underline">Sketches & Digital Art</a></p>
                    <p> <a className="text-indigo-400 hover:underline">Fantasy Stories & Worldbuilding</a></p>
                    <p>  <Link to="/creative#amvSection" className="text-indigo-400 hover:underline">Award-winning AMVs</Link></p>

                    <div className="w-full flex justify-center">
                        <iframe className=" rounded-lg shadow-md w-full max-w-xl"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/g_l2C9B9GNo&ab_channel=ACFNature?autoplay=0&mute=0&loop=0&playlist=g_l2C9B9GNo&ab_channel=ACFNature"
                            title="AMV Preview"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="py-3"> <Link to="/creative" className="text-gray-900 font-bold bg-green-200 opacity-85 rounded-lg px-5 py-2 hover:bg-green-600 hover:px-6 hover:py-3 hover:text-white hover:opacity-100">
                        View my creative work!
                    </Link>
                    </p>

                </div>
            </Section>



        </main >
    );
}


type SectionProps = {
    title: string;
    children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
    return (
        <motion.section
            className="w-full max-w-4xl px-6 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">{title}</h2>
            {children}
        </motion.section>
    );
}