import React from "react";
import styles from "./TreatsPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import TreatsBarCodePage from "./TreatsBarCodePage";
import { Switch, Route, Link } from "react-router-dom";
import coffeeImage from "../images/Treats-Item1-Coffee.png";
import macaroons from "../images/Treats-Item2-Macaroons.png";
import yoga from "../images/Treats-Item4-Yoga.png";
import meditation from "../images/Treats-Item5-Meditation.png";
import insurance from "../images/Treats-Item7-insurance.png";
import therapy from "../images/Treats-Item8-Theraphy.png";

function TreatsPage() {
  return (
    <>
      <div>
        <nav
          class="navbar navbar-expand-lg fixed-top "
          className={styles.headerTreatsPage}
        >
          <div class="text-center">
            <h6>You deserve your</h6>
            <h1>Treats</h1>
          </div>
        </nav>
        <div className={styles.container}>
          <div class="row " className={styles.subHeader}>
            <div class="col">
              <h6>You earned</h6>
              <h4>25600 Points</h4>
              <p>so far</p>
            </div>
            <div class="col">
              <h6>You need</h6>
              <h4>4400 Points</h4>
              <p>for your next available treat</p>
            </div>
          </div>
        </div>
        <div className={styles.treatsMenu}>
          <p class="mt-2">Current available treats</p>
          <div class="row " className={styles.menuName}>
            <p>Eat well</p>
          </div>
          <div class="row">
            <div class="col-6">
              <img src={coffeeImage} alt="coffee-treat" />
              <p className={styles.treatDescription}>Free Coffee and Cookies</p>
            </div>
            <div class="col-6">
              <img src={macaroons} alt="macaroon-treat" />
              <Link to="/treatsbarcode">
                <p className={styles.treatDescription}>
                  Free Macaroons 1 set (5 pc)
                </p>
              </Link>
            </div>
          </div>
          <div class="row mt-2 " className={styles.menuName}>
            <p class="mt-2">Keep active</p>
          </div>
          <div class="row mbt-5">
            <div class="col-6">
              <img src={yoga} alt="yoga-treat" />
              <p className={styles.treatDescription}>
                1-hour Studio Yoga class
              </p>
            </div>
            <div class="col-6">
              <img src={meditation} alt="meditation-treat" />
              <p className={styles.treatDescription}>
                25% Off Meditation Class
              </p>
            </div>
          </div>
          <div class="row mt-2 " className={styles.menuName}>
            <p class="mt-2">Manage your Health</p>
          </div>
          <div class="row">
            <div class="col-6">
              <img src={insurance} alt="insurance-treat" />
              <p className={styles.treatDescription}>
                15% Off Mental Health Insurance
              </p>
            </div>
            <div class="col-6">
              <img src={therapy} alt="therapy-treat" />
              <p className={styles.treatDescription}>
                3 times therapy sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TreatsPage;
