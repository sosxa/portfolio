'use client';
import React from 'react'
import Image from 'next/image';
import Profilepic from "../../public/patrickBravo.jpeg"
import { PROFILE } from "../constants"
import { FaDownload } from "react-icons/fa6"
import { motion } from "framer-motion"

const ProfileOverview = () => {
    return (
        <div className="my-24">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex flex-col items-center justify-center gap-4'
                transition={{ duration: 1 }}
            >
                <Image
                    src={Profilepic}
                    alt="Image of Jose Sosa"
                    width={110}
                    height={110}
                    className="rounded-full border-2 border-slate-400"
                />
                <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
                <p className="tracking-tighter">{PROFILE.city}</p>
                <a
                    href="/patrick.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center gap-x-2 rounded-full bg-gray-300 px-3 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:text-teal-800">
                    Download Resume
                    <FaDownload />
                </a>
                <p className="my-10 text-center text-5xl font-semibold tracking-tighter lg:text-[10rem]">
                    {PROFILE.greet.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.15 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </p>
                <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-400 lg:text-3xl">
                    I’m an aspiring <span className="border-b font-medium text-slate-200">Full Stack Developer</span> currently studying Computer Science. I hope to grow my skills—both technically and creatively—so I can make the <span className="font-medium text-slate-200">user experience</span> as <span className="font-medium text-slate-200">smooth</span> as possible for everyone.
                </p>


            </motion.div>
        </div >
    )
}

export default ProfileOverview
