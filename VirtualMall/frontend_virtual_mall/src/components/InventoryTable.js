import React from 'react'
import MaterialTable from 'material-table'

function Table() {

    const data = [
        {SKU_ID : "A10", Product_Name : "Adidas", Product_Category : "Pant", Category : "Mens", QTY : "25", Price : "2000"},
        {SKU_ID : "A11", Product_Name : "Puma", Product_Category : "Pant", Category : "Women", QTY: "52", Price : "3500"},
        {SKU_ID : "A12", Product_Name : "Rebok", Product_Category : "Shirt", Category : "Mens", QTY : "40", Price : "3000"},
        {SKU_ID : "A13", Product_Name : "Puma", Product_Category : "Pant", Category : "Women", QTY: "32", Price : "3520"},
        {SKU_ID : "A14", Product_Name : "Adidas", Product_Category : "Shirt", Category : "Mens", QTY : "45", Price : "3100"}
        
        
    ]
    const columns = [
       
        {
            title:'SKU_ID', field:'SKU_ID'
        },
        {
            title:'Product_Name', field:'Product_Name'
        },
        {
            title:'Product_Category', field:'Product_Category'
        },
        {
            title:'Category', field:'Category'
        },
        {
            title:'QTY', field:'QTY'
        },
        {
            title:'Price', field:'Price'
        },
    ]
      
    return(
        <>
        <div>
            <MaterialTable  title ="Inventory Table"
            data = {data}
            columns = {columns}
            />
        </div>
        </>
    )
}

export default Table