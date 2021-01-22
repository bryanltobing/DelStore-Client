import itemRequest from 'apis/itemRequest'
import FacilityItem from 'components/Facility/FacilityItem'
import FacilityItemBody from 'components/Facility/FacilityItemBody'
import React, { useEffect, useState } from 'react'

const Facility = () => {
  const [facility, setFacility] = useState([])

  useEffect(() => {
    itemRequest
      .get('/facility')
      .then(response => {
        console.log(response.data)
        setFacility(response.data)
      })
      .catch(err => {
        alert(err.response.data)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-2">
      <FacilityItem>
        {facility.map(fac => (
          <FacilityItemBody facilityInfo={fac} key={fac._id} />
        ))}
      </FacilityItem>
    </div>
  )
}

export default Facility
