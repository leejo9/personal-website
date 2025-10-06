import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (

        <main id="hero" className="relative min-h-screen flex flex-col items-center w-full overflow-x-hidden  scroll-smooth">
            <section className="h-screen w-full flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">John Lee</h1>
                {/* <HeroSlogan badText="Computational Creativity" goodText="Creative Computation"></HeroSlogan> */}

                {/* <HeroSlogan badText="Hello " goodText="there"></HeroSlogan> */}

                <p className="mt-2 py-4 text-md md:text-lg max-w-md text-gray-700">
                    Aspiring <TypingAnimation /> and artist.
                </p>
            </section>

        </main>
    );
}

function TypingAnimation() {
    const roles = [
        "software developer",
        "researcher",
        "applied scientist",
    ];


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
        <span className="inline-flex items-center">
            <span className="text-green-700">{displayedText}</span>
            <motion.span
                className="ml-1 h-5 w-[2px] bg-gray-700"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </span>
    );
}

// import { useEffect, useState } from "react";
// import { AnimatePresence } from "framer-motion";


// function AnimateFlareWrapper({ img_path }: { img_path: string }) {
//     const [show, setShow] = useState(true);

//     useEffect(() => {
//         const timeout = setTimeout(() => setShow(false), 5000);
//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <AnimatePresence>
//             {show && <AnimateLensFlare img_path={img_path} />}
//         </AnimatePresence>
//     );
// }

// type AnimateLensFlare = {
//     img_path: string;
// }
// function AnimateLensFlare({ img_path }: AnimateLensFlare) {
//     return (
//         <motion.div
//             className="absolute w-full h-full pointer-events-none z-0"
//             initial={{ x: "-40%", y: "-20%", opacity: 0.2 }}
//             animate={{ x: "60%", y: "-10%", opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{
//                 duration: 5,
//                 ease: "easeInOut",
//             }}
//         >
//             <img
//                 src={img_path}
//                 alt="Lens flare"
//                 className="animate-pulse w-full h-full object-contain"
//             />
//         </motion.div>
//     );
// }

// type HeroSlogan = {
//     badText: string;
//     goodText: string;
// };

// function HeroSlogan({ badText, goodText }: HeroSlogan) {
//     return (
//         <div className="flex items-center justify-center space-x-4">
//             <div className="relative inline-block">

//                 <motion.h1
//                     className="text-lg text-black"
//                     initial={{ opacity: 1, y: 0 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }} viewport={{ once: true }}

//                 >
//                     <h1 className="text-5xl md:text-5xl font-bold text-green-300">{badText}</h1>
//                 </motion.h1>

//                 <motion.div
//                     className="absolute left-0 top-1/2 h-[2px] bg-red-500 rounded"
//                     initial={{ width: 0, x: -5, y: 6 }}
//                     animate={{ width: "107%" }}
//                     transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}

//                 />
//             </div>

//             <motion.h1
//                 className="text-lg text-black"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, delay: 1.9 }} viewport={{ once: true }}

//             >
//                 <h1 className="text-5xl md:text-5xl font-bold text-green-300">{goodText}</h1>
//             </motion.h1>
//         </div>
//     );

// }

