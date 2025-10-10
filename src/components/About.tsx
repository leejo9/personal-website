import { motion } from "framer-motion";

// "https://nerdcave.com/tailwind-cheat-sheet" 

export default function About() {
    return (
        <section
            id="about"
            className="w-full px-6 flex justify-center overflow-hidden scroll-smooth"
        >
            <Section title="About Me">
                <div className="w-full flex justify-center">
                    <p className="text-lg text-black max-w-xl leading-relaxed">
                        I’m currently researching <span className=""> computer vision </span>
                        and its applications in visual mediums. I am interested in both applied and foundational research, as well as software engineering roles. I hope to put my creativity to good use :). I also hope to eventually branch into developing immersive worlds (
                        <span className="relative group text-green-700 cursor-help">
                            game development
                            <span className="hidden group-hover:inline-block absolute left-0 bottom-full mt-2 text-sm px-3 py-1 rounded z-10 whitespace-normal bg-transparent bg-opacity-0">
                                <Transition1 text="itch.io link" />
                            </span>
                        </span>, XR).
                    </p>

                </div>
                <div className="w-full flex justify-center py-6">
                    <p className="text-lg text-black max-w-xl leading-relaxed">

                        Outside of computer science, I really enjoy all types of artistic hobbies, from drawing to writing to editing to playing instruments (guitar, clarinet). I also like going on walks at night and enjoying nature.

                    </p>

                </div>
            </Section>
        </section>
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

type Transition1 = {
    text: string;
};

function Transition1({ text }: Transition1) {
    return (
        <motion.div
            className="pr-6 pl-6 rounded-2xl text-white shadow-lg bg-opacity-0 bg-gray-200 hover:underline scale-[1.02] transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
        >
            <a href="https://jlee9.itch.io/" className="mt-2 text-sm text-black hover:scale-[1.05]">{text}</a>
        </motion.div>
    );
}

