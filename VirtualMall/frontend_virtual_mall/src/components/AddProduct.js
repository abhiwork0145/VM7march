import React from 'react'
import { Button } from 'react-bootstrap'
import './AddProduct.css';
function Login() {
    return (
        <>
          <div className="login-container">
              <div className="sidebar">
                    <h2>V Mall</h2>
                    <button className="inventory">Inventory</button>
              </div>

              <div className="second-div">
                 <div className="logout-button-container">
                   <button className="logout-button">Logout</button>
                </div>
                <div className="welcome">
                    <h3>Hi, Mr.Kumar. Welcome to your shop.</h3>
                </div>
           <br/>
                <div style={{display : 'flex',justifyContent : 'right'}}>

                 <span>
                 <div style={{backgroundColor : 'skyblue'}}>
                    <input type="search" placeholder="Search"></input>
                </div>     
                 </span>

                 <span>
                     <Button variant="primary">Add  Product</Button>
                
                 </span>

             </div>

                <div className="product-list">
                <table>
                    <tr>
                        <th>SKU Id</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    <tr>
                        <td>GU7658</td>
                        <td>Gucci Shirt</td>
                        <td>Mens</td>
                        <td>20</td>
                        <td>12,000 INR</td>
                    </tr>
                    </table>
                </div>

              </div>
                
              <div className="more-container">
            
              </div>
          </div>     
        </>
    )
}

export default Login;
