import clsx from "clsx";
import React from "react";
import { Actions } from "../Store";

function FilterMode({ currentFilter, filterName, dispatch }) {
  const handleChangeFilter = () => {
    if (filterName !== currentFilter) {
      dispatch(Actions.changeFilter(filterName));
    }
    return null;
  };
  return (
    <li>
      <a
        className={clsx({ selected: currentFilter === filterName })}
        href="#/"
        onClick={handleChangeFilter}
      >
        {filterName.slice(0, 1).toUpperCase() + filterName.slice(1)}
      </a>
    </li>
  );
}

export default FilterMode;
