import React from "react";
import styles from "./TreatsPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import TreatsBarCodePage from "./TreatsBarCodePage";
import { Switch, Route, Link } from "react-router-dom";
import TreatsList from "./TreatsList";

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
            {TreatsList.map((item) => {
              return (
                <div class="col-6" key={item.id}>
                  <img src={item.img} />
                  <p className={styles.treatDescription}>{item.description}</p>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default TreatsPage;
