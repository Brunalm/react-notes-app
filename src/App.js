import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import './App.css'
import NoteContent from './components/note-content'
import SideBar from './components/sidebar'
import { v4 as uuid } from 'uuid'
import useReducer from './useReducer'

const INITIAL_STATE = JSON.parse(localStorage.getItem('state') || '{}')

const post = (key, body) => localStorage.setItem(key, JSON.stringify(body))

const createNote = (callback) => {
  const id = uuid()

  const note = { id, title: '', text: '' }

  return (dispatch) => {
    dispatch({ type: 'CREATE_NOTE', payload: { note } })
    callback && callback(note)
  }
}

const deleteNote = (id, callback) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_NOTE', payload: { id } })
    callback && callback()
  }
}

const updateNote = ({ id, field, value }, callback) => {
  return (disptach) => {
    disptach({ type: 'UPDATE_NOTE', payload: { id, field, value } })
    callback && callback()
  }
}

const reducer = (state, { payload, type }, id) => {
  switch (type) {
    case 'UPDATE_NOTE': {
      const new_state = {
        ...state,
        notes: {
          ...state.notes,
          [payload.id]: { ...state.notes[payload.id], [payload.field]: payload.value },
        },
      }

      post('state', new_state)

      return new_state
    }
    case 'CREATE_NOTE': {
      const new_state = {
        ...state,
        notes: { ...state.notes, [payload.note.id]: payload.note },
      }

      post('state', new_state)

      return new_state
    }
    case 'DELETE_NOTE': {
      delete state.notes[payload.id]

      const new_state = {
        ...state,
        notes: { ...state.notes },
      }

      post('state', new_state)

      return new_state
    }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const navigate = useNavigate()

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="App">
            <SideBar
              createNote={() => dispatch(createNote((note) => navigate(`/notes/${note.id}`)))}
              deleteNote={(id) => dispatch(deleteNote(id, navigate('/')))}
              items={state.notes}
            />
            {state.notes && (
              <Routes>
                <Route
                  path="/notes/:id"
                  element={
                    <NoteContent
                      updateNote={(payload) => dispatch(updateNote(payload))}
                      state={state}
                    />
                  }
                />
              </Routes>
            )}
          </div>
        }
      ></Route>
    </Routes>
  )
}

export default App
