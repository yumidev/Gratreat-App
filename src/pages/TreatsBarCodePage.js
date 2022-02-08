import styles from "./treatsBarCodePage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import TreatsPage from "./TreatsPage";
import React from "react";
import iceCream from "../images/Treats-Redeem-icecream.png";
import barCode from "../images/Haagen-Daz_barcode.jpeg";

function TreatsBarCodePage() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg fixed-top headerTreatsPage"
        className={styles.headerTreatsPage}
      >
        <div class="text-center">
          <h6>Redeem your</h6>
          <h1>Treats</h1>
        </div>
      </nav>

      <div className={styles.container}>
        <div class="row subHeader" className={styles.subHeader}>
          <div class="col mt-3">
            <h6>Eat Well Haagen Dazs</h6>
            <h4>Free Icecream 2 scoops</h4>
          </div>
        </div>
      </div>

      <div className={styles.treatsMenu}>
        <div class="row menu-name" className={styles.menuName}></div>
        <div class="row mt-3">
          <img src={iceCream} alt="iceCream-treat" />
          <div class="row">
            <div class="col-6">
              <p className={styles.treatPoints}>⭐︎ 4500 Points</p>
            </div>
            <div class="col-6">
              <p className={styles.treatExpiration}>Expires in 30 days</p>
            </div>
          </div>
        </div>
        <div class="row mt-3 menu-name" className={styles.menuName}>
          <p class="text-bold text-center mt-3 mb-3">
            Scan the product barcode
          </p>
        </div>
        <div class="row">
          <div class="col-12 mt-3">
            <img src={barCode} alt="bar-code" width="300" />
            <p class="text-bold mt-3" className={styles.textBold}>
              Or Use the promo code
            </p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="text-center mt-2 " className={styles.promo}>
            <a class="text-center" href="">
              GRATICREAM21
            </a>
          </div>
        </div>
        <div class="row mt-5">
          <p class="text-bold text-center mb-2">to treat yourself or others!</p>
        </div>
      </div>
    </>
  );
}

export default TreatsBarCodePage;
