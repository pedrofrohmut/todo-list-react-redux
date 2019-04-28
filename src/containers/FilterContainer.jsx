import React from "react"
import Filters from "../components/Filters"
import { CHANGE_FILTER } from "../consts/actionTypes"

const FilterContainer = props => {
  const { store } = props

  const handleFilterChange = e => {      
    const newFilter = e.target.value
    const changeFilterAction = {
      type: CHANGE_FILTER,
      todosFilter: newFilter
    }
    store.dispatch(changeFilterAction)
  }

  return (
    <Filters onFilterChange={handleFilterChange} />
  )
}

export default FilterContainer