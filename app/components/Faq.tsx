"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How is this course different from other online programs?",
        answer:
            "Unlike traditional recorded courses, we provide a personalized experience. We explain complex Italian concepts in Urdu/Hindi and include daily live practice sessions. This ensures you don't just 'study' Italian, but actually start speaking it in real-life situations.",
    },
    {
        question: "I am a complete beginner with no prior knowledge. Can I join?",
        answer:
            "Absolutely! Our program is specifically designed to take you from 'Zero to Hero.' We start with the basic alphabet and greetings (Level A1) and gradually guide you through advanced conversation levels with step-by-step support.",
    },
    {
        question: "How long does it take to speak Italian confidently?",
        answer:
            "If you dedicate just 30–45 minutes to daily practice alongside our sessions, you can master basic conversational Italian within 2–3 months. Our roadmap is optimized to get you fluent in the shortest time possible.",
    },
    {
        question: "Do I need to know English to learn Italian through this course?",
        answer:
            "No, English is not required. Our primary medium of instruction is Urdu and Hindi, making it easy for you to understand Italian grammar and vocabulary without any language barriers.",
    },
    {
        question: "What happens if I miss a live session?",
        answer:
            "Life happens! Every live session is recorded and uploaded to our student portal. You can watch the replays at your convenience, ensuring you never fall behind in your learning journey.",
    },
    {
        question: "Does the course cover Passport and Job Interview preparation?",
        answer:
            "Yes! This is one of our most popular features. We provide dedicated coaching for Italian citizenship (Passport) interviews and job-specific vocabulary to help you secure a professional career in Italy.",
    },
    {
        question: "Will I receive a completion certificate?",
        answer:
            "Yes, upon completing each level (A1, A2, B1, etc.), you will receive a verified certificate. This serves as official proof of your language proficiency for employers or personal records.",
    },
    {
        question: "What kind of support do I get outside of class hours?",
        answer:
            "You get 24/7 access to our private WhatsApp community. Whether you have a quick question about a phrase or need feedback on your pronunciation, our team is always there to assist you.",
    },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                        FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
                    </h2>
                    <p className="text-slate-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
                        Everything you need to know about the Sonia Method
                    </p>
                </div>

                {/* FAQ List */}
                <div className="grid grid-cols-1 gap-5">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-[2rem] border transition-all duration-300 ${isOpen
                                        ? "bg-slate-50 border-yellow-200"
                                        : "bg-white border-slate-100 hover:border-slate-200"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex justify-between items-center p-6 sm:p-8 text-left transition-colors"
                                >
                                    <h4
                                        className={`text-base sm:text-lg font-black transition-colors leading-tight pr-4 ${isOpen ? "text-slate-900" : "text-slate-500"
                                            }`}
                                    >
                                        {faq.question}
                                    </h4>

                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-yellow-500 text-white rotate-45" : "bg-slate-100 text-slate-400"
                                        }`}>
                                        <span className="text-xl font-light">+</span>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden px-6 sm:px-8">
                                        <p className="pb-8 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Support Callout */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Still have questions?</p>
                    <a
                        href="https://wa.me/601127305814"
                        className="inline-flex items-center gap-2 text-yellow-600 font-black text-lg hover:text-yellow-700 transition-colors"
                    >
                        <i className="fab fa-whatsapp"></i>
                        CHAT WITH US ON WHATSAPP
                    </a>
                </div>
            </div>
        </section>
    );
}