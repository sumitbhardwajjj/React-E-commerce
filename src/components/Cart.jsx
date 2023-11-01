import React from 'react'
import Navbar from './navbar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from './CartSlice'

const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const removehandler = (id)=>{
    dispatch(remove(id))
  }

  
  const cards = products.map(product=>(
    <div className='col-lg-3 col-md-4 col-sm-5 p-3 '>
      <Card style={{height:'360px',width:"250px", textAlign:"center",background:'#121212',color:'white' }}>
        <Card.Title style={{height:'100px', width:'100%'}}>{product.title}</Card.Title>
   <div className='pro-2'>
   <Card.Img src={product.image} style={{width:'100%', height:'180px'}}></Card.Img>
   </div>
   <div>
      <Card.Text style={{height:'50px'}}>${product.price}</Card.Text>
      </div>
   <Card.Footer style={{display:'flex',justifyContent:'center', padding:'5px'}}>
    <Button variant="danger" onClick={()=>removehandler(product.id)} >Remove</Button>
   </Card.Footer>
   </Card>
   </div>     
))

  return (
    <div>
      <Navbar/>
      <h1>Shopping Cart</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Cart
