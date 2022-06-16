import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/products.module.css";

const Products = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <>
      <Navbar />
      <div className={styles.productspagecontainer}>
        <div className={styles.cont}>
          <div className={styles.productssidebar}>
            <div className={styles.accordion}>
              <div className={styles.card}>
                <a href="#" className={styles.cardheader} onClick={handleClose}>
                  Marka
                </a>
                <div className={close ? styles.collapse : styles.close}>
                  <div className={styles.cardbody}>
                    <div className={styles.customcheck}>
                      <input type="checkbox" name="" />
                      <label htmlFor="" className={styles.label}>
                        ITOPYA
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productscontainer}>PRODUCTS</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
