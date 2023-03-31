import React from "react";
import styles from "../styles/loginpage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginbox}>
        <a href="#">
          <img src="https://www.itopya.com/images/logo-itopya.png" alt="" />
        </a>
        <h1>Hoşgeldiniz</h1>
        <form className={styles.form}>
          <div className={styles.formgroup}>
            <input
              className={styles.emailform}
              type="text"
              placeholder="E-posta adresiniz"
            />
          </div>
          <div className={styles.formgroup}>
            <input
              className={styles.passwordform}
              type="password"
              placeholder="şifre"
            />
          </div>
          <div className={styles.formgroup}>
            <input
              className={styles.checkform}
              type="checkbox"
              placeholder="şifre"
            />{" "}
            &nbsp; Şifreyi Göster
          </div>

          <button className={styles.loginbtn}>Giriş Yap</button>
          <a href="#" className={styles.forgotpass}>
            Şifremi Unuttum
          </a>
          <button className={styles.signup}>Üye Ol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
