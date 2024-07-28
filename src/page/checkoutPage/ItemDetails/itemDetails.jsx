import star from "../../../assets/Star.svg"

const ItemDetails = ({product}) => {
  return (
    <div className='w-[113px] h-[59.96px] flex flex-col justify-between items-start md:w-[184px] md:h-[140px]'>
        <div className="md:w-[184px] md:h-[100px] h-[80.21px] ml-5 flex justify-around flex-col">
            <div className='h-[37.02px] flex flex-col justify-between'>
                <h2 className='h-[19px] font-semibold text-[16.03px] leading-[19.3px] '>{product.name}</h2>
                <div>
                <span>1 item</span>
                <span>* Zip</span>
                </div>
            </div>

            <div className='w-[81.95px] h-[14.9px] flex flex-row justify-between'>
                <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                    <img src={star} alt="rating" /> 
                </div> 
                <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                    <img src={star} alt="rating" /> 
                </div> 
                <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                    <img src={star} alt="rating" /> 
                </div> 
                <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                    <img src={star} alt="rating" /> 
                </div> 
                <div className='w-[14.9px] h-[14.9px] rounded-[3.31px] bg-black'>
                    <img src={star} alt="rating" /> 
                </div> 
            </div>
        </div>        
        <div className="hidden md:w-[123px] md:h-[24px] h-[80.21px] ml-5 md:flex align-bottom items-end flex-row">
            <span className="w-[58px] h-[24px] font-medium text-[20px] leading-[24px] text-[#B9BFBF]">Color:</span>
            <span className="w-[61px] h-[22px] font-normal text-[18px] leading-[21.6px] text-black">Cream</span>
        </div>
    </div>
  )
}

export default ItemDetails
