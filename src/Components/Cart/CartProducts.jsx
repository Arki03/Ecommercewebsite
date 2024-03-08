import { useSelector } from "react-redux";
import { productsData } from "../../Data/productsData";
import CartProduct from "./CartProduct";
import styles from "./CartProducts.module.scss";

const CartProducts = () => {
  const { cartProducts } = useSelector((state) => state.products);

  return (
    <table className={styles.cartProducts}>
      <thead>
        <tr>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>

      <tbody>
        {productsData.map((product) => (
          <CartProduct key={product.id} data={product} />
        ))}
      </tbody>
    </table>
  );
};
export default CartProducts;