import React from 'react'
import PropTypes from 'prop-types'

/**
 * Empty placeholder renders default empty text or custom component if table data is empty
 * @param onEmptyData
 * @param length
 */
const EmptyPlaceholder = ({ onEmptyData, length }) => (
  <tbody>
    <tr>
      <td colSpan={length}>
        {
          onEmptyData ? onEmptyData() : <div>Table data is empty</div>
        }
      </td>
    </tr>
  </tbody>
)

EmptyPlaceholder.propTypes = {
  length: PropTypes.number,
  onEmptyData: PropTypes.func
}

export default EmptyPlaceholder
