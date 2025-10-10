import { motion } from "framer-motion";

export default function Research() {
    return (
        <section
            id="research"
            className="w-full px-6 flex justify-center overflow-hidden"

        >
            <Section title="Research">
                {/* <div>
                    My main research interests are in computer vision, ML, algorithms, and possibly graphics. My current vision interests lie in primarily 4 domains: vision models for generative tasks and scene understanding, vision in healthcare, tools to assist artists, and the intersection of vision, algorithms, and graphics for procedural generation tasks and virtual environments.

                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>I am grateful for the mentorship I have recieved from my professors and mentors.</div>
                    <Card title="Right Triangles on a Grid">

                        <p>PI:{" "}
                            <a
                                href="https://www.cs.hunter.cuny.edu/~saad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-300 font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    Saad Mneimneh
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </p>

                        Explored applications of algorithms, time complexity, combinatorics, and other discrete math principles on a 3SUM-style problem.
                        <p>Paper:{" "}
                            <a className="font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    In Progress...
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-red-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </p>
                    </Card>

                    <Card title="VR Avatar Realism Study">

                        <p>PI:{" "}
                            <a
                                href="https://wolex.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-300 font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    Oyewole Oyekoya
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </p>

                        Investigated perception of motion-captured look-alike avatars.
                        <p>Paper:{" "}
                            <a href="https://dl.acm.org/doi/10.1145/3681758.3697999" className="font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    ACM Siggraph Asia '24 Technical Communications
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </p>

                    </Card>
                    <Card title="DV-PredNet">
                        <p>PI:{" "}
                            <a
                                href="https://hzshan.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-300 font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    Haozhe Shan
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </p>
                        Deep learning model for video next frame prediction inspired by PredNet and the human visual system.

                        <p>Paper:{" "}
                            <a href="https://openreview.net/forum?id=qLlgRvcFan" className="font-bold transition duration-300 group">
                                <span className="relative inline-block">
                                    ICCV RIWM Workshop '25
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-300 w-0 group-hover:w-full transition-all duration-500"></span>
                                </span>
                            </a></p>
                        {/* <div className="text-center mt-8">
                            <a className="px-4 py-2 font-bold text-white bg-gray-600 rounded-lg hover:bg-red-700 transition opacity-30">
                                Abstract
                              
                            </a>
                        </div> */}

                    </Card>
                </div>
            </Section>
        </section>
    );
}


type CardProps = {
    title: string;
    children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-gray-900 text-white shadow-lg hover:scale-[1.02] hover:bg-gray-900"
            // transition hover:-translate-y-[5px] 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-300">{children}</p>
            {/* <iframe src="https://itch.io/embed-upload/13287419?color=333333" allowfullscreen="" width="980" height="640"><a href="https://jlee9.itch.io/triangles">Play Triangles on itch.io</a></iframe> */}
        </motion.div>
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