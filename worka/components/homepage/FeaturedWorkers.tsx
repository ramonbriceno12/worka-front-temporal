import Image from "next/image";
import { useRef } from "react";

export default function FeaturedWorkers() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight">
                    Meet Talented Professionals
                </h2>

                <div className="relative mt-12 overflow-hidden">
                    {/* Left Arrow */}
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 text-white p-4 rounded-full z-10 shadow-2xl hover:scale-110 transition"
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                    >
                        ←
                    </button>

                    {/* Scrollable Content */}
                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    >
                        {[
                            {
                                name: "Jane Doe",
                                role: "Frontend Developer",
                                image: "/worker1.jpg",
                            },
                            {
                                name: "John Smith",
                                role: "UI/UX Designer",
                                image: "/worker2.jpg",
                            },
                            {
                                name: "Emily Johnson",
                                role: "Digital Marketer",
                                image: "/worker3.jpg",
                            },
                            {
                                name: "Mike Brown",
                                role: "Backend Developer",
                                image: "/worker4.jpg",
                            },
                            {
                                name: "Mike Brown",
                                role: "Backend Developer",
                                image: "/worker4.jpg",
                            },
                            {
                                name: "Mike Brown",
                                role: "Backend Developer",
                                image: "/worker4.jpg",
                            },
                            {
                                name: "Mike Brown",
                                role: "Backend Developer",
                                image: "/worker4.jpg",
                            },
                        ].map((worker, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 snap-center bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                            >
                                <Image
                                    src={worker.image}
                                    alt={worker.name}
                                    width={110}
                                    height={110}
                                    className="rounded-full mx-auto border-4 border-indigo-300 dark:border-indigo-600"
                                />
                                <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
                                    {worker.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">{worker.role}</p>
                                <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-gray-800 to-gray-600 text-white p-4 rounded-full z-10 shadow-2xl hover:scale-110 transition"
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}