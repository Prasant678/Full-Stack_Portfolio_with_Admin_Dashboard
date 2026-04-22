import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';

const Contact = () => {
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

    const contactText = import.meta.env.VITE_CONTACT_TEXT;
    const email = import.meta.env.VITE_EMAIL_ADDRESS;
    const loaction = import.meta.env.VITE_LOACTION;
    return (
        <div id='contact' className='lg:px-10 pb-10 mb-10'>
            <div className="flex items-center justify-center lg:pb-7 lg:pt-8">
                <motion.h1 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='text-4xl font-thin text-neutral-400 lg:pt-4 pt-8 lg:pb-1 pb-4'>Get in Touch</motion.h1>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
                <div className="lg:py-10 py-5 lg:px-6 w-full lg:w-1/2">
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className='text-4xl font-semibold mb-5 bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1] bg-clip-text text-transparent'>LET'S TALK</motion.h1>
                    <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className='text-lg lg:font-thin font-extralight mb-4'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</motion.p>
                    <div className="">
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1, delay: 0.5 }} className="flex items-center gap-2.5 mb-3">
                            <IoIosMail className='text-xl mt-1 text-sky-600' />
                            <p className='text-[16px] font-semibold text-neutral-400'>prasantrao917@gmail.com</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2, delay: 0.5 }} className="flex items-center gap-2.5 mb-3">
                            <IoIosCall className='text-xl text-green-600' />
                            <p className='text-[16px] font-semibold text-neutral-400'>+91-9692858292</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.4, delay: 0.5 }} className="flex items-center gap-2.5 mb-3">
                            <FaLocationDot className='text-xl text-red-600' />
                            <p className='text-[16px] font-semibold text-neutral-400'>Rourkela, Odisha</p>
                        </motion.div>
                    </div>
                </div>
                <form className="flex flex-col w-full lg:w-1/2 lg:pt-7" onSubmit={handleSendMessage}>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                        <TextField
                            label="Enter Your Name"
                            variant="outlined"
                            size="small"
                            className='lg:w-125 w-full'
                            name='name'
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                mt: 1, mb: 1.3,
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
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                        <TextField
                            label="Enter Subject"
                            variant="outlined"
                            size="small"
                            className='lg:w-125 w-full'
                            name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}
                            sx={{
                                mt: 1, mb: 1.3,
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
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                        <TextField
                            label="Enter Message"
                            variant="outlined"
                            multiline
                            rows={5}
                            size="small"
                            className='lg:w-125 w-full'
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
                    </motion.div>
                    {!loading ? (
                        <motion.button whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} type='submit' className='lg:w-125 py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded text-black font-semibold hover:bg-gradient-to-br'>Send Message</motion.button>
                    ) : (
                        <div>
                            <img className='fixed top-0 left-0 z-40 w-[100vw] h-[100vh] object-none bg-[#1b1b1bb3]' src="Pulse@1x-1.0s-200px-200px.gif" alt="" />
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Contact
