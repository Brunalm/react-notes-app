import React from 'react'
import './index.css'
import { useMatch } from 'react-router-dom'

const NoteContent = ({ updateNote, state }) => {
  const {
    params: { id },
  } = useMatch('notes/:id')

  const item = state.notes[id]

  return (
    <div className="notes-container">
      <div className="note-content-wrapper">
        <input
          className="title"
          placeholder="Title"
          onChange={(e) => updateNote({ field: 'title', id, value: e.target.value })}
          value={item.title}
        />

        <textarea
          autoFocus
          className="text-area"
          placeholder="Press any key"
          rows="30"
          onChange={(e) => updateNote({ field: 'text', id, value: e.target.value })}
          value={item.text}
        />
      </div>
    </div>
  )
}

export default NoteContent
