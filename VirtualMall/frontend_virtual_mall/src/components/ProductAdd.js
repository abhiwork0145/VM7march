import React, { useState } from 'react'
import './ProductAdd.css'
import MaterialTable from 'material-table'

import Table from './InventoryTable'
import { Select } from '@material-ui/core'

function ProductAdd() {

    const [data, setData] = useState([
        { SKU_ID: "A10", Product_Name: "Adidas", Product_Category: "Pant", Category: "Mens", QTY: "25", Price: 2000 },
        { SKU_ID: "A11", Product_Name: "Puma", Product_Category: "Pant", Category: "Women", QTY: "52", Price: 3500 },
        { SKU_ID: "A12", Product_Name: "Rebok", Product_Category: "Shirt", Category: "Mens", QTY: "40", Price: 3000 },
        { SKU_ID: "A13", Product_Name: "Puma", Product_Category: "Pant", Category: "Women", QTY: "32", Price: 3520 },
        { SKU_ID: "A14", Product_Name: "Adidas", Product_Category: "Shirt", Category: "Mens", QTY: "45", Price: 3100 },
        { SKU_ID: "A15", Product_Name: "Adidas", Product_Category: "Shirt", Category: "Mens", QTY: "45", Price: 3100 }
    ])
    const columns = [

        { title: 'SKU ID', field: 'SKU_ID' },
        { title: 'Product Name', field: 'Product_Name', sorting: false },
        { title: 'Product Category', field: 'Product_Category', sorting: false, lookup: { Pant: "Pant", Shirt: "Shirt" } },
        { title: 'Category', field: 'Category', sorting: false, lookup: { Mens: "Men", Women: "Women" } },
        { title: 'Qty', field: 'QTY', sorting: false },
        { title: 'Price', field: 'Price', sorting: false },
    ]

    return (
        <>
            <div className="container_1">
                <div className="container_2">
                    <div className="sidebar">
                        <h2 className="heding_1"> Virtual Mall </h2>
                        <button className="inventory">Inventory</button>
                    </div>

                    <div className="second-div">
                        <div className="logout-button-container">
                            <button className="logout-button">Logout</button>
                        </div>
                        <div className="welcome">
                            <div className="quats">Hi, Mr.Kumar. Welcome to your shop.</div>
                        </div>
                        { /* <div className="search-bar">
                            <input type="text" placeholder="Search Product" ></input>
                            <button className="search-bottom">Search</button>
                        </div> */ }

                        <div >
                            <div className="product-list-container">

                                <MaterialTable title="Inventory Table"
                                    columns={columns}
                                    data={data}
                                    editable={{
                                        onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                            const updatedRows = [...data, newRow]
                                            setTimeout(() => {
                                                setData(updatedRows)
                                                resolve()
                                            }, 500)
                                        }),
                                        onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                            const index  = oldRow.tableData.id;
                                            const updatedRows = [...data]
                                            updatedRows[index] = updatedRow
                                            setTimeout(() => {
                                                setData(updatedRows)
                                                resolve()
                                            }, 2000)
                                        }),
                                        onRowDelete:selectedRow => new Promise((resolve, reject) => {
                                            const index = selectedRow.tableData.id;
                                            const updatedRows = [...data]
                                            updatedRows.splice(index,1)
                                            setTimeout(()=> {
                                            setData(updatedRows)
                                            resolve()
                                            },2000)
                                        })
                                    }}
                                    options={{
                                        pageSizeOptions: [2, 4, 5, 10], addRowPosition: "first", actionsColumnIndex: -1
                                    }}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAdd