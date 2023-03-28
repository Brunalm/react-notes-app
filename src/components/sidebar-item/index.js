import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from 'evergreen-ui'
import './index.css'
import ItemOptions from '../item-options'

function SideBarItem({ deleteNote, item }) {
  const navigate = useNavigate()

  return (
    <div>
      {item.title && (
        <li key={item.id}>
          <div className="container">
            <div className="sidebar-items" onClick={() => navigate(`/notes/${item.id}`)}>
              <span className="icon">
                <ChevronRightIcon />
              </span>
              {item.title}
            </div>
            <div className="options">
              <ItemOptions onDelete={deleteNote} item={item} />
            </div>
          </div>
        </li>
      )}
    </div>
  )
}

export default SideBarItem
