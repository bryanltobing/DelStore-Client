import React from 'react'
import moment from 'moment'
import { isLogin } from 'helpers/isLogin'
import history from 'helpers/history'

const FacilityItemBody = ({ facilityInfo }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt="fac"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {'Ruangan ' + facilityInfo?.name}
              </div>
              <div className="text-sm text-gray-500"></div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            {moment(facilityInfo?.createdAt).format('LLLL')}
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Available
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {facilityInfo.facilityType}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 p-2 rounded font-medium"
            onClick={() =>
              isLogin() ? history.push('/order') : history.push('/login')
            }
          >
            Pesan
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default FacilityItemBody
