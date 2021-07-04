import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';
import {MainPage} from './components/pages/HomePage';
import {AddNewAnnouncement} from './components/pages/AddNewAnnouncement';
import {EditAnnounce} from './components/pages/EditAnnounce';
import {AllAnnouncement} from './components/pages/AllAnnouncement';
import {ResOfSearch} from './components/pages/ResaultOfSearch';
import styled from 'styled-components';

const Wrapper = styled.div`
    
    display: grid;
    grid-template-areas:
  'h h'
  'n c';
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
            <Route path='/' exact component={() => <MainPage/>} />
            <Route path='/newAnnouncement' component={() => <AddNewAnnouncement/>} />
            <Route path='/editAnnouncement/:id' component={() => <EditAnnounce/>} />
            <Route path='/allAnnounce' component={() => <AllAnnouncement/>} />
            <Route path='/resOfSearch' component={() => <ResOfSearch/>} />
          </BrowserRouter>
        </GlobalProvider>
      </Wrapper>

  );
}

export default App;
