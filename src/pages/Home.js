import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWish } from "../redux/wishlistSlice";
import { fetchProducts } from "../redux/productsSlice";
import { Link } from "react-router-dom";





function Home() {

//   const dispatch=useDispatch()

// const {allProducts,loading,error}=useSelector((state)=>state.productsSlice)

//   useEffect(()=>{
// dispatch(fetchProducts())
//   },[])

  return (
    <div>
      <Row>
      
        <Col lg={6} xs={12} >
        <h1 className="mt-5 ms-5 p-1  head1" >
        Where Style Meets Convenience: Shop Your Heart Out!</h1>

        </Col>
        <Col lg={6} xs={12}>
        <img
            className="  mt-3"
            style={{ width:'350px' }}
            src="https://i.postimg.cc/2SM3K67t/image-ecom-development.gif"
            alt=""
          />
        

        </Col>
      </Row>
<Link to={'products'}>
        <Button className="btn1 ms-5 mt-3 ">Explore <i  class="fa-solid fa-angles-right"></i></Button>
  
</Link>   
   {/* <Row>
      {
          allProducts.length>0?allProducts.map(i=>(
            <Col lg={3} md={4} sm={6} className='p-4'>
            <Card  className="text-center ms-3" id='d' style={{ width: '240px' ,height:'350px'}} >
            <Card.Img className="ms-2" style={{height:'200px',width:'220px'}} variant="top" src={i.image} />
            <Card.Body>
              <Card.Title><h4>{i.title.length>50?i.title.slice(0,25)+"..":i.title}</h4></Card.Title>
              <Card.Text>
               <h2><i class="fa-solid fa-indian-rupee-sign"></i> {i.price}</h2>
              </Card.Text>
              <Button onClick={()=>dispatch(addToCart(i))} variant="white"><i className="fas fa-shopping-cart sym1 ms-1" style={{ color: 'black', fontSize: '20px' }}></i>
  </Button>
              <Button onClick={()=>dispatch(addToWish(i))} variant="white">   <i className="fa-regular fa-heart sym2 ms-5" style={{ color: 'black' ,fontSize: '20px' }}></i>
  </Button>
  
            </Card.Body>
          </Card>
          
      </Col>
          )): 
<div className="text-center">
              <h1 className="ms-5 mt-5"><i class="fa-solid fa-duotone fa-spinner fa-spin fa-2xl"></i></h1>
  
</div>  
      }
  
      </Row> */}
      
    </div>
  );
}

export default Home;
