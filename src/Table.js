import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import TableRow from './TableRow'
import EmptyPlaceholder from './EmptyPlaceholder'

/**
 * Table component
 */
class Table extends React.PureComponent {

  renderTableCaption = () => {
    const { caption } = this.props
    return caption && <caption>{caption()}</caption>
  }

  renderTableHeader = () => {
    const {
      columns,
      onHeaderCellRender
    } = this.props

    return <TableHeader
      columns={columns}
      onHeaderCellRender={onHeaderCellRender}
    />
  }

  renderTableRows = () => {
    const {
      data,
      columns,
      onEmptyData
    } = this.props
    return (
      data && data.length
      ? data.map((row, index) => {
        return (
          <TableRow
            key={index}
            row={row}
            columns={columns}
          />
        )
      })
      : <EmptyPlaceholder onEmptyData={onEmptyData} length={columns.length} />
    )
  }

  renderTableFooter = () => {
    const {columns} = this.props
    return <TableFooter columns={columns} />
  }

  render () {
    const TableCaption = this.renderTableCaption()
    const TableHeader = this.renderTableHeader()
    const TableBody = this.renderTableRows()
    const TableFooter = this.renderTableFooter()
    return <>
      <table>
        {TableCaption}
        {TableHeader}
        {TableBody}
        {TableFooter}
      </table>
    </>
  }
}

Table.defaultProps = {
  data: [],
  columns: []
}

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  onHeaderCellRender: PropTypes.func
}

export default Table
