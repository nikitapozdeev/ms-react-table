import React from 'react'

class TableFooter extends React.Component {
  render () {
    const { columns } = this.props
    return <>
      <tfoot>
        <tr>
          {
            columns.map((column, index) => {
              return (
                <th key={index}>footer{index}</th>
              )
            })
          }
        </tr>
      </tfoot>
    </>
  }
}

export default TableFooter
