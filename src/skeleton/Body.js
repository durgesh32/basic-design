import React from 'react'
import Person from '../Person/Person'
import './Body.css'




const Body = (props) => {

  let notes = (
    <div>
    <Person name='durgesh' age='30' />
      <Person name='Sumit' age='31' />
      <Person name='Girish' age='31' />

    </div>
  )

  return (
      <div className='Body'>
      {notes}
 </div>
  )
}

export default Body 