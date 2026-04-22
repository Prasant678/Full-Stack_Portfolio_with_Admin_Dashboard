import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion';

const Technologies = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getAllSkills = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/skill/getall",
                { withCredentials: true }
            )
            setSkills(data.skills);
        }
        getAllSkills();
    }, [])
    return (
        <div className='border-b lg:border-neutral-900 border-neutral-800 pb-20' id='skills'>
            <motion.h1 initial={{ y: -50, opacity: 0}} whileInView={{ y: 0, opacity: 1}} transition={{ duration: 0.5}} className='lg:mt-16 mt-12 lg:mb-18 mb-14 text-center text-4xl font-thin text-neutral-400 tracking-wider'>Technologies</motion.h1>
            <motion.div initial={{ x: -100, opacity: 0}} whileInView={{ x: 0, opacity: 1}} transition={{ duration: 0.5}} className="flex flex-wrap items-center justify-center gap-4 lg:mx-60">
                    {skills && skills.map((element, index) => {
                        return (
                        <div className="rounded-xl border-1 border-neutral-800 lg:p-1.5 p-1 shadow-lg shadow-[#000000]" key={element._id}>
                            <img className='lg:w-18 w-15' src={element.svg && element.svg.url} alt={element.title} />
                        </div>
                        )
                    })}
                </motion.div>
            </div>
    )
}

export default Technologies
