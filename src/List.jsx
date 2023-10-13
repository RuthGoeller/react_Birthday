import React from 'react'
import Person from './Person'

function List({people}) {
  
  return (
    <div>
        {people.map((person)=>{
            
            return <Person {...person}></Person>
        })}
    </div>
  )
}

export default List