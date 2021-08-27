import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamCard from './components/TeamCard'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teamcard" component={TeamCard} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
