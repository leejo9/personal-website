import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import ThemeToggle from "../components/ToggleTheme";

// model stuff
import React, { Suspense } from "react";
import ModelViewer from "../components/ModelViewer";
const Crab = React.lazy(() => import("../components/Crab"));
const Dragon = React.lazy(() => import("../components/Dragon"));


// animations
const pageVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-20%", opacity: 0 }
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4
} as const;

export default function Home() {
    const [activeSection, setActiveSection] = useState("home");

    return (
        <div className="w-full h-screen bg-transparent dark:bg-neutral-900 flex flex-col justify-center items-center overflow-hidden transition-colors duration-300">

            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm shadow-lg transition-colors duration-300 bg-white/60 dark:bg-neutral-900/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <button
                        onClick={() => setActiveSection("home")}
                        className="relative group font-bold text-lg tracking-tight"
                    >
                        <span className="text-gray-900 dark:text-gray-100">
                            JDkL.
                        </span>

                        <span className="absolute left-0 top-0 overflow-hidden w-0 whitespace-nowrap text-green-500 dark:text-green-400 transition-[width] duration-300 ease-in-out group-hover:w-full">
                            JDkL.
                        </span>
                    </button>

                    <div className="flex items-center gap-6">
                        <ul className="flex space-x-6">
                            {/* empty for now... this is where links to other pages might be introduced if needed*/}
                        </ul>

                        <div className="border-l pl-6 border-gray-300 dark:border-gray-700">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

            </nav>


            {/* 8cbd32ea */}
            <div className="flex flex-row w-full max-w-7xl h-full border-x border-gray-200 dark:border-white/5 bg-[#8cbd32]/50 backdrop-blur-sm transition-colors duration-300">
                {/* LEFT COLUMN dark:bg-[#ADEBB3]/30*/}
                <aside className="
                    relative 
                    w-[350px] lg:w-[400px] h-screen flex-shrink-0 pt-20
                    bg-[#24922e]/30 dark:bg-[#adebb3]/30
                    border-r border-gray-200 dark:border-white/5 
                    flex flex-col p-10 z-20 transition-colors duration-300
                ">
                    <AnimatePresence>
                        {activeSection !== "home" && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                                animate={{ opacity: 1, scale: 1, x: "50%", y: "-50%" }} // 50% pushes it onto the border
                                exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                                onClick={() => setActiveSection("home")}
                                className="absolute right-0 top-1/2 w-10 h-10 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors group z-50"
                                aria-label="Return to Home"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all group-hover:-translate-x-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </motion.button>
                        )}
                    </AnimatePresence>

                    {/* Profile Pic */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-40 h-40 rounded-full bg-gray-200 dark:bg-neutral-200 border border-gray-300 dark:border-white/10 shadow-2xl mb-8 flex items-center justify-center overflow-hidden mx-auto  "
                    >

                        <img
                            src="./src/assets/pidc.jpg"
                            alt="😶"
                            className="object-[40%_10%] w-full h-full object-cover text-black flex justify-center items-center text-center"
                        />
                    </motion.div>

                    <div className="text-center flex flex-col h-full">
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tighter transition-colors">John Lee</h1>

                        <p className="mt-6 pb-8 text-md md:text-lg max-w-md text-gray-700 dark:text-gray-200">
                            Aspiring <TypingAnimation /> <br /> and <span className="text-green-700 dark:text-[#ADEBB3]/90">artist</span>.
                        </p>

                        <div className="flex flex-col items-center gap-3 mb-6 text-sm font-bold text-gray-600 dark:text-gray-200 tracking-widest uppercase transition-colors">                            <NavButton label="Home" current={activeSection} target="home" onClick={setActiveSection} />
                            <NavButton label="Experience" current={activeSection} target="experience" onClick={setActiveSection} />                            <NavButton label="Research" current={activeSection} target="research" onClick={setActiveSection} />
                            <NavButton label="Projects" current={activeSection} target="projects" onClick={setActiveSection} />
                            <NavButton label="Creative" current={activeSection} target="creative" onClick={setActiveSection} />
                        </div>

                        <div className="mt-auto">
                            <div className="w-full h-px bg-gray-300 dark:bg-white/10 mb-4" />
                            <div className="flex flex-col gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 tracking-widest uppercase transition-colors">

                                <div >
                                    <a href="mailto:jdklee4@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-white transition">Email{""}</a>
                                    <button
                                        onClick={() => navigator.clipboard.writeText("jdklee4@gmail.com")}
                                        className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-white transition-colors"
                                        title="Copy Email"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                </div>

                                <a href="https://github.com/leejo9" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-white transition">GitHub</a>
                                <a href="https://www.linkedin.com/in/jdk104" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-white transition">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </aside>

                {/*  RIGHT COLUMN */}
                <main className="flex-1 h-full relative overflow-hidden bg-transparent transition-colors duration-300">

                    <AnimatePresence mode="wait">

                        {activeSection === "home" && (
                            <motion.div
                                key="home"
                                variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}
                                className="absolute inset-0 overflow-y-auto scrollbar-hide p-10 lg:p-16"
                            >
                                <HomeContent setSection={setActiveSection} />
                            </motion.div>
                        )}

                        {activeSection === "research" && (
                            <motion.div
                                key="research"
                                variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}
                                className="absolute inset-0 overflow-y-auto scrollbar-hide p-10 lg:p-16"
                            >
                                <ResearchContent />
                            </motion.div>
                        )}

                        {activeSection === "experience" && (
                            <motion.div
                                key="experience"
                                variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}
                                className="absolute inset-0 overflow-y-auto scrollbar-hide p-10 lg:p-16"
                            >
                                <ExperienceContent />
                            </motion.div>
                        )}

                        {activeSection === "projects" && (
                            <motion.div
                                key="projects"
                                variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}
                                className="absolute inset-0 overflow-y-auto scrollbar-hide p-10 lg:p-16"
                            >
                                <ProjectsContent />
                            </motion.div>
                        )}

                        {activeSection === "creative" && (
                            <motion.div
                                key="creative"
                                variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}
                                className="absolute inset-0 overflow-y-auto scrollbar-hide"
                            >
                                <CreativeContent />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </main>

            </div>
        </div >
    );
}



function HomeContent({ setSection }: { setSection: (s: string) => void }) {
    return (
        <div className="max-w-3xl space-y-8 pt-20">
            <section>
                <h2 className="text-m font-bold text-green-600 dark:text-green-500 uppercase tracking-widest mb-4 transition-colors">Brief Bio</h2>
                <p className="text-xl text-gray-700 dark:text-gray-200 font-light leading-relaxed transition-colors">
                    I'm a recent computer science graduate with interests in software engineering, research, and game development. I'm particularly interested in working on visual applications, algorithms, optimization, data, and creative expression through digital mediums. I hope to one day pursue art as well.
                </p>
            </section>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-widest transition-colors">Selections</h2>
                </div>

                <div className="space-y-4">
                    <WorkCard setSection={setSection} title="Education" cat="CV / Engineering" desc="My education history" wipeText="Experience" targetSection="experience" />
                    <WorkCard setSection={setSection} title="DV-PredNet" cat="Research" desc="Video next-frame prediction model inspired by the human visual system" wipeText="Research" targetSection="research" />
                    <WorkCard setSection={setSection} title="Pokémon Card Cataloger" cat="CV / Engineering" desc="Upload Pokémon Cards to a virtual catalog" wipeText="Projects" targetSection="projects" />
                    <WorkCard setSection={setSection} title="AMVs" cat="CV / Engineering" desc="Award-winning edits" wipeText="Creative" targetSection="creative" />

                </div>
            </section>

            <div className="h-20 text-gray-600 dark:text-gray-300 text-sm flex items-end">© 2026 John Lee</div>
        </div>
    );
}
function ResearchContent() {
    return (
        <div className="max-w-3xl space-y-4 pt-20">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-500 border-b border-green-700/30 dark:border-green-200/40 pb-4 transition-colors">
                Publications
            </h2>

            <div className="space-y-4 text-md text-gray-700 dark:text-gray-300 leading-relaxed">

                {/* PUB */}
                <div>
                    <p>
                        <a className="font-semibold text-base dark:text-gray-200">
                            DV-PredNet: Biologically Inspired Video Next Frame Prediction with Higher-level Semantics
                        </a>. <br />
                        <strong>John Lee*</strong>, <a href="https://hzshan.github.io/" className="text-green-700 dark:text-green-400  hover:underline">Haozhe Shan</a>*. <br />
                        <em>ICCV 2025 Reliable and Interactable World Models (RIWM) Workshop</em>. <br />
                        <a
                            href="https://openreview.net/forum?id=qLlgRvcFan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            paper.
                        </a> {" "}
                        <a
                            href="prednet_poster.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            poster.
                        </a>
                    </p>

                </div>

                {/* PUB */}
                <div>
                    <p>
                        <a
                            className="font-semibold dark:text-gray-200"
                        >
                            Mapping and Recognition of Body Movements on Another Person's Look-Alike Avatar

                        </a>. <br />
                        Kwame Agyemang Baffour, Anthony Williams, <strong>John Lee</strong>, <a href="https://wolex.com/" className="text-green-700 dark:text-green-400  hover:underline"> Oyewole Oyekoya.</a> <br />

                        <em>ACM SIGGRAPH Asia 2024 Technical Communications. </em><br />
                        <a
                            href="https://dl.acm.org/doi/10.1145/3681758.3697999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            paper.
                        </a>

                    </p>
                </div>

                {/* PUB */}
                <div>
                    <p>
                        <a
                            className="font-semibold dark:text-gray-200"
                        >
                            Right Triangles on a Grid
                        </a>. <br />
                        <a href="https://www.cs.hunter.cuny.edu/~saad/index.php" className="text-green-700 dark:text-green-400 hover:underline">Saad Mneimneh</a>, Salman Abou-Said, <strong>John Lee</strong>, Rik Sengupta. <br />

                        <em>JCDCG^3 2026</em>. <br />
                        <a
                            href="https://www.overleaf.com/project/65cba1154041ca18aa1e158c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            paper.
                        </a>{" "}
                        <a
                            href="/triangle_poster.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            poster.
                        </a>{" "}
                        <a
                            href="https://www.cs.hunter.cuny.edu/~saad/triangles/web/#/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            visualization 1.
                        </a>{" "}
                        <a
                            href="https://jlee9.itch.io/triangles"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 dark:text-green-400 text-sm italic hover:underline"
                        >
                            visualization 2.
                        </a>
                    </p>
                </div>
                <div className="text-sm mt-10 italic">
                    For a more detailed timeline, refer to the Experience section. Links to my mentors' webpages on hover+click.
                </div>
            </div>

            <div className="h-20" />
        </div>
    );
}
function ExperienceContent() {
    return (
        <div className="max-w-3xl space-y-6 pt-20 pb-32">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-500 border-b border-gray-300 dark:border-white/10 pb-4 transition-colors">
                Education & Experience
            </h2>

            <div className="relative pl-6 border-l-2 border-green-500/30 dark:border-green-500/20 space-y-10">

                {/* EDUCATION  */}
                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-green-500 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">CUNY Hunter College</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Aug 2022 — June 2026</span>
                    </div>

                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-4">
                        B.A. in Computer Science, Minor in Mathematics
                    </p>

                    {/* Honors */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800/50">
                            Phi Beta Kappa
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800/50">
                            Magna cum laude
                        </span>
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800/50">
                            Department Honors
                        </span>

                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800/50">
                            GPA: 3.88/4.0
                        </span>
                    </div>

                    {/* TA */}
                    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-400">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-gray-200 mb-2">Undergraduate Teaching Assistant</h4>
                            <ul className="list-disc list-inside space-y-1 ml-1 marker:text-green-500/50 dark:text-gray-300">
                                <li><strong>CSCI 335:</strong> Software Design and Analysis III (S24)</li>
                                <li><strong>CSCI 235:</strong> Software Design and Analysis II (F23, S24, F24)</li>
                                <li><strong>CSCI 150:</strong> Discrete Mathematics (S24, F24, S25, F25)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Student Organizations</h4>
                            <p className="ml-1 dark:text-gray-300">Hunter Has Hearts (23, 24)</p>
                            <ul className="list-disc list-inside space-y-1 ml-1 marker:text-green-500/50 dark:text-gray-300">
                                <li><strong>Awards:</strong> Hunter Has Hearts Leadership & Service Award x2</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* EXPERIENCE  */}
                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-blue-400 dark:border-blue-500 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">SWE</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">???</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Google
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium italic ">
                        team matching 🙏
                    </p>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                        description here
                    </p> */}
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Agents Researcher</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Jan 2026 — May 2026</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Hunter College, Distributed Artificial Intelligence Research (DAIR) Lab
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        PI: <a href="https://anraja.commons.gc.cuny.edu/" className="text-green-700 dark:text-green-400  hover:underline">Anita Raja</a>
                        <br />
                        Focus: Artificial Intelligence, Reinforcement Learning, Algorithms
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">REU Research Intern</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">May 2025 — Aug 2025</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Columbia University, Arni REU x SURE
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Mentor: <a href="https://hzshan.github.io/" className="text-green-700 dark:text-green-400  hover:underline">Haozhe Shan</a>
                        <br />
                        Focus: Machine Learning, Computer Vision
                        <br />
                        Presented work @ ICCV (poster), SURE Symposium (oral)
                        <br />
                        <a className="italic text-xs">Special thanks to the Hunter CS Department for funding my trip</a>
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">G-SWEP Mentee</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Oct 2024 — Dec 2024</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Google
                    </p>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                        description here
                    </p> */}
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">VR Research Assistant</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Jan 2024 — May 2024</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Hunter College, Virtual Reality Lab
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        PI: <a href="https://wolex.com/" className="text-green-700 dark:text-green-400  hover:underline"> Oyewole Oyekoya</a>
                        <br />
                        Focus: Virtual Reality, HCI
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineering Intern</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Feb 2023 — May 2023</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        SPEAKHIRE
                    </p>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                        description here
                    </p> */}
                </div>

                <div className="relative">
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-gray-50 dark:bg-neutral-950 border-2 border-gray-300 dark:border-gray-600 rounded-full" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Algorithms Researcher</h3>
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-100">Jan 2023 — June 2023</span>
                    </div>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Hunter College
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        PI: <a href="https://www.cs.hunter.cuny.edu/~saad/index.php" className="text-green-700 dark:text-green-400 hover:underline">Saad Mneimneh</a>
                        <br />
                        Focus: Algorithms, Discrete Geometry, Discrete Mathematics (combinatorics)
                        <br />
                        Presented work @ Hunter UGRC (poster), Jane Street Math Day (poster)
                    </p>
                </div>


            </div>
        </div>
    );
}

function ProjectsContent() {
    return (
        <div className="max-w-3xl space-y-6 pt-20 pb-32">

            <h2 className="text-3xl font-bold text-green-600 dark:text-green-500 border-b border-gray-300 dark:border-white/10 pb-4 transition-colors">
                Projects & Games
            </h2>
            {/* main projects */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Software Engineering</h3>
                <div className="space-y-4">
                    <ExpandableProjectCard
                        title="Pokémon Card Cataloger"
                        subtitle="Computer Vision"
                        desc="A card identification pipeline using a fine-tuned YOLOv8 model and OpenCV. Built a scalable search engine by indexing the TCG Database with perceptual hashing (pHash) and retrieving matches by Hamming distance."
                        techStack={["Python", "YOLOv8", "OpenCV", "PaddleOCR"]}
                        link="https://github.com/leejo9/Pokemon-Card-Catalog"
                        linkText="View on GitHub"
                        image=""
                    />

                    <ExpandableProjectCard
                        title="Summer Camp Attendance App"
                        subtitle="Full-Stack"
                        desc="A full-stack React/Node.js attendance system deployed on Render using an Express/PostgreSQL backend to digitize workflows for 10+ classrooms."
                        techStack={["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"]}
                    // link="#"
                    // linkText="View Demo"
                    />
                    <ExpandableProjectCard
                        title="Subtitle Translation Pipeline"
                        subtitle="Computer Vision & Image Processing"
                        desc="Computer vision pipeline to extract and translate Korean subtitles from video frames into English using several image processing algorithms, EasyOCR, and the Google Cloud Translation API."
                        techStack={["Python", "OpenCV", "EasyOCR", "GCP"]}
                        link="https://github.com/leejo9/subtitle-translation"
                        linkText="View on Github"
                    />
                </div>
            </section>



            {/* GAMES */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Unity Games</h3>
                <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">Games built with Unity and C#, hosted on itch.io. Full collection on my itch.io profile.</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <GameCard
                        title="RPG game"
                        link="https://jlee9.itch.io/rpg"
                    />
                    <GameCard
                        title="Island Exploration"
                        link="https://jlee9.itch.io/island-exploration"
                    />
                    <GameCard
                        title="Multiplayer Snowball Fight"
                        link="https://jlee9.itch.io/snowball-fight"
                    />
                </div>
            </section>

            {/* 3D MODELS */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3D Models</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-8">
                    3D models developed and animated using Blockbench. Intended for my Minecraft Mod.
                </p>

                <div className="space-y-12">


                    {/* DRAGON */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="w-full mx-auto h-[400px] bg-gray-200 dark:bg-black/40 rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-white/10">
                            <Suspense fallback={<div className="flex justify-center items-center h-full text-gray-500 font-mono text-sm tracking-widest uppercase">Loading Dragon...</div>}>
                                <ModelViewer cameraPosition={[-8, 11, -6]} target={[0, 8, 0]}>
                                    <Dragon scale={1.3} />
                                </ModelViewer>
                            </Suspense>
                        </div>
                    </motion.div>

                    {/* CRAB */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="w-full mx-auto h-80 bg-gray-200 dark:bg-black/40 rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-white/10">
                            <Suspense fallback={<div className="flex justify-center items-center h-full text-gray-500 font-mono text-sm tracking-widest uppercase">Loading Crab...</div>}>
                                <ModelViewer cameraPosition={[4, 2, -8]}>
                                    <Crab scale={4.8} />
                                </ModelViewer>
                            </Suspense>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

//just copy and pasted from previous creative page
function CreativeContent() {
    const [showAward, setShowAward] = useState(false);

    return (
        <div className="relative flex flex-col items-center w-full min-h-full overflow-x-hidden bg-gradient-to-b from-sky-400 to-blue-100 scroll-smooth pb-32">

            {/* BACKGROUND CLOUDS */}
            <motion.img
                src={cloud1}
                alt="A floating cloud"
                className="absolute top-[10%] left-[-10%] w-1/2 md:w-1/3 opacity-70 z-0 pointer-events-none"
                animate={{ x: ["-10%", "130%"], y: ["0%", "5%", "0%"] }}
                transition={{ duration: 150, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.img
                src={cloud1}
                alt="A floating cloud"
                className="absolute top-[50%] left-[-10%] w-1/3 md:w-1/4 opacity-60 z-0 pointer-events-none"
                animate={{ x: ["-10%", "130%"], y: ["0%", "5%", "0%"] }}
                transition={{ duration: 150, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.img
                src={cloud2}
                alt="another floating cloud"
                className="absolute top-[30%] left-[50%] w-1/2 md:w-1/3 opacity-60 z-0 pointer-events-none"
                animate={{ x: ["0%", "-200%"], y: ["0%", "-8%", "0%"] }}
                transition={{ duration: 160, repeat: Infinity, ease: "easeOut" }}
            />

            <section className="flex flex-col items-center justify-center text-center py-20 md:py-32 z-20">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Art Deposit
                </motion.h1>
            </section>

            <section className="w-full max-w-4xl px-6 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CreativeCard title="Sketches">
                        <p className="text-gray-700">A collection of my traditional (and occasionally digital; see: clouds) drawings. Primarily a log of my art progression...</p>
                        <span className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600/80 rounded-lg cursor-not-allowed">
                            In Progress?
                        </span>
                    </CreativeCard>

                    <CreativeCard title="Writing & Worldbuilding">
                        <p className="text-transparent text-base bg-clip-text font-bold bg-gradient-to-r from-green-700 to-sky-5=800/10">To a world beyond, with wonders of magic and nature... </p>
                        <a className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition">
                            In Progress..?
                        </a>
                    </CreativeCard>

                    <CreativeCard title="AMVs (Anime Music Videos)">
                        <p className="text-gray-700">Award-winning video editing projects spanning poignant narratives to action-filled, cinematic edits. Edited with Premiere Pro.</p>
                        <a className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition">
                            View Videos (well.. they're right under this)
                        </a>
                    </CreativeCard>
                </div>
            </section>

            <section id="amvSection" className="w-full max-w-4xl px-6 py-20 z-20 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-md">AMV Showcase</h2>

                    {/* STILL WITH YOU */}
                    <div className="mb-16">
                        <div className="w-full flex justify-center">
                            <iframe className="rounded-xl shadow-2xl w-full max-w-xl aspect-video border-4 border-white/20"
                                src="https://www.youtube.com/embed/g_l2C9B9GNo"
                                title="Still With You AMV"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-6 text-center text-white">
                            <h3 className="text-2xl font-bold drop-shadow-md">Still With You - 정국 Jungkook</h3>
                            <p className="text-sm font-semibold text-sky-800 mt-2 bg-white/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
                                🏆 Best Romance - Anime USA '23, 🥈 Finalist - Tsukino-Con '24, Derpycon '23, Desucon Frostbite '23, Setsucon '23
                            </p>
                        </div>
                    </div>
                    {/* WARRIORS */}
                    <div className="mb-16">
                        <div className="w-full flex justify-center">
                            <iframe className="rounded-xl shadow-2xl w-full max-w-xl aspect-video border-4 border-white/20"
                                src="https://www.youtube.com/embed/dlnk6Ag6J4k"
                                title="Warriors AMV"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-6 text-center text-white">
                            <h3 className="text-2xl font-bold drop-shadow-md">Warriors</h3>

                            <p className="text-sm font-semibold text-sky-800 mt-2 bg-white/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
                                <span className="relative inline-block">
                                    <button
                                        onClick={() => setShowAward(!showAward)}
                                    >
                                        🏆
                                    </button>

                                    {showAward && (
                                        <span className="absolute left-1/2 top-full z-[9999] mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-normal text-white shadow-lg">
                                            testte  useless easter egg discovered!
                                        </span>
                                    )}
                                </span> Best Action - Nekocon '23, 🥈 Runner-up - Otakuthon  '23, 🏅 Finalist - Tsukino-Con '24, Desucon Frostbite '23, PMX '22, Anime Banzai HM
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://www.youtube.com/@acfnature8051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 font-bold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all hover:-translate-y-1 inline-block">
                            See More on YouTube
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );

}


// UI COMPONENTS


function CreativeCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-white/40 backdrop-blur-md text-gray-900 shadow-lg border border-white/40 hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-xl font-bold text-sky-900 mb-2">{title}</h3>
            <div className="text-sm">{children}</div>
        </motion.div>
    );
}


function GameCard({ title, link }: { title: string, link: string }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
        >
            <div className="
                flex items-center justify-between w-full py-3 px-5 
                rounded-md border border-gray-200 dark:border-white/10 
                bg-gray-100/50 dark:bg-white/20 
                transition-all duration-300 ease-out 
                group-hover:translate-x-4 group-hover:bg-white/70 dark:group-hover:bg-white/20 
                group-hover:border-green-400/50 dark:group-hover:border-green-500/50 group-hover:shadow-sm
            ">
                <span className="font-semibold tracking-wide text-gray-700 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                    {title}
                </span>

                <span className="text-green-600 dark:text-green-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                    →
                </span>
            </div>
        </a>
    );
}

function NavButton({ label, current, target, onClick }: { label: string, current: string, target: string, onClick: (s: string) => void }) {
    const isActive = current === target;
    return (
        <button
            onClick={() => onClick(target)}
            className={`text-left transition-colors duration-200 flex items-center ${isActive ? "text-green-700 dark:text-[#ADEBB3]/90" : "hover:text-green-600 dark:hover:text-white"
                }`}
        >
            <span className={`mr-2 transform transition-transform ${isActive ? "scale-100" : "scale-0 w-0 mr-0"}`}>■</span>
            {label}
        </button>
    );
}

function WorkCard({ title, desc, wipeText, targetSection, setSection }: { title: string, cat: string, desc: string, wipeText: string, targetSection: string, setSection: (s: string) => void }) {
    return (
        <div className="group relative overflow-hidden p-6 rounded-xl border transition-all cursor-pointer
            bg-gray-100/60 border-gray-200 hover:border-green-500/30 hover:shadow-md
            dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 
        ">
            {/* 8cbd32ea */}
            <div
                className="absolute top-0 right-0 h-full rounded-xl
               bg-[#8cbd32]/40 dark:bg-[#8cbd32]/0 backdrop-blur-sm
               w-0 group-hover:w-1/3
               transition-[width] duration-300 ease-out
               flex items-center justify-center
               z-10 pointer-events-none 
               group-hover:border group-hover:border-green-900 dark:group-hover:border-green-500"
            >
                <span className="text-white text-sm font-bold uppercase tracking-widest
                     md:rotate-0 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 delay-100 whitespace-nowrap">
                    <h3 className="text-m font-bold text-gray-800 dark:text-gray-200 
                                   transition-colors duration-300">
                        {wipeText}
                    </h3>
                </span>
            </div>

            <button
                onClick={() => setSection(targetSection)}
                className="absolute inset-0 block w-full h-full rounded-xl
               opacity-0 group-hover:opacity-100
               transition-opacity duration-200
               z-50 
               group-hover:border group-hover:border-green-900 dark:group-hover:border-green-500"
            >
                <span className="sr-only">Go to {wipeText}</span>
            </button>

            <div className="relative z-20 pointer-events-none">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 
                                   group-hover:text-green-700 dark:group-hover:text-green-400 
                                   transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 
                              group-hover:text-gray-900 dark:group-hover:text-gray-300 
                              transition-colors duration-300 pr-4">
                    {desc}
                </p>
            </div>
        </div>
    );
}

function TypingAnimation() {
    const roles = ["software engineer", "researcher", "applied scientist"];
    const TYPING_SPEED = 100;
    const DELETING_SPEED = 90;
    const PAUSE_DURATION = 2000;

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayedText.length < roles[roleIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(roles[roleIndex].substring(0, displayedText.length + 1));
                }, TYPING_SPEED);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
            }
        }
        else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.substring(0, displayedText.length - 1));
                }, DELETING_SPEED);
            } else {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);

    return (
        <span className="inline-flex items-center min-h-[1.25em]">
            <span className="text-green-700 dark:text-[#ADEBB3]/90">{displayedText || "\u00A0"}</span>
            <motion.span
                className="ml-1 h-5 w-[2px] bg-gray-700 dark:bg-white"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </span>
    );
}

function ExpandableProjectCard({ title, subtitle, desc, techStack, link, linkText, image }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/20 overflow-hidden transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors"
            >
                <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                        {title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                        {subtitle}
                    </p>
                </div>

                <div className="flex-shrink-0 ml-4 text-gray-400 dark:text-gray-500">
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45 text-green-500" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 border-t border-gray-200/50 dark:border-white/5">
                            {/* image placeholder */}
                            {image && (
                                <div className="w-full h-48 bg-gray-200 dark:bg-black/40 rounded-lg mb-6 mt-4 overflow-hidden border border-gray-300 dark:border-white/10">
                                    <img src={image} alt={title} className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                {techStack.map((tech: string, i: number) => (
                                    <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {desc}
                            </p>

                            <div className="flex gap-4">
                                {link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition shadow-md shadow-green-900/20"
                                    >
                                        {linkText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}