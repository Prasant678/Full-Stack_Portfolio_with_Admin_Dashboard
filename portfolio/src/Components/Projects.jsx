import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const getAllProjects = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/project/getall",
                { withCredentials: true })
            setProject(data.projects);
        }
        getAllProjects();
    }, [])
    const [viewAll, setViewAll] = useState(false);

    return (
        <div className='border-b lg:border-neutral-900 border-neutral-800' id='projects'>
            <motion.h1 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='lg:mt-16 mt-12 lg:mb-18 mb-16 text-center text-4xl font-thin text-neutral-400'>Projects</motion.h1>
            <div>
                {viewAll ? project && project.map((item, index) => {
                    return (
                        <div key={index} className='mb-8 lg:mb-4 flex flex-wrap lg:justify-center lg:gap-20'>
                            <div className="w-full lg:w-1/4">
                                <Link to={`/project/${item._id}`}>
                                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='rounded-md lg:mb-4 mb-6 lg:w-[100%] lg:mt-1 cursor-pointer border-1 border-neutral-800 shadow-lg shadow-black' src={item.projectBanner && item.projectBanner.url} alt="" />
                                </Link>
                            </div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full max-w-xl lg:w-3/4">
                                <Link to={`/project/${item._id}`}>
                                    <h6 className="mb-2 text-xl font-semibold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent cursor-pointer">
                                        {item.title}
                                    </h6>
                                </Link>
                                <p className='mb-4 text-neutral-400'>
                                    {item.description.split(/\r?\n/)[0]} 
                                </p>
                            </motion.div>
                        </div>
                    )
                }) : project && project.slice(0, 4).map((item, index) => {
                    return (
                        <div key={index} className='mb-8 lg:mb-4 flex flex-wrap lg:justify-center lg:gap-20'>
                            <div className="w-full lg:w-1/4">
                                <Link to={`/project/${item._id}`}>
                                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='rounded-md lg:mb-4 mb-6 lg:w-[100%] lg:mt-1 cursor-pointer border-1 border-neutral-800 shadow-lg shadow-black' src={item.projectBanner && item.projectBanner.url} alt="" />
                                </Link>
                            </div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full max-w-xl lg:w-3/4">
                                <Link to={`/project/${item._id}`}>
                                    <h6 className="mb-2 text-xl font-semibold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent cursor-pointer">
                                        {item.title}
                                    </h6>
                                </Link>
                                <p className='mb-4 text-neutral-400'>
                                    {item.description.split(/\r?\n/)[0]}
                                </p>
                            </motion.div>
                        </div>
                    )
                })}
                {project && project.length > 6 && (
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center justify-center px-4 py-4 bg-transparent text-neutral-300 rounded-full text-xl cursor-pointer gap-2 hover:gap-3 hover:transition-[5s] transition-[5s]' onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? <><FaArrowLeft className='mt-1'/>show less</> : <>show more<FaArrowRight className='mt-1' /></>}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
