import { useState } from "react";
import { useAppSelector } from "redux/hooks";
import Cart from "components/Cart";
import styles from "./styles.module.css";

const Header = () => {
  const [cartClose, $cartClose] = useState(false);
  const { cart: items } = useAppSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/">navbar</a>
          <div>
            <button
              className={styles.cartBtn}
              onClick={() => $cartClose(true)}
              type={"button"}
            >
              {items?.length === 0 || null ? null : (
                <span className={styles.badge}>{items?.length}</span>
              )}
              <img
                className={styles.cartImg}
                src="/icons/cart.svg"
                alt="cart"
              />
            </button>
          </div>
        </div>
      </nav>

      {cartClose && <Cart close={() => $cartClose(false)} />}
    </>
  );
};

export default Header;
