import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import PromptsList from "../db/PromptsList";
import styles from "./Prompts.module.css";
import GratitudeList from "./GratitudeList";
import Header from "./Header";
import Footer from "./Footer.jsx";
import FormatDate from "./FormatDate";
import DayDate from "./DayDate";

import { MoodboardPage } from ".";

function Prompts({
  promptsClick,
  setpromptsClick
}) {
  const [showSection, setShowSection] = useState(false);
  const [viewList, setViewList] = useState("none");
  const [hidePrompts, setHidePrompts] = useState("none");
  const [promptData, setpromptData] = useState(PromptsList);
  const [trackMood, setTrackMood] = useState([]);
  const [moodList, setMoodList] = useState(MoodboardPage);
  const [hideBoard, sethideBoard] = useState("");

  const handleClick = (e, item) => {
    const filteredTopic = item;
    setpromptsClick([...promptsClick, filteredTopic]);
    const target = e.target;
    target.style.backgroundColor = "var(--link-active-color)";
    target.style.color = "white";
  };

  const handleApply = (e) => {
    setShowSection(!showSection);
    setViewList("");
    setHidePrompts("none");
  };


  return (
    <div>
      <div style={{ display: hideBoard }}></div>
      <section style={{ display: hidePrompts }}>
        <div className={styles.header}>
          <Header text="Choose 3" title="Today's prompts" />
        </div>
        <div className={styles.promptMenu}>
          <div className={styles.grid}>
            {promptData.map((data) => {
              return (
                <div key={data.id}>
                  <button
                    className={styles.promptMenu}
                    key={data.id}
                    onClick={(e) => handleClick(e, data)}
                  >
                    {data.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.promptPageBtn} onClick={handleApply}>
          USE SELECTED PROMPTS
        </button>
        <button className={styles.promptPageBtn}>NO PROMPTS </button>
      </section>
      <div style={{ display: viewList }}>
        <GratitudeList
          promptsClick={promptsClick}
          setpromptsClick={setpromptsClick}
          trackMood={trackMood}
          setTrackMood={setTrackMood}
        />
      </div>
      <div className={"footer"}>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Prompts;
