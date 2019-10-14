import React from 'react'

class TableRow extends React.Component {
  render () {
    const { row, columns } = this.props
    return <>
      <tbody>
        <tr>
          {columns.map((column, index) => {
            return (
              <td
                key={index}
              >
                {row[column.accessor]}
              </td>
            )
          })}
        </tr>
      </tbody>
    </>
  }
}

export default TableRow
