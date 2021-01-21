import { Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import PublicRoute from './PublicRoute'
import VerifiedRoute from './VerifiedRoute'
import FallbackTemp from 'components/_common/Loading/FallbackTemp'
import { logout } from 'fetcher/auth'

const fallbackTemp = {
  fallback: <FallbackTemp />,
}

const LoginPages = loadable(() => import('pages/Login/Login'), fallbackTemp)
const RegisterPages = loadable(
  () => import('pages/Register/Register'),
  fallbackTemp
)

const Route = props => {
  return (
    <Switch>
      <PublicRoute path="/login" exact component={LoginPages} />
      <PublicRoute path="/register" exact component={RegisterPages} />

      <VerifiedRoute
        path="/"
        exact
        component={() => (
          <button
            onClick={() => {
              logout()
            }}
          >
            Logout
          </button>
        )}
      />
    </Switch>
  )
}

export default Route
