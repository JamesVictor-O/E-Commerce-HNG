import React from 'react'
import Advert from '../../components/Advert/Advert'
import AvailableStock from '../../components/AvailableStock/AvailableStock'
import BillBord from "../../components/BillBorad/BillBord";

const ShoppingPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <Advert />
      <AvailableStock />
      <BillBord />
    </div>
  );
};

export default ShoppingPage
