import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/G.png"
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion';

const Project = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [stack, setStack] = useState("");
    const [gitRepoLink, setGitRepoLink] = useState("");
    const [deployed, setDeployed] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [projectBanner, setProjectBanner] = useState("");
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getProject = async () => {
            await axios
                .get(`https://mern-stack-portfolio-6r58.onrender.com/api/v1/project/get/${id}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    setTitle(res.data.project.title);
                    setDescription(res.data.project.description);
                    setStack(res.data.project.stack);
                    setDeployed(res.data.project.deployed);
                    setTechnologies(res.data.project.technologies);
                    setGitRepoLink(res.data.project.gitRepoLink);
                    setProjectLink(res.data.project.projectLink);
                    setProjectBanner(
                        res.data.project.projectBanner && res.data.project.projectBanner.url
                    );
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                });
        };
        getProject();
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/user/me/portfolio",
                { withCredentials: true }
            );
            setUser(data.user);
        };
        getMyProfile();
    }, [id]);
    const navigateTo = useNavigate();
    const handleReturnToHome = () => {
        navigateTo("/");
    };

    const Description = description.split(/\r?\n/).filter(Boolean);
    const mainDesc = Description[0];
    const descPoints = Description.slice(1);
    const technologiesList = technologies.split(", ");

    return (
        <>
            <div className='flex lg:mb-5 mb-4 items-center justify-between lg:py-5 py-7'>
                <div className='flex flex-shrink-0 items-center'>
                    <img className='w-15 cursor-pointer' onClick={handleReturnToHome} src={logo} alt="logo" />
                </div>
                <div className='flex gap-4 items-center justify-center text-2xl text-white'>
                    <Link to={user.linkedInURL} target='_blank'><FaLinkedinIn className='cursor-pointer' /></Link>
                    <Link to={user.githubURL} target='_blank'><FaGithub className='cursor-pointer' /></Link>
                    <Link to={user.instagramURL} target='_blank'><FaInstagram className='cursor-pointer' /></Link>
                    <Link to={user.twitterURL} target='_blank'><FaSquareXTwitter className='cursor-pointer' /></Link>
                </div>
            </div>
            <motion.h5 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='flex items-center justify-center lg:text-4xl text-xl font-thin lg:my-8 my-7'>{title}</motion.h5>
            <div className="lg:px-10">
                <div>
                    <motion.img initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.75 }} 
                        className='rounded-md border-1 border-neutral-700'
                        src={
                            projectBanner
                                ? projectBanner
                                : ""
                        }
                        alt="projectBanner"
                    />
                </div>
                <div className="">
                    <div className="my-3">
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='text-xl font-thin lg:mb-3 mb-2 tracking-wider'>Description :</motion.p>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='mb-4 text-neutral-400 tracking-wide'>{mainDesc}</motion.p>
                        {descPoints.length > 0 && (
                            <ul className="pl-0 space-y-1">
                                {descPoints.map((item, index) => (
                                    <li  key={index} className="flex items-start text-neutral-400 tracking-wide">
                                        <span className="text-[#00c0c0] mr-1.5 my-[-4px] text-4xl mt-[-8px]">•</span>
                                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>{item.trim()}</motion.p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="my-3">
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className='text-xl font-thin mb-3 tracking-wider'>Technologies :</motion.p>
                        <ul className='lg:flex flex flex-wrap lg:items-center lg:gap-4 gap-2.5 w-full'>
                            {technologiesList.map((item, index) => (
                                <motion.li whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="lg:mb-0 mb-1 bg-neutral-800 py-1 px-2 rounded text-[#E4A11B] tracking-wide" key={index}>{item}</motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3">
                        <motion.h4 whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className='text-xl font-thin mb-2 tracking-wider'>Stack :</motion.h4>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className='font-medium tracking-wider'>{stack}</motion.p>
                    </div>
                    <div className="my-3">
                        <motion.h4 whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className='text-xl font-thin mb-2 tracking-wider'>Deployed :</motion.h4>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className='font-medium tracking-wider'>{deployed}</motion.p>
                    </div>
                    <div className="my-3">
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className='text-xl font-thin mb-2 tracking-wider'>Github Repository Link :</motion.p>
                        <Link
                            className='text-[#3B71CA] font-medium break-all underline tracking-wide'
                            target="_blank"
                            to={gitRepoLink}
                        >
                            <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.9 }}>{gitRepoLink}</motion.p>
                        </Link>
                    </div>
                    <div className="my-3 pb-10">
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7, delay: 1 }} className='text-xl font-thin mb-2 tracking-wider'>Project Link :</motion.p>
                        <Link
                            className='text-[#3B71CA] font-medium break-all underline tracking-wide'
                            target="_blank"
                            to={projectLink}
                        >
                            <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.9 }}>{projectLink}</motion.p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project

