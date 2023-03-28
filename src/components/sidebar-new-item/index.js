import React from 'react'
import './index.css'
import { PlusIcon } from 'evergreen-ui'

function SidebarNewItem({ createNote }) {
  return (
    <div>
      <li>
        <div className="new-item" onClick={() => createNote()}>
          <span className="icon">
            <PlusIcon />
          </span>
          Adicionar página
        </div>
      </li>
    </div>
  )
}

export default SidebarNewItem
