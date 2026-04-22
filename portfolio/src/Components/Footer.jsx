import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from '../assets/G.png'
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { motion } from 'framer-motion';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleSendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(
            "https://mern-stack-portfolio-6r58.onrender.com/api/v1/email/send",
            { email },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(() => {
                toast.success("SUBSCRIBED!")
                setEmail("")
                setLoading(false)
            })
            .catch((error) => {
                toast.error(error.response.data.message)
                setLoading(false)
            })
    }

    const navigateTo = useNavigate();
    const handleReturnToHome = () => {
        navigateTo("/");
    };
    return (
        <div className='footer'>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="mx-2 my-1">
                    <img className='w-15 cursor-pointer' onClick={handleReturnToHome} src={logo} alt="" />
                    <p className='pt-3 pb-2 lg:hidden flex'>I am a fullStack web and frontend Developer from, India.</p>
                </div>
                <div className="flex items-center gap-2 lg:my-3 my-3">
                    <motion.div whileInView={{opacity: 1, x: 0}} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} className="flex items-center justify-between gap-2 bg-neutral-800 rounded-4xl lg:py-2 py-1 lg:px-4 px-3.5">
                        <BiUser className='' />
                        <input className='outline-none w-full' type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </motion.div>
                    {!loading ? (
                        <motion.button whileInView={{opacity: 1, x: 0}} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} type='submit' className='cursor-pointer lg:py-2 py-1 lg:px-4 px-3.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-4xl text-black font-semibold hover:bg-gradient-to-br' onClick={handleSendEmail}>Subscribe</motion.button>
                    ) : (
                        <div>
                            <img className='fixed top-0 left-0 z-40 w-[100vw] h-[100vh] object-none bg-[#1b1b1bb3]' src="Pulse@1x-1.0s-200px-200px.gif" alt="" />
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:justify-between gap-2 lg:pb-8 pb-6 pt-4">
                <p>@2025 G Prasant All Rights Reseved.</p>
                <div className="lg:flex lg:items-center lg:gap-5 text-neutral-300">
                    <p onClick={() => setOpen(true)} className='mb-1 cursor-pointer'>Terms of Services & Privacy Policy</p>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div className='bg-neutral-700 lg:w-160 w-90 h-90 overflow-y-auto lg:p-6 p-4 rounded-lg'>
                            <div>
                                <h1 className='flex items-center justify-center mb-6 text-2xl font-thin'>Term of Services & Privacy Policy</h1>
                            </div>
                            <div className=''>
                                <h6 className='mb-3 text-sm font-mono'>
                                    Welcome to G Prasant(Portfolio). By accessing or using this Website, you agree to be bound by these Terms of Service. If you do not agree with these Terms, please do not use the Website.</h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Use of the Website :</p>
                                    This Website is provided for informational and showcase purposes only. It is intended to display the work, projects, and personal achievements of G Prasant.

                                    You may browse the Website freely, but you may not copy, distribute, modify, or exploit any content without express permission from the owner.

                                    Any unauthorized use of the Website may result in legal action.</h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Intellectual Property Rights :</p>

                                    All content, including but not limited to images, text, graphics, and projects displayed on this Website, is the intellectual property of G Prasant unless otherwise stated.

                                    You may not use any content from this Website for commercial purposes without prior written consent from the owner.

                                    Any third-party content or materials used on the Website are credited accordingly and remain the property of their respective owners.
                                </h6>
                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>User Conduct :</p>

                                    You agree not to engage in any activities that may harm, disrupt, or interfere with the Website's functionality or security.

                                    You shall not attempt to gain unauthorized access to any portion of the Website or its related systems.

                                    Any comments or messages sent through contact forms or email should be respectful and relevant to the Website's purpose.
                                </h6>
                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Third-Party Links :</p>

                                    this Website may contain links to third-party websites for reference or networking purposes.

                                    G Prasant is not responsible for the content, privacy policies, or practices of third-party websites. Visiting third-party websites is at your own risk.</h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Disclaimer and Limitation of Liability :</p>
                                    The Website is provided "as is" without warranties of any kind, either express or implied.

                                    G Prasant is not responsible for any errors, inaccuracies, or technical issues that may arise while using the Website.

                                    In no event shall G Prasant be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website.</h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Privacy Policy :</p>
                                    <p className='mb-2'>The Website may collect limited personal information, such as name and email, when users voluntarily submit it through contact forms or other means.</p>

                                    <p className='mb-2'>The collected information is used for communication purposes only, such as responding to inquiries or providing updates related to the Website.</p>

                                    <p className='mb-2'>The Website may use cookies or similar technologies to enhance user experience and analyze site traffic. You can adjust your browser settings to decline cookies if preferred.
                                    </p>

                                    <p className='mb-2'>Your personal information will not be sold, shared, or distributed to third parties without your consent, except when required by law. Reasonable security measures are in place to protect</p> 

                                    <p className='mb-2'>The Website may include third-party services, such as analytics or embedded content, which may collect data based on their own privacy policies.</p>
                                    </h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Changes to the Terms :</p>
                                    G Prasant reserves the right to update or modify these Terms at any time without prior notice.

                                    Continued use of the Website after changes to the Terms constitutes acceptance of the new Terms.</h6>

                                <h6 className='mb-3 text-sm'>
                                    <p className='mb-2 font-semibold'>Governing Law :</p>
                                    These Terms are governed by and construed in accordance with the laws of Odisha, India.

                                    Any disputes arising from the use of this Website shall be subject to the exclusive jurisdiction of the courts in Rourkela.</h6>

                                <h6 className='mb-3 text-lg font-mono'>
                                    If you have any questions regarding these Terms, please contact <p className='text-lg font-semibold bg-gradient-to-b from-[#f59e0b] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent hover:bg-gradient-to-br'>prasantrao917@gmail.com.</p></h6>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div >
        </div >
    )
}

export default Footer

