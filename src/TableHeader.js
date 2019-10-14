import React from 'react'

class TableHeader extends React.Component {
  handleOnClick(evt) {
    console.log(evt)
  }

  render () {
    const { columns } = this.props
    return <>
      <thead>
        <tr>
          {
            columns.map((column, index) => {
              return (
                <th
                  key={`ms-table-col-${index}`}
                  id={`ms-table-col-${index}`}
                  onClick={event => this.handleOnClick(event)}
                >
                  {column.title}
                </th>
              )
            })
          }
        </tr>
      </thead>
    </>
  }
}

export default TableHeader
