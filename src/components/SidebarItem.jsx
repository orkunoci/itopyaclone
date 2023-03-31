import React, { useState } from "react";

import styles from "../styles/hero.module.css";
import { BsChevronLeft } from "react-icons/bs";
const SidebarItem = ({ item }) => {
  const [side, setSide] = useState(true);

  const handleSide = () => {
    setSide(!side);
  };
  return (
    <ul>
      <li>
        <a href="javascript:;" onClick={handleSide}>
          <span className={styles.icon}>
            <img src={item.image} alt="" />
          </span>
          <span className={styles.text}>{item.name}</span>
        </a>
        <div className={side ? styles.sub : styles.disapp}>
          <a href="javascript:;" className={styles.back} onClick={handleSide}>
            <BsChevronLeft className={styles.leftarrow} />
            <span>{item.name}</span>
          </a>

          <ul>
            {item.submenu.map((a) => {
              return (
                <li key={a.id}>
                  <a href="">
                    <span className={styles.icon}>
                      <img src={a.subimage} alt="" />
                    </span>

                    <span
                      style={{ textTransform: "capitalize" }}
                      className={`${styles.text} txt`}
                    >
                      {a.subname}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default SidebarItem;
