import React from 'react'

const useReducer = (reducer, initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const customDispatch = (action) => {
    if (typeof action === 'function') {
      action(customDispatch)
    } else {
      dispatch(action)
    }
  }

  return [state, customDispatch]
}

export default useReducer
