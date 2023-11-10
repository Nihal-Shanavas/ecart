import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { removeCart } from '../redux/cartSlice';
import { clearCart } from '../redux/cartSlice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart);

  if (cartArray.length !== 0) {
    var total = cartArray.map((i) => i.price).reduce((a, b) => a + b);
  } else {
    var total = 0;
  }

  const showPaymentNotification = () => {
    toast.success('Payment Successful', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const handlePayment = () => {
    // Clear the cart when the payment is made
    dispatch(clearCart());
    showPaymentNotification();
    handleClose();
  };

  return (
    <div>
      <h3 className='text-center' style={{ fontSize: '30px' }}>Cart</h3>
      {cartArray.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product title</th>
                <th>Price</th>
                <th>Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((i, index) => (
                <tr key={i.id}>
                  <td>{index + 1}</td>
                  <td>{i.title.length>50?i.title.slice(0,25)+"..":i.title}</td>
                  <td>{i.price}</td>
                  <td>
                    <img style={{ height: '100px' }} src={i.image} alt="" />
                  </td>
                  <td>
                    <Button
                      onClick={() => dispatch(removeCart(i.id))}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='text-center p-3'>
        <h5>Total Price <i class="fa-solid fa-dollar-sign"></i> {total}</h5>
      </div>
        </div>
      ) : (
        <h1 className='ms-2'>Cart is empty</h1>
      )}
     
      <div className='d-flex justify-content-center'>
        <Button variant="primary" onClick={handleShow}>
          PAYMENT
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='border-0' closeButton>
            <Modal.Title>Payment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              className="form-control border-bottom mb-2"
              required
            />
            <input
              type="text"
              placeholder='Enter Address'
              name=''
              id=''
              className='form-control border-bottom'
              required
            />
          </Modal.Body>
          <Modal.Footer className='border-0'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlePayment}>
              Pay  <i class="fa-solid fa-dollar-sign"></i> {total}
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Cart;
