import './App.css';
import { Container, Grid } from '@mui/material'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Vlogs from './pages/Vlogs/Vlogs';


function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} >

          <Router>
            <Header />
            <div className='main_content'>
              <Routes>
                <Route index path='/myprofile' element={<Resume />} />
                <Route path='/vlogs' element={<Vlogs />} />
                <Route path='/portfolio' element={<Portfolio />} />
              </Routes>
            </div>

          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
