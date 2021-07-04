import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {GlobalProvider} from "./context/GlobalState";
import {MainPage} from "./components/pages/HomePage";
import {AddNewAnnouncement} from "./components/pages/AddNewAnnouncement";
import {EditAnnounce} from "./components/pages/EditAnnounce";
import {AllAnnouncement} from "./components/pages/AllAnnouncement";
import {ResOfSearch} from "./components/pages/ResaultOfSearch";
import styled from "styled-components";

const Wrapper = styled.div`
    
    display: grid;
    grid-template-areas:
  "h h"
  "n c";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
    width: 1200px;
    margin: 0 auto;

  `



function App() {
  return (
      <Wrapper>
        <GlobalProvider>
          <BrowserRouter>

            <Route path='/' exact
                   component={() => <MainPage
                       /*profileData={props.state.profileData}
                       dispatch={props.dispatch}*/
                   />}
            />
            <Route path='/newAnnouncement' component={() => <AddNewAnnouncement
                /*dialogsData={props.state.dialogsData}
                dispatch={props.dispatch}*/
            />}
            />
            <Route path='/editAnnouncement/:id' component={() => <EditAnnounce
                /*dialogsData={props.state.dialogsData}
                dispatch={props.dispatch}*/
            />}
            />
            <Route path='/allAnnounce' component={() => <AllAnnouncement
                /*dialogsData={props.state.dialogsData}
                dispatch={props.dispatch}*/
            />}
            />
            <Route path='/resOfSearch' component={() => <ResOfSearch
                /*dialogsData={props.state.dialogsData}
                dispatch={props.dispatch}*/
            />}
            />
          </BrowserRouter>
        </GlobalProvider>
      </Wrapper>
      /*<MainPage/>
      <AddNewAnnouncement/>*/
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
