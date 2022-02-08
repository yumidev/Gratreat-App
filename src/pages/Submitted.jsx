import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

import GratitudeList from "./GratitudeList";
import Header from "./Header";
import PromptsList from "../db/PromptsList";
import styles from "./Records.module.css";
import yay from "../images/yay.png";

const Section = styled.section``;
function Submitted({ logList }) {
  const history = useHistory();

  const handleRecords = (e) => {
    history.push("/mood-tracker");
  };

  const handleTreats = (e) => {
    history.push("/treats");
  };

  const pointsEarned = parseInt(logList.length * 100);

  return (
    <Section>
      <section>
        <div className={styles.overLay}>
          <div className={styles.pointsContainer}>
            <img
              className={styles.person}
              src={yay}
              alt="You Got this!"
              width="70"
            />

            <div className="">
              <div>You got this!</div>
            </div>
            <div className={styles.pointsEarned}>+ 100 points</div>
            <p>{pointsEarned}</p>
            <div>
              <button className={styles.recordsBtn} onClick={handleRecords}>
                RECORDS
              </button>
              <button className={styles.recordsBtn} onClick={handleTreats}>
                TREATS
              </button>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Submitted;
