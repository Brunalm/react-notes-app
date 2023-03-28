import React from 'react'
import './index.css'
import profile from '../../img/profile-icon.jpg'
import SideBarItem from '../sidebar-item'
import SidebarNewItem from '../sidebar-new-item'

function Sidebar({ createNote, deleteNote, items = {} }) {
  const values = Object.values(items)

  return (
    <div className="sidebar">
      <div className="sidebar-fixed">
        <div className="header">
          <div className="profile">
            <img src={profile} alt="profile_icon" />
            <p>Bruna Luiza</p>
          </div>
        </div>
        <ul>
          {values.map((item) => (
            <SideBarItem item={item} deleteNote={deleteNote} />
          ))}
          <SidebarNewItem createNote={createNote} />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
