// App.tsx
import React from 'react'
// import MyFirstComponent from './components/myFirstComponent';
// import SomeExampleComponent from './components/Example/someExampleComponent';
import styles from './App.module.scss';
import Main from './components/pages/main/main'
import Cv from './components/pages/cv/cv'
import Projects from './components/pages/projects/projects'
import Navbar from './components/navbar/navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from 'react-router-dom';
// import ClickCount from './components/clickCount';

const App: React.FC = () => {
  return (

    <div className={styles.container}>
      
      <Router basename='portfolio'>
        
        <Navbar/>
      {/* The navigation bar and other components you want to display on all pages come here */}

      <Switch>
        {/* Changing content comes here */}
        <Route exact path='/' component={Main} />
        <Route exact path='/cv' component={Cv}/>
        <Route exact path='/projects' component={Projects}/>
      </Switch>

      {/* The footer and other components you want to display on all pages come here */}
      {/* <ClickCount /> */}

    </Router>

      {/* <DarkMode/>  */}
    </div>

  )
}

export default App
