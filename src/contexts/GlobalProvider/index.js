import React, { useContext, useEffect, useState } from 'react'
import api from '../../api/user'

const GlobalDataContext = React.createContext()

function GlobalDataProvider(props) {
  const [value, setValue] = useState({})

  useEffect(() => {
    fetchUserData()
    // eslint-disable-next-line
  }, []);

  async function fetchUserData() {
    const userData = await api.register()
    setValue(userData)
  }

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
      {props.children}
    </GlobalDataContext.Provider>
  )
}

function useGlobalData() {
  return useContext(GlobalDataContext)
}

export default GlobalDataContext
export { GlobalDataProvider, useGlobalData }