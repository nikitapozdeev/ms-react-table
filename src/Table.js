import React from 'react'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import TableRow from './TableRow'

class Table extends React.Component {
  render () {
    const {
      data,
      columns,
      caption
    } = this.props

    return <>
      <table>
        <caption>{caption}</caption>
        <TableHeader
          columns={columns}
        />
        {data.map((row, index) => {
          return (
            <TableRow
              key={index}
              row={row}
              columns={columns}
            />
          )
        })}
        <TableFooter
          columns={columns}
        />
      </table>
    </>
  }
}

export default Table
