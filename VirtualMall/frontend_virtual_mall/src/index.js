 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductAdd from './components/ProductAdd';
import InventoryTable from './components/InventoryTable';
import Table from './components/ProductTable';

ReactDOM.render(
  <React.StrictMode>
    <ProductAdd />
  </React.StrictMode>,
  document.getElementById('root')
);


