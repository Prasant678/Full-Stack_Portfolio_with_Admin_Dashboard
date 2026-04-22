import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
const Timeline = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const getAllTimeline = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/timeline/getall",
                { withCredentials: true }
            )
            setTimeline(data.timelines)
        }
        getAllTimeline();
    }, [])
    return (
        <div className='border-b lg:border-neutral-900 border-neutral-800 pb-4' id='timeline'>
            <motion.h1 initial={{ y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1}} transition={{ duration: 0.5}} className='lg:mt-16 mt-12 lg:mb-18 mb-12 text-center text-4xl font-thin text-neutral-400 tracking-wider'>Timeline</motion.h1>
            <div>
                {timeline && timeline.map((item, index) => {
                    return (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <div className="w-full lg:w-1/5">
                                <motion.p whileInView={{opacity: 1, x: 0}} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='my-2 text-[14px] text-neutral-400 tracking-wide'>{item.timeline.from} - {item.timeline.to}</motion.p>
                            </div>
                            <motion.div whileInView={{opacity: 1, x: 0}} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full max-w-3xl lg:w-4/5">
                                <h6 className="mb-2 text-xl text-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                                    {item.title}
                                </h6>
                                <p className='mb-4 text-neutral-400 tracking-wide'>{item.description}</p>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Timeline
