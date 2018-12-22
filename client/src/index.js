import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
 
// Miguel added this to test material-ui
 import Bmoney from './components/Bmoney';


// Default Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


// Custom components

import Kmoney from './components/Gallery/index'


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

 

ReactDOM.render(
    
    <Router>
        
        <div>
            <Navbar />
            
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Kmoney />
            
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();



// import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// ReactDOM.render(<App />, document.querySelector("#app"));
