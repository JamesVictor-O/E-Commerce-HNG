import { CartProvider } from "./CartContext/CartContext";
import { ProductProvider } from "./ProductContext/ProductContext";
import { UIprovider } from "./UIContext/UiProvider";

const MyStateProvider = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>
        <UIprovider>{children}</UIprovider>
      </ProductProvider>
    </CartProvider>
  );
};

export default MyStateProvider;
