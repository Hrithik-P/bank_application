import React, { Fragment } from 'react'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

const Statement = () => {
    const { transactions } = useSelector((state) => state.bank)
    const columns = [
        {
            name: 'DateTime',
            selector: row => row.created_at,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Type',
            selector: row => row.type,
        },
        {
            name: 'Details',
            selector: row => row.details,
        },
        {
            name: 'Balance',
            selector: row => row.balance,
        },
    ];
    return (
        <Fragment>
            <Header />
            <Container>
                <div className='mt-5'>
                    {transactions.length > 0 ?
                        <DataTable
                            columns={columns}
                            data={transactions}
                            pagination
                        />
                        : <span className='fs-2 d-flex justify-content-center fw-bolder'>You Have Done No Transaction Till Now</span>}
                </div>
            </Container>

        </Fragment>
    )
}

export default Statement