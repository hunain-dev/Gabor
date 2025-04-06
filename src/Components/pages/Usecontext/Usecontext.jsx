/* eslint-disable react/prop-types */
import { createContext } from "react"

export const datacontext = createContext();
const Usecontext = ({ children }) => {
    const data = 'hunain khan';
  return (
    <div>
           <datacontext.Provider value={data}>
      {children}
    </datacontext.Provider>
      
    </div>
  )
}

export default Usecontext
