import TopNavigation from 'components/Navigation/TopNavigation/TopNavigation'
import React from 'react'
import { Route } from 'react-router-dom'

class OpenRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props => {
          return (
            <>
              <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                      className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                      <TopNavigation />
                    </div>
                  </div>
                </div>
              </div>
              <Component {...props} />
            </>
          )
        }}
      />
    )
  }
}

export default OpenRoute
