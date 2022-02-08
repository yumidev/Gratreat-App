import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./TreatsPage.module.css";

import TreatsBarCodePage from "./TreatsBarCodePage";
import { Switch, Route, Link } from "react-router-dom";
import GratitudeList from "./GratitudeList";
import Header from "./Header";
import PromptsList from "../db/PromptsList";
import TreatsList from "./TreatsList";
import { useState } from "react";

function TreatsPage({ logList }) {
  const [treatItem, setTreatItem] = useState([]);
  const [showSection, setShowSection] = useState(false);
  const [viewList, setViewList] = useState("none");
  const [hideBoard, sethideBoard] = useState("");

  const history = useHistory();

  let pointsEarned = parseInt(logList.length * 100);

  const handleClick = (e, product) => {
    const getTreat = product;
    setTreatItem([...treatItem, getTreat]);
    setShowSection(!showSection);
    setViewList("");
    sethideBoard("none");
    history.push("/treats");
  };

  return (
    <>
      <div style={{ display: hideBoard }}>
        <nav
          class="navbar navbar-expand-lg fixed-top "
          className={styles.headerTreatsPage}
        >
          <div class="text-center">
            <h6>You deserve your</h6>
            <h1>Treats</h1>
          </div>
        </nav>
        <div className={styles.subheader}>
          <div class=" row" className={styles.subHeader}>
            <div class="col">
              <h6>You earned</h6>
              <h4>{pointsEarned}</h4>
              <p>so far</p>
            </div>
            <div class="col ">
              <h6>You need</h6>
              <h4>4400 Points</h4>
              <p>for your next available treat</p>
            </div>
          </div>
        </div>
        <div className={styles.treatsMenu}>
          <div class="row" className={styles.menuName}>
            <p class="p-3"></p>
          </div>
          <div class="row">
            {TreatsList.map((item) => {
              return (
                <div class="col-6" key={item.id}>
                  <img src={item.img} />
                  <p className={styles.treatDescription}>{item.description}</p>

                  <button
                    className={styles.linkBtn}
                    key={item.id}
                    onClick={(e) => handleClick(e, item)}
                  >
                    Link
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ display: viewList }}>
        <TreatsBarCodePage treatItem={treatItem} pointsEarned={pointsEarned} />
      </div>
    </>
  );
}

export default TreatsPage;
