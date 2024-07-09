import logo from "../../assets/logo.svg"
import send from "../../assets/Send.svg"
import tiktok from "../../assets/tiktok.svg"
import instagram from "../../assets/instagram.svg"
import whatsapp from "../../assets/whatsapp.svg"

const Footer = () => {
  return (
    <div className='w-[397px] h-[751px] mt-[150px] md:mt-[20px] bg-black md:w-[1400px] md:h-[500px] md:flex md:flex-row'>
      <div className="h-[147px] w-[375px] flex flex-col justify-between md:w-[720px]">
        <div className="text-white w-[254.26px] h-[36px]  pt-[31px] ml-[24px]">
           <img src={logo} alt=""  />
        </div>
        <span className="w-[352px] h-[75px] text-white text-[16px] leading-[24.96.px] text-center font-normal p-4">We provide comfty tote bags that won't mess up your style and have plenty of space for all your stuff </span>
      </div>
      <div className="flex flex-col items-center justify-center md:justify-normal md:items-start md:flex md:flex-row">
           <div className=" w-[375px] h-[197px] text-white flex flex-col justify-center align-middle  items-center mt-8 ">
                <div className="w-[176px] h-[197px] flex flex-col justify-center items-center text-center">
                    <h2  className="w-[100px] h-[25px] font-extrabold text[18px] leading-[25.2px] mb-2">Quick Links</h2>
                    <h2 className="w-[166px] h-[20px] font-normal text[14px] leading-[19.6px] mb-2">Terms & Conditions</h2>
                    <h2 className="w-[147px] h-[20px] font-normal text[14px] leading-[19.6px] mb-2">Privacy Policy</h2>
                    <h2 className="w-[96px] h-[20px] font-normal text[14px] leading-[19.2px] mb-2">Contact Us</h2>
                    <h2 className="w-[166px] h-[20px] font-normal text[14px] leading-[19.6px] mb-2">Terms and Services</h2>
                    <h2 className="w-[108px] h-[25px] font-normal text[14px] leading-[25.2px] mb-2">Refund policy</h2>
                </div>
           </div>
           <div className="w-[377px] text-white mt-6 md:flex md:flex-col md:items-start">
               <div className="w-[375] flex justify-center items-center">
                  <h2 className="w-[200px] h-[34px] text-[24px] leading-[33.6px] font-extrabold">Connect With Us</h2>
               </div>
               <div className="w-[326px] h-[75px] flex justify-center items-center mt-7">
                  <p className=" font-normal text-[16px] leading-[24.96px] text-center md:text-left ml-2 w-[326px]">Subscribe to our Newsletter to be the first to be aware of recent production and other production offers.</p>
               </div>
               <div className="relative w-[370px] h-[54px] rounded-[9.04px] flex md:items-start items-center md:justify-normal  justify-center mt-6">
                  <input type="text" placeholder=" Enter email address" className="w-[291px] pt-[12.05px] pl-[22.6px] pb-[12.05px] pr-[18.08px] h-[54px] rounded-[9.04px] outline-none text-black"/>
                  <img src={send} alt="" className="absolute right-[60px] md:right-[100px] md:bottom-[10px]"/>
               </div>
           </div>
           <div className="md:hidden w-[128px] h-[24px] flex flex-row items-center justify-between mt-6">
              <img src={tiktok} alt="tiktok" />
              <img src={instagram} alt="instagram" />
              <img src={whatsapp} alt="whatsapp" />
           </div>
      </div>
    </div>
  )
}

export default Footer
