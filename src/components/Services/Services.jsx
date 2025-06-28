import React from 'react';
import { FaDraftingCompass, FaPaintBrush, FaMapMarkedAlt, FaPenNib } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            title: 'Architectural Design',
            icon: <FaDraftingCompass className="text-4xl text-indigo-500 group-hover:text-white transition" />,
            description:
                'Crafting sustainable spaces with a balance of aesthetics and function — from residential to commercial architecture.',
        },
        {
            title: 'Interior & Spatial Styling',
            icon: <FaPaintBrush className="text-4xl text-pink-500 group-hover:text-white transition" />,
            description:
                'Creating expressive interiors using texture, light, and detail — personalized spaces that tell stories.',
        },
        {
            title: 'Planning & Concept Development',
            icon: <FaMapMarkedAlt className="text-4xl text-emerald-500 group-hover:text-white transition" />,
            description:
                'Turning abstract ideas into actionable, beautiful plans — from urban-scale concepts to space-making strategies.',
        },
        {
            title: 'Art Direction & Mural Work',
            icon: <FaPenNib className="text-4xl text-yellow-500 group-hover:text-white transition" />,
            description:
                'Designing immersive mural art that transforms walls into narratives — tailored, expressive, and visually magnetic.',
        },
    ];

    return (
        <section id="services" className="pt-5 pb-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[#1b263b] mb-4">What I Do</h2>
                <p className="text-[#1b263b] max-w-xl mx-auto mb-14 text-lg">
                    I merge architecture, design, and storytelling to build spatial experiences that inspire and connect.
                </p>

                <div className="flex gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/50 p-8 rounded-xl hover:shadow-xl hover:shadow-[#1b263b] hover:scale-[1.03] transition-all duration-300"
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1b263b] mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
