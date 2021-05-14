import {
  Switch,
  Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { useEffect } from 'react'
import { history } from 'store'

import Home from 'pages/Home'
import Shop from 'pages/Shop'

export default () => {
  useEffect(() => {
    history.listen(() => { window.scrollTo(0, 0) })
  }, [])

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={HomePath}>
          <Home />
        </Route>
        <Route exact path={ShopPath}>
          <Shop />
        </Route>
      </Switch>
    </ConnectedRouter>
  )
}

export const HomePath = '/'
export const ShopPath = '/shop'
