import React from 'react'

const Footer = () => {
  return (
      <div className='bg-white'>
          <div className="container max-w-[1140px] mx-auto px-3 pt-[90px] max-lg:pt-[50px] max-sm:pt-6" >
              <div className='flex flex-wrap -mx-3 justify-between'>
                  <div className='w-full lg:w-2/12 px-3 max-sm:text-center'>
                      <div>
                          <a href='#'>
                              <h2 className='font-semibold text-[#1E71FF] text-[26px] poppins'>chat<span
                                  className="font-[275]">app</span>
                              </h2>
                          </a>
                          <p className='m-0 text-sm font-normal roboto text-[#2B353EB2] pt-[18px] max-lg:pt-3'>The last team chat you will ever need.</p>
                      </div>
                  </div>
                  <div className='w-full lg:w-8/12 px-3'>
                      <div className='flex flex-wrap -mx-3 justify-between'>
                          <div className='w-full sm:w-1/2 md:w-2/12 px-3 max-sm:text-center max-lg:mt-5'>
                              <ul>
                                  <lh className='text-lg text-[#2B353E] font-normal poppins'>Help</lh>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Support</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Knowledgebase</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Tutorials</a></li>
                              </ul>
                          </div>
                          <div className='w-full sm:w-1/2 md:w-3/12 px-3 max-sm:text-center max-lg:mt-5'>
                              <ul>
                                  <lh className='text-lg text-[#2B353E] font-normal poppins'>Features</lh>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Screen Sharing</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>iOS & Android Apps</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>File Sharing</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>User Management</a></li>
                              </ul>
                          </div>
                          <div className='w-full sm:w-1/2 md:w-2/12 px-3 max-sm:text-center max-lg:mt-5'>
                              <ul>
                                  <lh className='text-lg text-[#2B353E] font-normal poppins'>Company</lh>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>About Us</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Careers</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>Contact Us</a></li>
                              </ul>
                          </div>
                          <div className='w-full sm:w-1/2 md:w-3/12 px-3 max-sm:text-center max-lg:mt-5'>
                              <ul>
                                  <lh className='text-lg text-[#2B353E] font-normal poppins'>Contact Us</lh>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>info@chatapp.com</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>1-800-200-300</a></li>
                                  <li><a href="#" className='text-13px font-normal roboto text-[#2B353EB2] hover:text-[#1E71FF] transition-all duration-300 hover:text-bold'>3500 Deer Creek Rd Palo Alto,CA</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='pt-[180px] pb-7 max-sm:text-center max-lg:pt-[140px] max-md:pt-[80px] max-sm:pt-10'> 
                  <p className='roboto font-normal text-13px text-[#2B353E]'>
                      © Copyright ChatApp Inc.
                  </p>
              </div>
          </div>
    </div>
  )
}

export default Footer