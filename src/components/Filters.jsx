import React from "react"

import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../consts/myStrings"

const Filters = (props) => {
  const { onFilterChange } = props
  return (
    <div className="filter-wrapper">
      <label>
        <input type="radio" name="filter" value={SHOW_ALL} onChange={onFilterChange} />
        Show All
      </label>  
      <label>
        <input type="radio" name="filter" value={SHOW_COMPLETED} onChange={onFilterChange} />
        Show Completed
      </label>
      <label>
        <input type="radio" name="filter" value={SHOW_INCOMPLETE} onChange={onFilterChange} />
        Show Incomplete
      </label>
    </div>
  )
}

export default Filters