import React from 'react'
import Hero from '../assets/images/hero-image.webp'

function Header() {
    return (
        <div className='flex items-center bg-[#1E71FF] flex-col'>
            <div className='container max-w-[1140px]  mx-auto  px-3 flex items-center justify-between pt-5'>
                <div>
                    <a href='#'>
                        <h2 className='font-semibold text-white text-[26px] poppins'>chat<span
                            className="font-[275]">app</span>
                        </h2>
                    </a>
                </div>
                <input type="checkbox" id="menubar" hidden/>
                    <label for="menubar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                <ul className='menu-list flex items-center gap-[30px]'> 
                    <li><a href='#' className='font-medium text-white text-sm roboto hover:text-[#FBA229] transition-all duration-300'>Product</a></li>
                    <li><a href='#' className='font-medium text-white text-sm roboto hover:text-[#FBA229] transition-all duration-300'>Services</a></li>
                    <li><a href='#' className='font-medium text-white text-sm roboto hover:text-[#FBA229] transition-all duration-300'>Contact</a></li>
                    <li><a href='#' className='font-medium text-white text-sm roboto hover:text-[#FBA229] transition-all duration-300'>Log In</a></li>
                    <li><button
                        className='px-5 py-2 rounded-full border border-transparent roboto font-medium text-sm text-white bg-[#4B8DFF] hover:text-[#1E71FF] transition-all duration-300 hover:bg-white'>Try
                        It Free</button></li>
                </ul>
            </div>
            <div className="container max-w-[1140px] mx-auto px-3 mt-[146px] pb-40 max-lg:mt-[80px] max-md:mt-[50px] max-sm:mt-[30px] max-lg:pb-[100px] max-md:pb-[50px] max-sm:pb-[30px]">
                <div className="flex flex-wrap -mx-3 justify-between">
                    <div className="w-full md:w-5/12 px-3">
                        <div className='pt-[86px] max-lg:pt-[40px] max-md:pt-0'>
                            <h2 className='text-[75px] leading-[96px] font-bold poppins text-white poppins max-lg:text-[60px] max-md:text-[50px] max-lg:leading-[80px] max-sm:text-[45px] max-sm:leading-[65px]'>Have your best chat</h2>
                            <p className='m-0 text-xl font-normal text-white pt-5 max-md:pt-2 roboto max-sm:text-lg'>Fast, easy & unlimited team chat.</p>
                            <div className='flex items-center gap-8 mt-14 max-lg:mt-10 max-md:mt-7 max-md:gap-3 max-sm:mt-3'>
                                <button className='py-4 px-[48px] max-sm:px-7 max-md:px-10 roboto font-medium text-md rounded-full bg-white hover:bg-[#1E71FF] hover:text-white text-[#1E71FF] border border-transparent hover:border-white  transition-all duration-300 whitespace-nowrap'>Try it Free</button>
                                <button className='py-4 px-[48px] max-sm:px-7 max-md:px-10 roboto font-medium text-md rounded-full bg-[#1E71FF] border border-white hover:bg-white text-white hover:text-[#1E71FF] transition-all duration-300 whitespace-nowrap'>Get a Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-3 max-lg:mt-6">
                        <div>
                            <img src={Hero} alt="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header