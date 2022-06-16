import React from "react";
import styles from "../styles/footer.module.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footercontentcontainer}>
        <div className={styles.footercontent}>
          <strong>itopya.com</strong>
          <ul>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Kariyer</a>
            </li>
            <li>
              <a href="#">Mağzalarımız</a>
            </li>
            <li>
              <a href="#">Duyurular</a>
            </li>
            <li>
              <a href="#">Bize Ulaşın</a>
            </li>
          </ul>
        </div>
        <div className={styles.footercontent}>
          <strong>işlem rehberi</strong>
          <ul>
            <li>
              <a href="#">Giriş</a>
            </li>
            <li>
              <a href="#">Kayıt Ol</a>
            </li>
            <li>
              <a href="#">Nasıl Sipariş verebilirim?</a>
            </li>
            <li>
              <a href="#">Ödeme Seçenekleri</a>
            </li>
            <li>
              <a href="#">Ödeme ve Güvenlik</a>
            </li>
          </ul>
        </div>
        <div className={styles.footercontent}>
          <strong>Müşteri Hizmetleri</strong>
          <ul>
            <li>
              <a href="#">Garanti Koşulları</a>
            </li>
            <li>
              <a href="#">İptal ve İade Koşulları</a>
            </li>
            <li>
              <a href="#">Sıkça Sorulan Sorular</a>
            </li>
            <li>
              <a href="#">KVKK Aydınlatma Metni</a>
            </li>
            <li>
              <a href="#">Gizlilik Politikamız</a>
            </li>
          </ul>
        </div>
        <div className={styles.footercontent}>
          <strong>Kategoriler</strong>
          <ul>
            <li>
              <a href="#">Hazır Sistemler</a>
            </li>
            <li>
              <a href="#">Bilgisayar Toplama</a>
            </li>
            <li>
              <a href="#">Gaming Notebooklar</a>
            </li>
            <li>
              <a href="#">Gaming Monitörler</a>
            </li>
          </ul>
        </div>
        <div className={styles.contactcontainer}>
          <div className={styles.contactphone}>
            <span>
              <img src="https://www.itopya.com/images/icon-phone.png" alt="" />
              <a href="#">0850 259 26 96</a>
            </span>
            <p>
              Çağrı Merkezimize hafta içi her gün <br />
              sabah 9:00 ila akşam 18:00 arası ulaşabilirsiniz.
            </p>
            <div className={styles.socialmedia}>
              <a href="">
                <RiFacebookBoxFill />
              </a>
              <a href="">
                <BsTwitter />
              </a>
              <a href="">
                <AiOutlineInstagram />
              </a>
              <a href="">
                <SiTiktok />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
