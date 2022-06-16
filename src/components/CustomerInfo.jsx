import React from "react";
import styles from "../styles/customer.module.css";
const CustomerInfo = () => {
  return (
    <div className={styles.customer}>
      <div className={styles.customercontainer}>
        <div className={styles.customerflex}>
          <div className={styles.customerinner}>
            <img
              src="https://www.itopya.com/images/icon-customer-happiness.png"
              alt=""
            />
            <span>MÜŞTERİ MEMNUNİYETİ</span>
          </div>
        </div>
        <div className={styles.customerflex}>
          <div className={styles.customerinner}>
            <img src="https://www.itopya.com/images/icon-warranty.png" alt="" />
            <span>%100 GARANTİ</span>
          </div>
        </div>
        <div className={styles.customerflex}>
          <div className={styles.customerinner}>
            <img
              src="https://www.itopya.com/images/icon-customer-services.png"
              alt=""
            />
            <span>TEKNİK DESTEK VE MONTAJ</span>
          </div>
        </div>
        <div className={styles.customerflex}>
          <div className={styles.customerinner}>
            <img
              src="https://www.itopya.com/images/icon-cargo-services.png"
              alt=""
            />
            <span>KARGO HİZMETİ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
