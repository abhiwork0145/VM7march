import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { directive } from '@babel/types';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { haderName: 'Make', field: 'make' },
                { haderName: 'Age', field: 'age' }
            ],
            rowData: [
                { make: 'Toyota', age: 52 },
                { make: 'Tata', age: 27 }
            ]
        };
    }
    render() {
        return (
            <div className="ag-theme-balham"
                styles={{
                    width: 500,
                    Height: 600
                }}
            >
            <AgGridReact columnDefs = {this.state.columnDefs}
            rowData = {this.state.rowData} />
            </div>
        )
    }
}

export default Table;

