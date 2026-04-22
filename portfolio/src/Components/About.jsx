import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
import about from '../assets/About.jpg'

const About = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/user/me/portfolio",
                { withCredentials: true })
            setUser(data.user)
        }
        getMyProfile();
    }, [])

    const aboutPara = user.aboutMe ? user.aboutMe.split(/\r?\n/).filter(p => p.trim() !== '') : [];

    return (
        <div className='border-b lg:border-neutral-900 border-neutral-800 pb-4 lg:mb-16' id='about'>
            <motion.h1 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='lg:mt-8 mt-12 mb-12 lg:mb-8 text-center text-4xl font-thin text-neutral-400 tracking-wider'>About <span className='text-neutral-500 font-thin'>Me</span></motion.h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pt-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7 }} className='rounded-md lg:w-83 w-100 lg:h-93 h-98' src={about} alt="About" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col justify-center lg:justify-start'>
                        {aboutPara.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ x: 100, opacity: 0 }}
                                transition={{ duration: 1 + index * 0.2 }}
                                className={`my-2 max-w-xl tracking-wide font-light ${index === 0 ? 'pt-6' : 'pb-6'}`}>
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="flex gap-5 items-center">
                            <p className='w-40 shrink-0 tracking-wide'>Leadership</p>
                            <hr className='lg:w-70 w-35 hr' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.4 }} className="flex gap-5 items-center">
                            <p className='w-40 shrink-0 tracking-wide'>Analytical Thinking</p>
                            <hr className='lg:w-62 w-30 hr' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.6 }} className="flex gap-5 items-center">
                            <p className='w-40 shrink-0 tracking-wide'>Problem Solving</p>
                            <hr className='lg:w-80 w-40 hr' />
                        </motion.div>
                    </div>
                </div>
                <div className="flex w-full justify-around pt-12">
                    <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center gap-3">
                        <h1 className='text-3xl bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent font-medium'>7+</h1>
                        <p className='text-xs lg:text-lg font-light tracking-widest'>PROJECTS BUILT</p>
                    </motion.div>
                    <hr />
                    <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center gap-3">
                        <h1 className='text-3xl bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent font-medium'>15+</h1>
                        <p className='text-xs lg:text-lg font-light tracking-widest'>SKILLS ACQUIRED</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
