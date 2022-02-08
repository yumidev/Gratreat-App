import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import moment from 'moment';
import Prompts from "./Prompts";
import Records from "./Records";
import { Switch, Route } from "react-router-dom";
import styles from "./GratitudeList.module.css";
import FormatDate from "./FormatDate";
import { addRecord, getLSdata } from '../utils/localStorage'


function GratitudeList({
  promptsClicked,
  setPromptsClicked,
  trackMood,
  setTrackMood,
  logList,
  setLogList,
}) {
  const [check, setCheck] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [colorBtn, setColorBtn] = useState("");
  const [formInput, setFormInput] = useState(promptsClicked.map((p) => p.name));

  const history = useHistory();



  const handleClick = () => {

    setIsDisabled(true);
    // item.value = "";
    setColorBtn("gray");

    setCheck(!check);

    const input = {
      mood: trackMood,
      logs: promptsClicked.map((p,i) => { return { subject: p.name, text: formInput[i] }})
    }
    addRecord(moment(new Date()).format('YYYY-MM-DD'), input);

    const data = getLSdata();
    setLogList(data.gratiLogs);

    history.push("/submission-done");
  };

  const handleInputChange = (event, index) => {
    const newFormInput = formInput;
    newFormInput[index] = event.target.value;
    setFormInput(newFormInput);
    setLogList(newFormInput);
  };

  const handleSubmit = (e, item) => {
    e.preventDefault();

    if (!item.value || /^\s*$/.test(item.value)) {
      return;
    }
    const newArray = item.value;
    setLogList(logList);
    setIsDisabled(true);
    item.value = "";
    setColorBtn("gray");
  };

  const renderInput = (prompt, i) => {
    return (
      <div key={prompt.id}>
        <fieldset className={styles.userEntryContainer}>
          <div className={styles.userEntry}>
            <p className={styles.inputNumber} key={prompt.id}>
              {i + 1}
            </p>
            <p> thankful for </p>
            <textarea
              type={prompt.type}
              name={prompt.name}
              placeholder={prompt.name}
              onChange={(e) => handleInputChange(e, i)}
              className="text-left"
              disabled={isDisabled}
            />
          </div>
        </fieldset>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.titleHeading}>
        <p className={styles.writeTextHeading}>
          <h6 className={styles.topTitle}>Write your own</h6>
        </p>
        <h2 className={styles.title}>Gratitude Log</h2>
        <FormatDate />, 2020
      </div>
      <p className={styles.pagesubheading}>I am </p>
      <div className={styles.gratitudeContainer}>
        <div className={styles.listContainer}>
          {promptsClicked.map(renderInput)}
        </div>
      </div>
      <button
        type="submit"
        className={styles.gratitudePageBtn}
        onClick={handleClick}
      >
        Submit Log
      </button>
    </div>
  );
}

export default GratitudeList;
