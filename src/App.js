import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';
import {MainPage} from './components/pages/HomePage';
import {AddNewAnnouncement} from './components/pages/AddNewAnnouncement';
import {EditAnnounce} from './components/pages/EditAnnounce';
import {ResOfSearch} from './components/pages/ResaultOfSearch';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import React from 'react';
import {Header} from './components/organism/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <GlobalProvider>
                <BrowserRouter>
                    <Header/>
                    <Wrapper>
                        <Switch>
                            <Route path='/' exact component={() => <MainPage/>}/>
                            <Route path='/newAnnouncement' component={() => <AddNewAnnouncement/>}/>
                            <Route path='/editAnnouncement/:id' component={() => <EditAnnounce/>}/>
                            <Route path='/resOfSearch' component={() => <ResOfSearch/>}/>
                        </Switch>
                    </Wrapper>
                </BrowserRouter>
            </GlobalProvider>
        </ThemeProvider>
    );
}

export default App;
