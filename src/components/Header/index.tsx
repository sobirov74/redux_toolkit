import { useState } from "react";
import Cart from "components/Cart";
import styles from "./styles.module.css";
import { useAppSelector } from "shared/utils/hooks";
import { cartSelector } from "shared/redux/reducers/cartReducer";

const Header = () => {
  const [cartClose, $cartClose] = useState(false);
  const { cart: items } = useAppSelector(cartSelector);

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
