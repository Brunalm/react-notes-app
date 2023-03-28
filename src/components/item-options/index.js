import React from 'react'
import { Popover, Menu, MoreIcon, Position, TrashIcon } from 'evergreen-ui'

function ItemOptions({ onDelete, item }) {
  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item icon={TrashIcon} onClick={() => onDelete(item.id)}>
              Delete
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <MoreIcon />
    </Popover>
  )
}

export default ItemOptions
