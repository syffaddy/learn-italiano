"use client";

import React, { useState, useEffect, useRef } from "react";

const reviewsData = [
    {
        name: "Dr. Faisal",
        date: "7/26/2024",
        text: "Ma'am Sonia has a very unique and simple teaching style that makes Italian language easy to learn and understand. She explains everything clearly and adjusts her teaching for each student. She is very knowledgeable, helpful, and always gives positive and supportive feedback. She is always available for questions and truly the best teacher.",
    },
    {
        name: "Anas ",
        date: "9/9/2024",
        text: "My experience with maam sonia is extremely amazing. I successfully completed both the A1 and A2 levels of Italian with her and she taught the material in an amazing and effective way. Her instruction was always clear making the learning process a pleasure. Beyond her excellent teaching Ma'am Sonia is very helpful in class and makes herself available for her students after the class as well if her students face any difficulties during revision. She is an amazing and highly supportive teacher. Looking forward to start my B1 and B2 level with her. I feel very fortunate to have her as my instructor and highly recommend her to others who want to learn Italian Language.",
    },
    {
        name: "Abdur Rafay",
        date: "12/3/2024",
        text: "I just finished my A1 Italian course with Sonia Madam and seriously, it was fantastic! Sonia Madam is an amazing teacher. She explained absolutely everything so clearly, making even the tricky grammar stuff easy to understand. I never felt lost! What I loved most is how much she focused on speaking and accent. She was super helpful, correcting us gently and giving us the confidence to actually try talking in Italian. My accent has definitely improved, and I feel much more comfortable forming sentences now. If you're starting out with Italian, I highly recommend taking a course with her. Grazie mille, Sonia Madam! You made learning Italian fun! Looking forward to pursuing A2 level asap.",
    },
    {
        name: "Acacia Khurram",
        date: "01/15/2025",
        text: "Miss Sonia taught me for over a year, and no doubt she is the best teacher ever. Her sessions are so interactive, she does not rush her students, she is always willing to solve the same doubt a hundred times although she teaches so well most times I have no doubts even if I hear a new concept for the first time. Her teaching style makes it so easy to learn I never felt stressed about learning Italian once I joined her classes. She made learning Italian just as easy as any other language in our daily use, she makes sure her students get a hang of the language and keeps on polishing our skills. I am grateful to have a teacher like her and do not regret a single class taken with her.",
    },
    {
        name: "Sufiyan",
        date: "03/20/2025",
        text: "Miss Sonia ek excellent Italian teacher hain. Unka teaching style bohot clear aur easy hota hai aur woh difficult grammar concepts bhi simple tareeke se samjha deti hain. Woh hamesha ensure karti hain ke students comfortable aur confident feel karein. Unki effective teaching methods ki wajah se meri Italian kaafi improve hui hai. Highly professional aur strongly recommended.",
    },
    {
        name: "Hafsa Abid",
        date: "05/04/2025",
        text: "Your teaching is really great and very helpful. When I first came to Italy, I thought I wouldn't understand anything, but thanks to your Level 1 teaching, I can now understand some sentences, words, and especially prices, which is very important. Your way of teaching makes learning Italian easy and enjoyable. Thank you so much!",
    },
    {
        name: "Raffay",
        date: "05/04/2025",
        text: "The experience was great. At first, I thought learning Italian as a second language would be difficult, but thanks to you and your excellent teaching methods, it became easy to understand and speak. You always explained concepts clearly and even provided extra classes for better understanding. I am truly grateful for your support and dedication. Thank you so much, ma’am. God bless you.",
    },
    {
        name: "Aisha",
        date: "07/19/2025",
        text: "Ma'am Sonia is an excellent Italian teacher with clear explanations, patient, and very encouraging. Learning Italian has been enjoyable and effective with her. Moreover, lessons are well-structured, engaging, knowledgeable and supportive. I made real progress in speaking, reading and writing Italian language. The way she explains grammar clearly, uses practical examples, and always makes lessons interesting is outstanding. I gained confidence in speaking and understanding Italian much faster than expected. I highly recommend her to anyone studying Italian language.",
    },
    {
        name: "Zalkifel Rao",
        date: "09/13/2025",
        text: "My experience so far has been great. Mostly because of good teaching style, supportive approach and interactive sessions. This is the reason why i am willing to stay committed to learning without pressure.",
    },
    {
        name: "Abdul Rafay",
        date: "12/21/2025",
        text: "Miss Sonia, It is because of your hard work that I witnessed such dedication and patience. I truly appreciate the way you waited for students to join the class on weekends, always arrived on time, and regularly ensured that everyone understood the lecture. JazakAllah, ma'am, for being like an elder sister to me and for encouraging me whenever I felt low. You never let me down. Please remember me in your prayers. Thank you. JazakAllah Khair.",
    }
];

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic: Every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // Agar end par pounch jaye to wapis start par chala jaye
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-50 blur-[120px] rounded-full opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Manual + Auto Scroll Carousel */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {reviewsData.map((review, i) => (
                                <div
                                    key={i}
                                    className="min-w-[280px] md:min-w-[320px] snap-center bg-white border border-slate-100 p-6 rounded-3xl shadow-sm flex flex-col justify-between h-fit cursor-grab active:cursor-grabbing"
                                >
                                    <div>
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, starIdx) => (
                                                <i key={starIdx} className="fas fa-star text-yellow-400 text-[10px]"></i>
                                            ))}
                                        </div>
                                        <div className="mb-3">
                                            <span className="block font-black text-slate-900 text-md tracking-tight">{review.name}</span>
                                            <span className="text-slate-400 text-[14px] font-bold">{review.date}</span>
                                        </div>
                                        <p className="text-slate-600 text-md leading-relaxed font-medium">
                                            "{review.text}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Swipe Indicator for Mobile */}
                        <div className="flex gap-2 mt-4 lg:hidden justify-center">
                            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-1 bg-slate-200 rounded-full"></div>
                            <div className="w-2 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-6 text-green-700">
                            <i className="fab fa-whatsapp"></i>
                            <span className="text-[10px] font-black uppercase tracking-widest">
                                100% Verified Results
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
                            Real Stories <br />
                            <span className="text-yellow-500">Real Success.</span>
                        </h2>

                        <div className="flex items-center gap-1 mb-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fas fa-star text-xl"></i>
                            ))}
                            <span className="ml-2 font-black text-slate-900">5.0 Rating</span>
                        </div>

                        <p className="text-slate-600 text-lg mb-8 max-w-md font-bold leading-snug">
                            Don't just take our word for it. Join hundreds of students who mastered Italian
                            through Sonia's coaching.
                        </p>

                        <a
                            href="https://wa.me/601127305814"
                            className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl group"
                        >
                            Start Your Journey
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom CSS to hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}