import React from 'react'

/**
 * Dummy HeaderCell component, which render just header title
 * @param column
 */
const HeaderCell = ({ column }) => (
  <th>
    {column.title}
  </th>
)

export default HeaderCell
