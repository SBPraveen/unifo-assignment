import React,{useState} from 'react';
import './App.css';
import Body1  from "./components/Body1";
import Body2  from "./components/Body2";
import Header  from "./components/Header";
import Footer  from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [jobArray, setjobArray] = useState([]) ;
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact render={() => <Body1 jobArray={jobArray} setjobArray={setjobArray} />}/>  
          <Route path="/jobs"  render={() => <Body2 jobArray={jobArray} />}/>  
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
