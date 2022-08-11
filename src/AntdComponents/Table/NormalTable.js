import React from 'react'
import './Table.css'
import { Table } from 'antd'

function NormalTable() {

  const { Column } = Table;

  // sample data
  const grades = [
    {
      id: 1,
      name: "Kavindu",
      description: "test description",
      created_at: "2022/08/11",
      updated_at: "2022/08/11"
    }
  ]

  return (
    <div className='table-responsive'>
      <Table
        dataSource={grades}
        pagination={false} 
      >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Created" dataIndex="created_at" key="created_at" />
        <Column title="Updated" dataIndex="updated_at" key="updated_at" />
    </Table>
    </div>
  )
}

export default NormalTable