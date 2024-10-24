import React from 'react'
import Advert from '../../components/Advert/Advert'
import AvailableStock from '../../components/AvailableStock/AvailableStock'
import BillBord from "../../components/BillBorad/BillBord";
import SearchSection from '../../components/Header/SearchSection/SearchSection';

const ShoppingPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-4 mt-20">
      <SearchSection/>
      <Advert />
      <AvailableStock />
      <BillBord />
    </div>
  );
};

export default ShoppingPage
