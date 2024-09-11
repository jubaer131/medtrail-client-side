import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const AboutUs = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='w-full space-y-4 bg-emerald-100 p-8  md:h-[550px]' style={{
                backgroundImage: "url('https://i.ibb.co.com/QkRtPXp/IMG-8644-2.jpg')",
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                backgroundPosition: "center", // Centers the background image
            }}>

                <div className='text-right lg:mr-60 lg:mt-52'>

                    <h1 className='text-white lg:text-5xl '>Movement of Care</h1>
                </div>
            </div>
            <div className='max-w-5xl mx-auto md:my-8 my-2 p-8 space-y-4 '>
                <h1 className='text-3xl'>Mission Statement</h1>
                <br />
                <p className='text-[16px] text-[#31af6e]'>Working toward healthier camp communities</p>
                <p>Serving the three distinct communities of nurses and healthcare providers, behavioral health specialists and camp leadership, the Alliance for Camp Health (ACH) serves as the knowledge center for camp health services. ACH prepares healthcare providers, behavioral health specialists and camp leaders to address the wellbeing of youth and young adults in summer learning environments. We offer education and support that brings together the experts in camp to address injury prevention, illness response, mental, emotional, and social health care, behavioral health support, and risk management.  To this end, ACH strives to support other programs seeking validation and who wish to be vetted by ACH as promoting healthy camp programs, services, or activities.</p>

                <p>As the landscape of camp health continues to evolve our purpose remains the same. We are focused on care. Our Care Team strives to create healthier camp communities by creating leaders, collaborating with partners, generating evidence, innovating programs, and improving human capital one CareTeam at a time.</p>

                <h1 className='text-3xl'>Ends Statements</h1>
                <p className='text-[#31af6e]'>Ends Statements (listed in no particular order)</p>

                <ul className='pl-12'>
                    <li className='list-disc  '>

                        Every camp will have an appropriate healthcare provider
                    </li>
                    <li className='list-disc '>

                        A robust body of knowledge directs camp health services
                    </li>
                    <li className='list-disc '>

                        The camp experience is intentionally designed to promote wellbeing
                    </li>
                </ul>

                <div className='lg:flex justify-center items-center gap-5 '>
                    <div>
                        <img src="https://i.ibb.co.com/wCdSsHD/ACH-Fire2.png" alt="" />
                        <h1 className='text-center text-[15px] font-semibold mt-10 mb-2'> CAMP NURSING PRACTICE</h1>
                        <p className='text-center text-[18px]'>Standards of Practice and tools for camp nurses</p>
                        <br /><br />
                        <p className='text-start text-[17px] mb-7 '>The ACH CareTeam is a dedictaed group of nurses, camp leaders, behavioral health specialists and creative folks who are passionate about healthy camp communities.</p>
                        <img src="https://i.ibb.co.com/zX3Sn6m/close-up-medical-team-ready-work.jpg" className='h-[305px]  w-full' alt="" />
                        <p className='text-start text-[17px] mt-7 '>
                            Meet the Care Team: Our compassionate team offers personalized care & support.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/wScWqbF/ACH-Tree.png" alt="" />
                        <h1 className='text-center text-[15px] font-semibold mt-10 mb-2'>MANAGING CAMP HEALTH</h1>
                        <p className='text-center text-[18px]'>The framework and management of Camp Health Services</p>
                        <br /><br />
                        <p className='text-start text-[17px] mb-7 '>The ACH CareTeam is a dedictaed group of nurses, camp leaders, behavioral health specialists and creative folks who are passionate about healthy camp communities.</p>
                        <img src="https://i.ibb.co.com/NTDM3gr/man-jacket-folder-successful-manager-work-with-documents-inspecting-finances-concept-474717-39446.jpg" className='h-[305px]  w-full' alt="" />
                        <p className='text-start text-[17px] mt-7 '>Research drives the work of ACH resulting in evidence based practice and resources</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/hCJwrwd/ACH-Water.png" alt="" />
                        <h1 className='text-center text-[15px] font-semibold mt-10 mb-2'>BEHAVIORAL HEALTH INITIATIVES</h1>
                        <p className='text-center text-[18px]'>Supporting mental, social and emotional health (MESH)</p>
                        <br /><br />
                        <p className='text-start text-[17px] mb-7 '>The ACH CareTeam is a dedictaed group of nurses, camp leaders, behavioral health specialists and creative folks who are passionate about healthy camp communities.</p>
                        <img src="https://i.ibb.co.com/mBSXmP2/intercultural-male-friends-looking-map-23-2148300941.jpg" className='h-[305px]  w-full' alt="" />
                        <p className='text-start text-[17px] mt-7 '>Research drives the work of ACH resulting in evidence based practice and resources</p>
                    </div>

                </div>





            </div>
        </>
    );
};

export default AboutUs;