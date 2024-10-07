import React from 'react'
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mb-8 mt-20'>
            <div className='flex items-center justify-center gap-8'>
                {/* <a href="https://x.com/" target='_blank' rel="noopender moreferrer">
                    <FaXTwitter fontSize={25} className='opacity-50 hover:opacity-80' />
                </a> */}
                <a href="https://github.com/sosxa" target='_blank' rel="noopender moreferrer">
                    <FaGithub fontSize={25} className='opacity-50 hover:opacity-80' />
                </a>
                <a href="https://linkedin.com/" target='_blank' rel="noopender moreferrer">
                    <FaLinkedin fontSize={25} className='opacity-50 hover:opacity-80' />
                </a>
            </div>
            <p
                className='mt-8 text-center text-sm tracking-wide text-slate-700'>
                Jose Sosa &copy;
            </p>
        </div>
    )
}

export default Footer
