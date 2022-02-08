import styles from "./treatsBarCodePage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import TreatsPage from "./TreatsPage";
import React from "react";
import barCode from "../images/Haagen-Daz_barcode.jpeg";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function TreatsBarCodePage({ treatItem, pointsEarned }) {
  const [deductPoints, setDeductPoints] = useState(pointsEarned);
  const [message, setMessage] = useState("Redeem your Points");

  const history = useHistory();

  const handleClick = (e, y) => {
    const subPoints = parseInt(deductPoints - y);
    let currentNumber = subPoints;

    if (deductPoints > y) {
      return setDeductPoints(currentNumber);
    } else if (deductPoints === y) {
      setDeductPoints(0);
    } else {
      setMessage("Not Enough Points");
    }

    history.push("/treatsbarcode");
  };

  return (
    <>
      {treatItem.map((treat) => (
        <div>
          <nav
            class="navbar navbar-expand-lg fixed-top headerTreatsPage"
            className={styles.headerTreatsPage}
          >
            <div key={treat.id} class="text-center">
              <h6>
                {message} {deductPoints}
              </h6>
              <h1>Treats</h1>
            </div>
          </nav>
          <div className={styles.container}>
            <div class="row subHeader" className={styles.subHeader}>
              <div class="col mt-3">
                <h6>{treat.name}</h6>
                <h4>{treat.description}</h4>
              </div>
            </div>
          </div>

          <div className={styles.treatsMenu}>
            <div class="row menu-name" className={styles.menuName}></div>
            <div class="row mt-3">
              <img class={styles.treatImg} src={treat.img} alt={treat.name} />
              <div class="row">
                <div class="col-6">
                  <p className={styles.treatPoints}>⭐︎ {treat.points}</p>
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
                <img
                  src={barCode}
                  alt="bar-code"
                  width="300"
                  className={styles.container}
                />
                <p class="text-bold mt-3" className={styles.textBold}>
                  Or Use the promo code
                </p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="text-center mt-2 " className={styles.promo}>
                <a class="text-center" href="">
                  {treat.promo}
                </a>
              </div>
            </div>
            <button
              className={styles.linkBtn}
              onClick={(e) => handleClick(e, treat.points)}
            >
              Get Item
            </button>
          </div>
          <div class="row mt-5">
            <p class="text-bold text-center mb-2">
              to treat yourself or others!
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TreatsBarCodePage;
