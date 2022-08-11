import React from 'react'
import { Tag, Table } from 'antd';
import './Table.css'
import { getEllipsisTxt } from '../../helpers/Formatters'
import { Row, Col } from 'reactstrap';

function ExpandableTable() {

  const columns = [
    { title: 'Wallet ID', dataIndex: 'wallet_id', key: 'wallet_id',
    render: (text, record) => (<Tag color="#0f1129">{getEllipsisTxt(record.wallet_id, 4)}</Tag>),
    },
    { title: 'Referred wallet ID', dataIndex: 'ref_wallet_id', key: 'ref_wallet_id',
    render: (text, record) => (<Tag color="#0f1129">{getEllipsisTxt(record.ref_wallet_id, 4)}</Tag>),
    },
    { title: 'Date', dataIndex: 'date', key: 'date',
    render: (text) => (<Tag color="#0f1129">{text}</Tag>),
    },
    { title: 'Active Status', dataIndex: 'status', key: 'status',
      render: (text) => (<Tag color="rgba(45,100,206, .5)">{text}</Tag>),
    },
    Table.EXPAND_COLUMN,
];

const data = [
  {
    key: 1,
    wallet_id: '0x138afa15936E844555c9336265895967CD442G43',
    ref_wallet_id: '0x138afa15936E844555c9336265895967CD442Ger4',
    date: '04/22/2022',
    status: ['Pending'],
    description: 'More Details',
  },
  {
    key: 2,
    wallet_id: '0x138afa15936E844555c9336265895967CD442Ger4',
    ref_wallet_id: '0x138afa15936E844555c9336265895967CD442G43',
    date: '04/20/2022',
    status: ['Active'],
    description: 'More Details',
  },
  {
    key: 3,
    wallet_id: '0x138afa15936E844555c9336265895967CD442G123',
    ref_wallet_id: '0x138afa15936E844555c9336265895967CD442Ger4',
    date: '03/23/2022',
    status: ['Active'],
    description: 'More Details',
  },
  {
    key: 4,
    wallet_id: '0x138afa15936E844555c9336265895967CD442G43sd3',
    ref_wallet_id: '0x138afa15936E844555c9336265895967CD442G123',
    date: '01/18/2022',
    status: ['Pending'],
    description: 'More Details',
  },
];

  return (
    <div className='table-responsive'>
      <Table
        columns={columns}
        pagination={{ pageSize: 2 }}
        expandable={{
            expandedRowRender: record => 
            <>
                <div className="customExpandArea">
                    <Row>
                        <Col lg="3" md="3" sm="12"><p className="p-4">{record.description}</p></Col>
                        <Col lg="3" md="3" sm="12"><p className="p-4">{record.description}</p></Col>
                        <Col lg="3" md="3" sm="12"><p className="p-4">{record.description}</p></Col>
                        <Col lg="3" md="3" sm="12"><p className="p-4">{record.description}</p></Col>
                    </Row>
                </div>
            </>
        }}
        dataSource={data}
    />
  </div>
  )
}

export default ExpandableTable