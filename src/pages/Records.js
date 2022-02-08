import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import styles from "./Records.module.css";
import { useParams, useHistory } from "react-router-dom";
import FormatDate from "./FormatDate";
import Header from "./Header";
import { getSingleRecord, deleteOneRecord } from '../utils/localStorage'

import "bootstrap/dist/css/bootstrap.css";

const Item = styled.div`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
`

function Records() {
  const [logs, setLogs] = useState([]);
  const [mood, setMood] = useState('');

  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      const logs = getSingleRecord(id);
      setLogs(logs.logs);
      setMood(logs.mood);
      console.log('logs', logs);
    } else {
      history.push('/');
    }
  }, [])

  const deleteOneRow = (date, i) => {
    deleteOneRecord(date, i);
  };

  const emojiList = {
    'smile': 'far fa-grin grin-emoji',
    'sad': 'far fa-frown sad-emoji',
    'happy': 'far fa-smile happy-emoji',
    'meh': 'far fa-meh meh-emoji',
    'frown': 'far fa-angry frown-emoji',
  }

  return (
    <div>{
      logs && logs.length >= 1 ? (
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
                  <i class={emojiList[mood]}></i>
                </div>
              </div>
            </header>
            <div className={styles.recordForm}>
              {logs.map((log, i) => (
                <Item key={i}>
                  <p className={styles.userSavedEntry}>{log.text}</p>
                  <button
                    className={styles.recordsBtn}
                    onClick={() => {
                      deleteOneRow(id, i);
                    }}
                  >
                    {" "}
                    DELETE
                  </button>
                </Item>)
              )}
            </div>
          </div>
        </section>
      </div>
      ) : ''
    }</div>
  );
}

export default Records;

