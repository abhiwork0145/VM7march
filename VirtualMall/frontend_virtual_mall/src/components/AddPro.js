import React from "react";
import { Row, Container, Col, Form, Dropdown, Button } from "react-bootstrap";
import { IoLogOut as Logout } from "react-icons/io5";

const style = {
  sideBar: {
    color: "white",
    textAlign: "center",
  },
};

export default function AddProduct() {

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} style={{ backgroundColor: "#737373" }}>
            <div>
              <h4
                style={{
                  ...style.sideBar,
                  marginBottom: "100px",
                  marginTop: "10px",
                }}
              >
                VMall
              </h4>
            </div>
            <div style={{ ...style.sideBar, marginBottom: "570px" }}>
              <h5 style={{ marginLeft: "2px" }}>
                Inventory
              </h5>
            </div>
          </Col>
          <Col md={9}>
            <div style={{display : 'flex',justifyContent : 'right',marginTop : "10px"}}>
              <Button variant="outline-dark">Logout <Logout size={40} /></Button>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "20px" }}>
              <h6>Product List {'>'} Add product</h6>
              <h3>
                {" "}
                Add Product
              </h3>
            </div>
            <div style={{ marginTop: "50px", marginLeft: "10px",border : "1px solid" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ padding: "15px" }}>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                              Choose category
                            </Dropdown.Toggle>
  
                            <Dropdown.Menu>
                              
                            </Dropdown.Menu> 
                          </Dropdown>
                      </td>
                      <td style={{ padding: "15px" }}>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                              Choose product category
                            </Dropdown.Toggle>
  
                            <Dropdown.Menu>
                             
                            </Dropdown.Menu> 
                          </Dropdown>
                      </td>
                  </tr>
                    <tr>
                      <td style={{ padding: "15px" }}>
                        <Form.Control
                          type="text"
                          name="product_name"
                          placeholder="Enter Product Name"
                        />
                      </td>
                      <td style={{ padding: "15px" }}>
                        <Form.Control type="text"  name="product_sku" placeholder="Enter SKU ID" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "15px" }}>
                        <Form.Control type="text" name="product_qty" placeholder="Enter QTY" />
                      </td>
                      <td style={{ padding: "15px" }}>
                        <Form.Control type="text"   name="product_price" placeholder="Enter Price" />
                      </td>
                      
                    </tr>
                    <tr>
                    <td style={{ padding: "15px" }}>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                              Enter Size
                            </Dropdown.Toggle>
  
                            <Dropdown.Menu>
                            </Dropdown.Menu> 
                          </Dropdown>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div style={{display : 'flex',justifyContent : 'right',marginTop : "10px"}}>
              <span style={{marginRight : "5px"}}>
                 <Button variant="outline-dark">Discard</Button>
              </span>
              <span>
                <Button>Add Product</Button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
