import React, { useState, useEffect, useRef } from "react";
import styles from "./Records.module.css";
import { Switch, Route, Link } from "react-router-dom";
import FormatDate from "./FormatDate";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.css";

function Records({
  logList,
  entryNumber,
  setLogList,
  trackMood,
  setTrackMood,
}) {
  const [userRecord, setUserRecord] = useState("none");
  const [hidePoints, setHidePoints] = useState("");
  const [hideTreats, setHideTreats] = useState("none")

  useEffect(() => {
    console.log('logList', logList);
  }, []);

  const handleRecords = () => {
    setHidePoints("none");
    setUserRecord("");
  };

  const convertArray = Object.assign({}, [logList]);

  let inputRef = useRef();

  const deleteMessage = (i) => {
    const modifyArray = [...logList];
    let filteredEntry = modifyArray.filter((_, index) => i !== index);
    setLogList(filteredEntry);
  };

  const handleTreats = () =>{
    setHideTreats("");
    setHidePoints("none");
    setUserRecord("none");
  }

  return (
    <div className={styles.recordSection}>
      <section>
        <div className={styles.header}>
          <Header text="Your gratitude Log" title="Records" />
        </div>
        <div>
          <header>
            <div className={styles.titleRecords}>
              <FormatDate />
              <div>
                <i class={trackMood}></i>
              </div>
            </div>
          </header>
          <div className={styles.recordForm}>
            {logList.length >= 1
              ? logList.map((res, i) => (
                  <div key={i}>
                    <p className={styles.userSavedEntry}>{res}</p>
                    {res.isOpen ? (
                      <div>
                        <form>
                          <input
                            ref={inputRef}
                            type="text"
                            name="textarea"
                            placeholder="Update message"
                          />
                        </form>
                      </div>
                    ) : null}
                    <button
                      className={styles.recordsBtn}
                      onClick={() => {
                        deleteMessage(i);
                      }}
                    >
                      {" "}
                      DELETE
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Records;

