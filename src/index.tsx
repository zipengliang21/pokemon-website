import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import './index.scss';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressCard, faSearch, faComment, faAngleUp, faFilter, faUser,
         faPlus, faSimCard, faEdit} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faAddressCard, faSearch, faComment, faAngleUp, faFilter, faUser, faPlus, faSimCard, faEdit)

ReactDOM.render(
    <Router>
       <App />
    </Router>,
  document.getElementById('root')
);