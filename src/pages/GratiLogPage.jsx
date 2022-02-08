import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import styles from "./Prompts.module.css";
import GratitudeList from "./GratitudeList";
import Header from "./Header";
import PromptsList from "../db/PromptsList";

const Section = styled.section``;
function GratiLogPage({
  promptsClicked,
  setPromptsClicked,
  entryNumber,
  setLogList,
  logList,
  setentryNumber,
  trackMood,
  setTrackMood
}) {

  const history = useHistory();

  const handleApply = (e) => {
    history.push("/prompts");
  };

  return (
    <Section>
      <GratitudeList
        logList={logList}
        setLogList={setLogList}
        promptsClicked={promptsClicked}
        setPromptsClicked={setPromptsClicked}
        entryNumber={entryNumber}
        setentryNumber={setentryNumber}
        trackMood={trackMood}
        setTrackMood={setTrackMood}
      />
    </Section>
  );
}

export default GratiLogPage;
