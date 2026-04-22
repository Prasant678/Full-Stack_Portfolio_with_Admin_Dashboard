import React, { useEffect, useState } from 'react'
import logo from "../assets/G.png"
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion';

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "https://mern-stack-portfolio-6r58.onrender.com/api/v1/user/me/portfolio",
                { withCredentials: true }
            );
            setUser(data.user);
        }
        getMyProfile();
    }, [])

    const Container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.7, delay: delay }}
    })
    return (
        <div className='flex lg:mb-5 mb-4 items-center justify-between lg:py-4 py-7'>
            <div className='flex flex-shrink-0 items-center'>
                <motion.img initial="hidden" animate="visible" variants={Container(0.1)} className='w-15 cursor-pointer' src={logo} alt="logo" />
            </div>
            <div className='lg:flex items-center gap-5 rounded px-3 py-1 hidden w'>
                <ul className='flex items-center justify-center gap-5'>
                    {menu === "about" ? <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1}} className='bg-gradient-to-r from-indigo-500  to-indigo-600 px-2 py-0.5 rounded-lg text-black font-medium'><AnchorLink href="#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink></motion.li> : <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1}}><AnchorLink href="#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink></motion.li>}
                    {menu === "skills" ? <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2}} className='bg-gradient-to-r from-indigo-500  to-indigo-600 px-2 py-0.5 rounded-lg text-black font-medium'><AnchorLink href="#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink></motion.li> : <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2}}><AnchorLink href="#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink></motion.li>}
                    {menu === "timeline" ? <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3}} className='bg-gradient-to-r from-indigo-500  to-indigo-600 px-2 py-0.5 rounded-lg text-black font-medium'><AnchorLink href="#timeline"><p onClick={() => setMenu("timeline")}>Timeline</p></AnchorLink></motion.li> : <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3}}><AnchorLink href="#timeline"><p onClick={() => setMenu("timeline")}>Timeline</p></AnchorLink></motion.li>}
                    {menu === "projects" ? <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4}} className='bg-gradient-to-r from-indigo-500  to-indigo-600 px-2 py-0.5 rounded-lg text-black font-medium'><AnchorLink href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></motion.li> : <motion.li initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4}}><AnchorLink href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></motion.li>}
                </ul>
            </div>
            <motion.div initial={{ x: 100, opacity: 0}} animate="visible" variants={Container(0.1)} className='flex gap-4 items-center justify-center text-2xl text-white'>
                <Link to={user.linkedInURL} target='_blank'><FaLinkedinIn className='cursor-pointer' /></Link>
                <Link to={user.githubURL} target='_blank'><FaGithub className='cursor-pointer' /></Link>
                <Link to={user.instagramURL} target='_blank'><FaInstagram className='cursor-pointer' /></Link>
                <Link to={user.twitterURL} target='_blank'><FaSquareXTwitter className='cursor-pointer' /></Link>
            </motion.div>
        </div>
    )
}

export default Navbar
