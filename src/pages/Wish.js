import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeWish } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wish() {
  const dispatch = useDispatch();
  const wishArray = useSelector((state) => state.wish);

  return (
    <div>
      <h3 className='text-center' style={{ fontSize: '30px' }}>
        Wish List
      </h3>
      {wishArray.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th className='w-25'>Product title</th>
                <th>Price</th>
                <th>Username</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishArray.map((i, index) => (
                <tr key={i.id}>
                  <td>{index + 1}</td>
                  <td>{i.title.length>50?i.title.slice(0,25)+"..":i.title}</td>
                  <td>{i.price}</td>
                  <td>
                    <img style={{ height: '100px' }} src={i.image} alt='' />
                  </td>
                  <td>
                    <Button onClick={() => dispatch(removeWish(i.id))}>
                      <i className='fa-regular fa-trash-can'></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        dispatch(addToCart(i));
                        dispatch(removeWish(i.id));
                      }}
                      variant='outline-success'
                    >
                      ADD TO CART
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <h1 className='ms-5 p-4'>Wishlist is empty</h1>
      )}
    </div>
  );
}

export default Wish;
