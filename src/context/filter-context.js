import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const useFilters = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );
  return (
    <FilterContext.Provider value={{filterState, filterDispatch}}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilters, FilterContextProvider };
