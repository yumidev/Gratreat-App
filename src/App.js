import React, { useEffect } from 'react';
import {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { MoodboardPage, GratiRecordsPage, MoodTrackerPage} from './pages';
import AuthRoute from './AuthRoute';
import GratiLogPage from './pages/GratiLogPage';
import Home from './pages/Home';
import Footer from './pages/Footer';

import './App.css';
import PromptsPage from './pages/PromptsPage';
import Records from './pages/Records';
import Submitted from './pages/Submitted';

import GratitudeList from './pages/GratitudeList';
import PromptsList from './db/PromptsList';
import InitialLocalStorageData from './db/localStorageData';

import TreatsBarCodePage from './pages/TreatsBarCodePage';
import Treats from './pages/TreatsPage';
import TreatsPage from './pages/TreatsPage';
import { setLSdata, getLSdata } from './utils/localStorage'

const Main = styled.main`
  padding: 1rem;

  .footer {
    height: 40px;
  }

  .footer a {
    margin: 0 20px 0 20px;
    text-align: center;
    color: var(--text-color);
    text-decoration: none;
    border-top: var(--link-active-color);
  }
`
const App = () => {
  const [promptData, setpromptData] = useState(PromptsList);
  const [promptsClicked, setPromptsClicked] = useState([]);
  const [logList, setLogList] = useState({});
  const [entryNumber, setentryNumber] = useState(0);
  const [userData, setUserData] = useState();
  const [trackMood, setTrackMood] = useState();

  // window.localStorage.removeItem('');

  useEffect(() => {
    if (window.localStorage.getItem('gratreat')) {
      const data = getLSdata();
      setUserData(data.userInfo);
      setLogList(data.gratiLogs);
      // console.log('data exists: ', data);
    } else {
      setLSdata(InitialLocalStorageData);

      const data = getLSdata();
      setUserData(data.userInfo);
      setLogList(data.gratiLogs);
      // console.log('injected default: ', data);
    }
  }, [])

  const data = { verifyToken: true }
  const loading = false;

  return (
    <>
      {
        loading ? <>Loading...</> : (<>
          <Main className="App">
            <Switch>
              <Route exact path="/login" render={props => <div>Please login</div>} />
              <AuthRoute exact user={userData || data?.verifyToken} path="/prompts" render={props => <PromptsPage {...props} promptData={promptData} promptsClicked={promptsClicked} setPromptsClicked={setPromptsClicked} entryNumber={entryNumber} setentryNumber={setentryNumber}/>} />
              <AuthRoute exact user={userData || data?.verifyToken} path="/mood" render={props => <MoodboardPage {...props} setTrackMood={setTrackMood} trackMood={trackMood} />} />
              <AuthRoute exact user={userData || data?.verifyToken} path="/grati-log" render={props => <GratiLogPage {...props} promptsClicked={promptsClicked} setPromptsClicked={setPromptsClicked} setLogList={setLogList} logList={logList} trackMood={trackMood} setTrackMood={setTrackMood} />} />
              {/* <AuthRoute user={userData || data?.verifyToken} path="/grati-log/:id" render={props => <GratiRecordsPage {...props} />} /> */}
              <AuthRoute user={userData || data?.verifyToken} path="/grati-log/:id" render={props => <Records {...props} setLogList={setLogList} promptData={promptData} setpromptData={setpromptData} logList={logList} />} />
              <AuthRoute user={userData || data?.verifyToken} path="/mood-tracker" render={props => <MoodTrackerPage {...props} logList={logList} />} />
              <AuthRoute user={userData || data?.verifyToken} path="/records" render={props => <Records {...props} setLogList={setLogList} promptData={promptData} setpromptData={setpromptData} logList={logList} />} />
              {/* <AuthRoute user={userData || data?.verifyToken} path="/gratitudelist" render={props => <GratitudeList {...props} promptData={promptData} setpromptData={setpromptData} />} /> */}
              <AuthRoute user={userData || data?.verifyToken} path="/treats" render={props => <TreatsPage {...props} />} />
              <AuthRoute user={userData || data?.verifyToken} path="/treatsbarcode" render={props => <TreatsBarCodePage {...props} />} />
              <AuthRoute user={userData || data?.verifyToken} path="/submission-done" render={props => <Submitted {...props} entryNumber={entryNumber} logList={logList} />} />
              <AuthRoute exact user={userData || data?.verifyToken} path="/" render={props => <Home />} />
              {/* <Route component={PageNotFound} /> */}
            </Switch>
            <div className={"footer"}>
              <Footer />
            </div>
          </Main>
        </>) 
       } 
    </>
  );
}

export default App;

