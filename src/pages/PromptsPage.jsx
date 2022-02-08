import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Prompts.module.css";
import Header from "./Header";
import PromptsList from "../db/PromptsList";

function PromptsPage({
  promptsClicked,
  setPromptsClicked,

}) {
  const [showSection, setShowSection] = useState(false);
  const [viewList, setViewList] = useState("none");
  const [promptData, setpromptData] = useState(PromptsList);
  const [trackMood, setTrackMood] = useState([]);

  const history = useHistory();

  const handleClick = (e, item) => {
    const filteredTopic = item;
    setPromptsClicked([...promptsClicked, filteredTopic]);
    const target = e.target;
    target.style.backgroundColor = "var(--link-active-color)";
    target.style.color = "white";
  };

  const handleApply = (e) => {
    console.log('promptsClicked', promptsClicked)
    history.push('/grati-log');
  };

  return (
    <div>
      <section>
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
    </div>
  );
}

export default PromptsPage;
