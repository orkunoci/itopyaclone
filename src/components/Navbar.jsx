import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/itopya-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navleft}>
        <div className={styles.navlogo}>
          <a href="/">
            <div className={styles.hammenu}>
              <GiHamburgerMenu />
            </div>
            <img src={logo} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.navinputcontainer}>
        <div className={styles.navinput}>
          <input type="text" placeholder="Anahtar Kelime, model veya ürün" />
          <button className={styles.searchbutton}>
            <AiOutlineSearch />
          </button>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="/">Hazır Sistemler</a>
            </li>
            <li>
              <a href="/">Kendin Topla</a>
            </li>
            <li>
              <a href="/">Hakkımızda</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navright}>
        <div className={styles.logincontainer}>
          <Link to="/login">
            <div className={styles.ppicon}>
              <HiOutlineUserCircle />
            </div>
            <div className={styles.loginexp}>
              <p>merhaba,</p>
              <span>giriş yapın</span>
            </div>
          </Link>
        </div>
        <div className={styles.cartcontainer}>
          <a href="/">
            <div className={styles.ppicon}>
              <FaShoppingCart />
            </div>
            <span>Alışveriş sepeti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
