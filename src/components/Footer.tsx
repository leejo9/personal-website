export default function Footer() {
    return (
        <footer id="#footer" className="w-full bg-gray-900 text-white py-6">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl font-bold">Contact Me</h3>
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <a
                        href="mailto:minescoopcode@gmail.com"
                        className="font-semibold hover:text-indigo-400 transition"
                    >
                        minescoopcode@gmail.com
                    </a>

                </div>
            </div>
            © 2025 John Lee

        </footer>
    );
}