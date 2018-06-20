import React from 'react'
import './Dropdown.css'

const Dropdown = (props) => {
  return (
    <select name="sortByAttribute" onChange={props.onChange}>
      <option value="commits">Commits</option>
      <option value="additions">Additions</option>
      <option value="deletions">Deletions</option>
    </select>
  )
}

export default Dropdown
