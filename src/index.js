// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import Table from './Table'
import * as serviceWorker from './serviceWorker'

const demoData = [
  { id: 1, first_name: 'Federico', last_name: 'Cockin', email: 'fcockin0@youtube.com', gender: 'Male', ip_address: '2.98.2.248' },
  { id: 2, first_name: 'Ali', last_name: 'Gocke', email: 'agocke1@paginegialle.it', gender: 'Female', ip_address: '137.67.116.59' },
  { id: 3, first_name: 'Gerhardine', last_name: 'Grass', email: 'ggrass2@abc.net.au', gender: 'Female', ip_address: '253.186.45.252' },
  { id: 4, first_name: 'Towney', last_name: 'Buche', email: 'tbuche3@spotify.com', gender: 'Male', ip_address: '222.150.36.41' },
  { id: 5, first_name: 'Aretha', last_name: 'Aveline', email: 'aaveline4@gmpg.org', gender: 'Female', ip_address: '190.199.54.173' },
  { id: 6, first_name: 'Chelsea', last_name: 'Judson', email: 'cjudson5@weather.com', gender: 'Female', ip_address: '188.12.186.70' },
  { id: 7, first_name: 'Tobit', last_name: 'Furmage', email: 'tfurmage6@globo.com', gender: 'Male', ip_address: '213.87.121.74' },
  { id: 8, first_name: 'Floyd', last_name: 'Lyenyng', email: 'flyenyng7@tripadvisor.com', gender: 'Male', ip_address: '168.169.25.115' },
  { id: 9, first_name: 'Brendon', last_name: 'Cockerham', email: 'bcockerham8@diigo.com', gender: 'Male', ip_address: '9.10.142.19' },
  { id: 10, first_name: 'Agosto', last_name: 'Stiebler', email: 'astiebler9@china.com.cn', gender: 'Male', ip_address: '197.235.85.45' },
  { id: 11, first_name: 'Gale', last_name: 'Dohrmann', email: 'gdohrmanna@histats.com', gender: 'Female', ip_address: '77.205.168.254' },
  { id: 12, first_name: 'Erhard', last_name: 'Harcase', email: 'eharcaseb@dailymotion.com', gender: 'Male', ip_address: '216.196.227.10' },
  { id: 13, first_name: 'Lily', last_name: 'Clarabut', email: 'lclarabutc@addthis.com', gender: 'Female', ip_address: '244.235.95.44' },
  { id: 14, first_name: 'Tybie', last_name: 'Jenkins', email: 'tjenkinsd@storify.com', gender: 'Female', ip_address: '166.18.2.223' }
]

const demoColumns = [
  { title: 'ID', accessor: 'id', key: true },
  { title: 'First Name', accessor: 'first_name' },
  { title: 'Last Name', accessor: 'last_name' },
  { title: 'Email', accessor: 'email' },
  { title: 'Gender', accessor: 'gender' },
  { title: 'Ip Address', accessor: 'ip_address' }
]

/* custom head cell rendering overrides default */
const onHeaderCellRender = ({ column, index }) => (
  <th key={index}>custom_{column.title}</th>
)

/* custom empty component */
const onEmptyData = () => (
  <div>
    <b>
      <i>Custom empty component</i>
    </b>
  </div>
)

const tableCaption = () => (
  <h3><i>this is table caption</i></h3>
)

const tableExample = (
  <div className="App">
    <header className="App-header">
      <Table
        data={demoData}
        columns={demoColumns}
        caption={tableCaption}
        onEmptyData={onEmptyData}
        onHeaderCellRender={onHeaderCellRender}
      />
    </header>
  </div>
)

ReactDOM.render(tableExample, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
