"use client";
import React from "react";

const steps = [
    {
        title: "Understanding Requirements",
        desc: "I start by understanding your business goals, project requirements, and expectations to ensure we are aligned from the beginning.",
    },
    {
        title: "Planning & Strategy",
        desc: "I plan the project structure, choose the right technologies, and define timelines to deliver an efficient and scalable solution.",
    },
    {
        title: "Design & Development",
        desc: "I develop clean, responsive, and user-friendly interfaces using modern frontend and backend technologies.",
    },
    {
        title: "Testing & Optimization",
        desc: "Before delivery, I thoroughly test the application for performance, responsiveness, and bugs to ensure high quality.",
    },
    {
        title: "Deployment & Support",
        desc: "After approval, I deploy the project and provide support for updates, improvements, and maintenance if required.",
    },
];

const HowIWork = () => {
    return (
        <section
            className="bg-[#191919] text-white py-16 px-4 md:px-10"
            aria-label="Freelance web developer work process"
        >
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    My Work Process
                </h1>
                <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base lg:text-lg xl:text-xl">
                    A structured and transparent workflow I follow to deliver scalable,
                    high-quality web applications for my freelance clients.
                </p>
            </div>

            <div className="relative  mx-auto">

                <div className="hidden xl:block absolute top-6 left-0 right-0 h-0.5 bg-gray-600" />

                <div className="hidden lg:block xl:hidden absolute top-6 left-0 right-0 h-0.5 bg-gray-600" />
                <div className="hidden lg:block xl:hidden absolute top-[calc(50%+1.5rem)] left-0 right-0 h-0.5 bg-gray-600" />

                <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600" />

                <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex gap-6 lg:flex-col lg:items-center"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-[#191919] flex items-center justify-center text-blue-500 font-bold">
                                    {index + 1}
                                </div>
                            </div>

                            <div className="bg-white/10 border border-white/10 rounded-xl p-5 text-left lg:text-center tracking-wide
                transition-all duration-300 ease-out
                hover:scale-105 hover:bg-white/15 hover:border-blue-600 cursor-grab">
                                <h3 className="text-lg md:text-xl font-bold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base font-normal">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
