import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import { HashLink } from 'react-router-hash-link';

type CardProps = {
    title: string;
    children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-white/30 backdrop-blur-md text-gray-900 shadow-lg border border-white/20 hover:-translate-y-[5px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-2 text-sm">{children}</div>
        </motion.div>
    );
}

export default function CreativePage() {
    return (

        <main className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-400 to-blue-100 scroll-smooth">
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg">
                <div className="justify-end max-w-7xl mx-auto py-4 flex items-center text-white">

                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><Link to="/" className="hover:text-green-200 transition hover:font-bold">Return Home</Link></li>

                    </ul>
                </div>
            </nav>
            <motion.img
                src={cloud1}
                alt="A floating cloud"
                className="absolute top-[10%] left-[-10%] w-1/2 md:w-1/3 opacity-70 z-0 pointer-events-none"
                animate={{
                    x: ["-10%", "130%"],
                    y: ["0%", "5%", "0%"],
                }}
                transition={{
                    duration: 150,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
            <motion.img
                src={cloud1}
                alt="A floating cloud"
                className="absolute top-[10%] left-[-10%] w-1/3 md:w-1/4 opacity-60 z-0 pointer-events-none"
                animate={{
                    x: ["-10%", "130%"],
                    y: ["0%", "5%", "0%"],
                }}
                transition={{
                    duration: 150,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
            <motion.img
                src={cloud2}
                alt="another floating cloud"
                className="absolute top-[30%] left-[50%] w-1/2 md:w-1/3 opacity-60 z-0 pointer-events-none"
                animate={{
                    x: ["0%", "-200%"],
                    y: ["0%", "-8%", "0%"],
                }}
                transition={{
                    duration: 160,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />



            <section className="flex flex-col items-center justify-center text-center py-20 md:py-32 z-20">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white text-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Art Deposit
                </motion.h1>
            </section>

            <section className="w-full max-w-5xl px-6 py-10 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title="Sketches">
                        <p className="text-gray-700">A collection of my traditional (and occasionally digital like these clouds) drawings. Primarily a log of my art progression...</p>
                        <a className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition">
                            In Progress
                        </a>
                    </Card>
                    <Card title="Writing & Worldbuilding">
                        <p className="text-transparent text-base bg-clip-text font-bold bg-gradient-to-r from-green-700 to-sky-5=800/10">To a world beyond, with wonders of magic and nature... </p>
                        <a className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition">
                            In Progress
                        </a>
                    </Card>
                    <Card title="AMVs (Anime Music Videos)">
                        <p className="text-gray-700">Award-winning video editing projects ranging from poignant narratives to action-filled, cinematic edits</p>
                        <HashLink
                            smooth
                            to="#amvSection"
                            className="inline-block mt-3 px-4 py-2 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition"
                        >
                            View Videos
                        </HashLink>
                    </Card>
                </div>
            </section>

            <section id="amvSection" className="w-full max-w-4xl px-6 py-20 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">AMV Showcase</h2>

                    {/* STILL WITH YOU */}
                    <div className="mb-12">
                        <div className="w-full flex justify-center">
                            <iframe className=" rounded-lg shadow-md w-full max-w-xl"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/g_l2C9B9GNo?autoplay=0&mute=0&loop=0&cc_load_policy=1&playlist=g_l2C9B9GNo"
                                title="AMV Preview"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-xl font-bold text-shadow-md">Still With You - 정국 Jungkook</h3>
                            <p className="text-md font-semibold text-gray-500">🏆 Best Romance - Anime USA 2023, 🥈 Finalist - Derpycon 2023, Desucon Frostbite 2022, Setsucon 2022</p>
                        </div>
                    </div>

                    {/* WARRIORS */}
                    <div className="mb-12">
                        <div className="w-full flex justify-center">
                            <iframe className=" rounded-lg shadow-md w-full max-w-xl"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dlnk6Ag6J4k&ab_channel=ACFNature?start=0&autoplay=0&mute=0&loop=0&playlist=dlnk6Ag6J4k&ab_channel=ACFNature"
                                title="AMV Preview"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="mt-4 text-center text-white">
                            <h3 className="text-xl font-bold text-shadow-md">Warriors</h3>
                            <p className="text-md font-semibold text-gray-500">🏆 Best Action - Nekocon 2023, 🥈 Finalist - Otakuthon  2023, Desucon Frostbite 2022, PMX 2022, 🏅 Anime Banzai HM</p>
                        </div>
                    </div>
                    {/* Considering maybe one more? Centuries? hrmm  */}

                    <div className="text-center mt-12">
                        <a href="https://www.youtube.com/@acfnature8051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
                            See More
                        </a>
                    </div>
                </motion.div>
            </section>
        </main >
    );
}