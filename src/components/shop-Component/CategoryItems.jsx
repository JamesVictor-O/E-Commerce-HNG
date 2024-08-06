import React from "react";

const CategoryItems = ({product}) => {
  return (
    <div>
      <div>
        <img src={product.imageUrl} alt="" />
      </div>
          <span>{product.name }</span>
    </div>
  );
};

export default CategoryItems;
