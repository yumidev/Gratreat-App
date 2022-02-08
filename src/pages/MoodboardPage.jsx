import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styles from "./MoodboardPage.styles.css";
import headerStyle from "./Prompts.module.css";
import Header from "./Header";
import FormatDate from "./FormatDate";
import DayDate from "./DayDate";
import MoodList from "../db/MoodList";

const Section = styled.section`
  // .header {
  //   text-align: justify;
  //   text-indent: 2rem;
  // }

  .mood-emoji {
    font-size: 70px !important;
  }
`;

function MoodboardPage() {
  const [showSection, setShowSection] = useState(false);
  const [moodList, setMoodList] = useState(MoodList);
  const [trackMood, setTrackMood] = useState([]);

  const history = useHistory();

  const handleMoodSelection = (e, item) => {
    e.preventDefault();
    const optionSelected = item;
    if (trackMood.length < 1) {
      setTrackMood([...trackMood, optionSelected]);
      const target = e.target;
      target.style.color = "black";
    }
  };

  const clickContinue = () => {
    history.push("/prompts");
  };

  return (
    <Section>
      <div>
        <div className={headerStyle.header}>
          <Header text="What is your" title="Today's mood" />{" "}
        </div>
        <div class="container mt-5 emoji-menu ">
          <div>
            <div class="row">
              <div className={"mood-emoji"}>
                <button
                  className="emojiBtn"
                  onClick={(e) =>
                    handleMoodSelection(e, "far fa-grin grin-emoji")
                  }
                >
                  <i class={"far fa-grin grin-emoji"}></i>
                </button>
              </div>
            </div>

            <div class="row text-center">
              <div class="col-4 date-format">
                <div className={"mood-emoji"}>
                  <button
                    className="emojiBtn"
                    onClick={(e) =>
                      handleMoodSelection(e, "far fa-frown sad-emoji ")
                    }
                  >
                    <i class={"far fa-frown sad-emoji "}></i>
                  </button>
                </div>
              </div>
              <div class="col-4 date-format">
                <span class="date-format" id="current-date">
                  <br />
                  <DayDate />
                  <FormatDate />, 2021
                </span>
              </div>
              <div class="col-4">
                <div className={"mood-emoji"}>
                  <button
                    className="emojiBtn"
                    onClick={(e) =>
                      handleMoodSelection(e, "far fa-smile happy-emoji")
                    }
                  >
                    <i class={"far fa-smile happy-emoji"}></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="row text-center">
              <div class="col-4 date-format">
                <div className={"mood-emoji"}>
                  <button
                    className="emojiBtn"
                    onClick={(e) =>
                      handleMoodSelection(e, "far fa-angry frown-emoji ")
                    }
                  >
                    <i class={"far fa-angry frown-emoji "}></i>
                  </button>
                </div>
              </div>

              <div class="col-4">
                <div className={"mood-emoji"}>
                  <button
                    className="emojiBtn"
                    onClick={(e) =>
                      handleMoodSelection(e, "far fa-meh meh-emoji")
                    }
                  >
                    <i class={"far fa-meh meh-emoji"}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto">
          <button class="text-uppercase moodPageBtn" onClick={clickContinue}>
            Continue
          </button>
        </div>
      </div>
    </Section>
  );
}

export default MoodboardPage;
