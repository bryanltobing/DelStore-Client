import { Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import PublicRoute from './PublicRoute'
import VerifiedRoute from './VerifiedRoute'
import FallbackTemp from 'components/_common/Loading/FallbackTemp'

const fallbackTemp = {
  fallback: <FallbackTemp />,
}

const LoginPages = loadable(() => import('pages/Login/Login'), fallbackTemp)

const Route = props => {
  return (
    <Switch>
      <PublicRoute path="/login" exact component={LoginPages} />
      <VerifiedRoute
        path="/"
        exact
        component={() => <div>Verified route</div>}
      />
    </Switch>
  )
}

export default Route
