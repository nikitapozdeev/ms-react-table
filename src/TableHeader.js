import React from 'react'
import HeaderCell from './HeaderCell'

class TableHeader extends React.Component {
  render () {
    const {
      columns,
      onHeaderCellRender
    } = this.props

    return <>
      <thead>
        <tr>
          {columns.map((column, index) => (
            /* custom header cell rendering */
            onHeaderCellRender ? onHeaderCellRender({ column, index })
              : <HeaderCell
                key={`ms-table-col-${index}`}
                column={column}
              />
          ))}
        </tr>
      </thead>
    </>
  }
}

export default TableHeader
