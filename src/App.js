// import './App.css';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Top10 from "./components/Top10";
import Description from "./components/Description";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/top10">
            <Top10 />
          </Route>
          <Route path="/description">
            <Description />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
