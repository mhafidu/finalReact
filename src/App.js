import react from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profil from './pages/Profil'
import News from './pages/News'
import Hasil from './pages/Hasil'
import Umum from './pages/Umum';
import Apply from './pages/Apply'
import Home from './pages/Home';
import Page from './pages/Page';
import Cv from './pages/Cv'
import Sidebar from './components/Sidebar'
import Perusahaan from './pages/Perusahaan';


function App() {
  return (
    
    <Router>
      <Switch>
      <Route path="/perusahaan" >
          <Perusahaan />
        </Route>
      <Route path="/sidebar" >
          <Sidebar />
        </Route>
      <Route path="/home" >
          <Home />
        </Route>
      <Route path="/umum" >
          <Umum />
        </Route>
      <Route path="/news" >
          <News/>
        </Route>
      <Route path="/apply" >
          <Apply />
        </Route>
      <Route path="/hasil" >
          <Hasil />
        </Route>
      <Route path="/profil" >
          <Profil />
        </Route>
        <Route path="/cv" >
          <Cv />
        </Route>
        <Route path="/" >
          <Page />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
