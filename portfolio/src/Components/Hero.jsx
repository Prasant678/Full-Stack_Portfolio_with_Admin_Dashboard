import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import Modal from './Modal.jsx';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';

const Hero = () => {
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const [Name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(
            "https://mern-stack-portfolio-6r58.onrender.com/api/v1/message/send",
            { Name, subject, message },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(() => {
                toast.success("Message Sent!")
                setName("")
                setSubject("")
                setMessage("")
                setLoading(false)
            })
            .catch((error) => {
                toast.error(error.response.data.message)
                setLoading(false)
            })
    }

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
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    })
    return (
        <div className='border-b lg:border-neutral-900 border-neutral-800 pt-6 pb-4 lg:px-6 lg:mb-15' id='home'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 initial="hidden" animate="visible" variants={Container(0)} className='pb-10 text-6xl font-thin tracking-tight lg:mt-20 mt-16 lg:text-7xl'>G Prasant</motion.h1>
                        <motion.span initial="hidden" animate="visible" variants={Container(0.5)} className='bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-3xl text-transparent text-center'><Typewriter words={["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "REACT DEVELOPER"]} loop={50} cursor typeSpeed={110} deleteSpeed={110} delaySpeed={1000} /></motion.span>
                        <motion.p initial="hidden" animate="visible" variants={Container(1)} className='my-2 max-w-xl py-6 font-light text-neutral-300 tracking-wide'>I'm G Prasant, a Full-Stack Developer who enjoys building complete web applications from scratch — handling everything from backend APIs and databases to responsive frontends and deployment.</motion.p>
                        <div className='flex items-center justify-between lg:gap-3 gap-4'>
                            <Link to={user.resume && user.resume.url} target='_blank'>
                                <motion.button initial="hidden" animate="visible" variants={Container(1.5)} type='submit' className="w-36 py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 lg:rounded-md rounded-4xl text-black font-semibold hover:bg-gradient-to-br cursor-pointer tracking-wide">My Resume</motion.button>
                            </Link>
                            <motion.button initial={{ x: 100, opacity: 0 }} animate="visible" variants={Container(1.5)} onClick={() => setOpen(true)} className="w-43 py-2 px-4 bg-gradient-to-b from-[#f59e0b] via-[#f59e0b] to-[#ea580c] lg:rounded-md rounded-4xl text-black font-semibold hover:bg-gradient-to-br cursor-pointer tracking-wide">Connect with me
                            </motion.button>
                            <Modal open={open} onClose={() => setOpen(false)}>
                                <div onClick={(e) => e.stopPropagation()} className='lg:w-110 lg:h-90 w-85 bg-neutral-800 px-5 pb-5 lg:pt-4 pt-5 rounded-md transition-shadow'>
                                    <form className="flex flex-col w-full lg:w-1/2" onSubmit={handleSendMessage}>
                                        <h1 className="flex justify-center items-center text-2xl text-neutral-300 font-semibold lg:w-100 pb-2 tracking-wider">Let’s Connect</h1>
                                        <TextField
                                            label="Enter Your Name"
                                            variant="outlined"
                                            size="small"
                                            className='lg:w-100'
                                            name='name'
                                            value={Name}
                                            onChange={(e) => setName(e.target.value)}
                                            sx={{
                                                mt: 1, mb: 1,
                                                input: { color: '#e7e5e4' },
                                                '& .MuiInputLabel-root': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                },
                                            }}
                                        />
                                        <TextField
                                            label="Enter Subject"
                                            variant="outlined"
                                            size="small"
                                            className='lg:w-100'
                                            name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}
                                            sx={{
                                                my: 1,
                                                input: { color: '#e7e5e4' },
                                                '& .MuiInputLabel-root': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                },
                                            }}
                                        />
                                        <TextField
                                            label="Enter Message"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            size="small"
                                            className='lg:w-100'
                                            name='message' value={message} onChange={(e) => setMessage(e.target.value)}
                                            sx={{
                                                mt: 1, mb: 2,
                                                textarea: { color: '#e7e5e4' },
                                                '& .MuiInputLabel-root': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#aaa',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#aaa',
                                                    },
                                                },
                                            }}
                                        />
                                        {!loading ? (
                                            <button type='submit' className='lg:w-100 py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded text-black font-semibold hover:bg-gradient-to-br tracking-wide'>Send Message</button>
                                        ) : (
                                            <div>
                                                <img className='fixed top-0 left-0 z-40 w-[100vw] h-[100vh] object-none bg-[#1b1b1bb3]' src="Pulse@1x-1.0s-200px-200px.gif" alt="" />
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-2">
                    <div className="flex justify-center">
                        <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='lg:w-80 w-100 h-100 lg:ml-16 rounded-md lg:mt-10 mt-8 lg:mx-0 mx-2' src={user.avatar && user.avatar.url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
