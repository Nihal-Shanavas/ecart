import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { searchProduct } from '../redux/productsSlice';




function Header() {
  const cartArray= useSelector(state=>state.cart)
  
  const dispatch = useDispatch();

  

  return (
    <div>
          <Navbar style={{backgroundColor:'white'}} expand="lg" className="w-100">
      <Container>
        <Link style={{textDecoration:'none'}} to={'/'}>
          <Navbar.Brand className='text-dark' href="#home">
              <img style={{height:'50px',width:'50px'}} 
              src="https://i.postimg.cc/DZ1hfdrB/shopping-check-mark-logo-vector-31881606-removebg-preview.png" 
              alt="" />
              
              
              <h ><span className='ms-3 head '>C</span>ARTIFY</h></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
         
         <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 mt-3"
              onChange={(e)=>dispatch(searchProduct(e.target.value))}
            />
          </Col>
          <Col xs="auto">
            <Button className='mt-3 ms-2' type="submit">Submit</Button>
          </Col>
        </Row>
     </Form>
         
          <Nav className="me-auto">
     <Link style={{textDecoration:'none'}} to={'/cart'}>
              <Nav.Link className='text-white' href="#home">
              <i className="fas fa-shopping-cart sym1" style={{ color: 'black', fontSize: '20px' }}></i><b style={{color:'black'}}>{cartArray.length}</b>
              
              </Nav.Link>
     </Link>
          <Link to={'/wish'}>
              <Nav.Link  className='text-white ms-1'href="#link">
              <i className="fa-regular fa-heart sym2" style={{ color: 'black' ,fontSize: '20px' }}></i>
              </Nav.Link>
          </Link>
          
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr  style={{height:'10px'}}/>

        </div>
        
  )
}

export default Header