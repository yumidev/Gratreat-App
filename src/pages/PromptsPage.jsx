import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Prompts.module.css";
import Header from "./Header";
import PromptsList from "../db/PromptsList";

function PromptsPage({ promptsClicked, setPromptsClicked }) {
  const [showSection, setShowSection] = useState(false);
  const [viewList, setViewList] = useState("none");
  const [promptData, setpromptData] = useState(PromptsList);
  const [trackMood, setTrackMood] = useState([]);
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(0);
  const [state, setState] = useState([]);

  const history = useHistory();

  const handleClick = (e, item) => {
    const target = e.target;
    const filteredTopic = item;

    // Makes a shallow copy of the items
    let buttons = [...PromptsList];
    // Makes a shallow copy of the default status whichs need be to mutate
    let button = { ...PromptsList[5] };

    if (count < 3 && item.default != true) {
      setCount(count + 1);
      // Mutation
      item.default = true;
      // Puts it back into the array
      buttons[5] = prompt;
      // Set the state to our new copy
      setState({ buttons });
      // Applies selection styling
      target.style.backgroundColor = "var(--link-active-color)";
      target.style.color = "white";
      // Creates the array with the selected items
      setSelected([...selected, filteredTopic]);
    } else {
      // Applies "impossible to select" styling
      target.style.color = "#757575";
      target.style.backgroundColor = "#FCFCFC";
      // Unselects previously selected item
      if (item.default == true) {
        // Mutation
        item.default = false;

        // Applies unselected styling
        target.style.color = "#757575";
        target.style.backgroundColor = "#FCFCFC";
        setCount(count - 1);
      }
    }
  };

  const handleApply = (e, array) => {
    //Filters the items with true default state and saves them in a new array
    var newArray = selected.filter((item) => item.default == true);

    //Filters the repeated items and updates the array "promptsClickec"
    setPromptsClicked(
      newArray.filter(function (elem, pos) {
        return newArray.indexOf(elem) == pos;
      })
    );
    history.push("/grati-log");
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
                    id="promptBtn"
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
      </section>
    </div>
  );
}

export default PromptsPage;
