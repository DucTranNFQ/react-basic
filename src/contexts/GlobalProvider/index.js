import React, { useContext, useEffect, useState } from 'react'

const GlobalDataContext = React.createContext()

function GlobalDataProvider({children}) {
  const [value, setValue] = useState({})

  const setField = (field, val) => {
    const _value = {...value}
    _value[field] = val
    setValue(_value)
  }

  const providerValues = {
    ...value,
    setField
  }

  return (
    <GlobalDataContext.Provider value={providerValues}>
      {children}
    </GlobalDataContext.Provider>
  )
}

export { GlobalDataProvider, GlobalDataContext }