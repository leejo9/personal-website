import { motion } from "framer-motion";
import ModelViewer from "../components/ModelViewer.tsx";
import Crab from "../components/Crab.tsx";
import Dragon from "../components/Dragon.tsx";

export default function ModelsSection() {
    return (
        <section id="models" className="w-full px-6 flex justify-center py-20">
            <div className="w-full max-w-5xl">
                <motion.h2
                    className="text-3xl font-bold mb-2 text-center text-indigo-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    3D Models
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}>
                    <p className=" mb-12 ">3D models developed and animated in Blockbench. Intended for Minecraft Mods.</p>
                </motion.p>

                <div className="  " >

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="max-w-2xl and mx-auto h-80 bg-black/20 rounded-lg shadow-xl mb-12">
                            <ModelViewer cameraPosition={[4, 2, -8]}>
                                <Crab scale={4.8} />
                            </ModelViewer>
                        </div>
                        <p className="text-center text-gray-700 mt-4">
                        </p>
                    </motion.div>

                    <motion.div /* ... */ >
                        <div className=" max-w-2xl and mx-auto h-100 w-full bg-black/20 rounded-lg shadow-xl">
                            <ModelViewer cameraPosition={[-8, 11, -6]} target={[0, 8, 0]}>
                                <Dragon scale={1.3} />
                            </ModelViewer>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}