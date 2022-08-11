import React from 'react'
import NormalTable from '../../AntdComponents/Table/NormalTable'
import ExpandableTable from '../../AntdComponents/Table/ExpandableTable'
import { CopyBlock, dracula, googlecode } from 'react-code-blocks'
import { useSelector } from "react-redux";

function TablePage() {

    const showLineNumbers = true
    const codeBlock = true
    const { dark } = useSelector((state) => state.dark);

    return (
        <div className='container mb-5'>
            <h2>Tables Styles Customization 🧾</h2>
            <a href="https://ant.design/components/table/" target="_blank" rel="noreferrer">👉 Ant Design Tables</a>
            <hr />

            <h4>Normal Table</h4>

            <div className='mt-3 mb-5'>
                <NormalTable />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
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

export default NormalTable`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>

            <h5 className='mt-4'>Expandable Table</h5>

            <div className='mt-3 mb-5'>
                <ExpandableTable />
            </div>

            <div className='mt-5'>
                <h4>JavaScript Code</h4>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`import React from 'react'
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

export default ExpandableTable`}
                    language={'jsx'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>

                <p>Note: getEllipsisTxt() method is used to make long strings short.</p>
            </div>

            <div className='mt-5'>
                <h4>CSS Styles</h4>
                <span className='small fw-bold'>Table.css</span>

                <div className='code-block mt-3'>
                    <CopyBlock
                    text={`/* table header styles */
.ant-table-thead > tr >th{
    background: #3071b9 !important;
}

/* table rows styles */
.ant-table-tbody > tr{
    color: grey;
    background: #0f1129 !important;
}

/* table rows hover styles */
.ant-table-thead>tr.ant-table-row-hover:not(.ant-table-expanded-row)>td, 
.ant-table-tbody>tr.ant-table-row-hover:not(.ant-table-expanded-row)>td, 
.ant-table-thead>tr:hover:not(.ant-table-expanded-row)>td, 
.ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td {
    background: rgb(20, 22, 112) !important;
}

/* custom class for exapandable area */
.customExpandArea {
    background: #0f1129;
    margin: -17px;
    border-bottom: solid 1px white;
}`}
                    language={'css'}
                    theme={dark ? dracula : googlecode }
                    {...{ showLineNumbers, codeBlock }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TablePage