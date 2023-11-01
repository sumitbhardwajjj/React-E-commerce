import React, { useEffect } from "react";
import Navbar from "./navbar";
import "../styles/Product.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addtoCart } from "./CartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const [products, getproducts] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [price,setprice] = useState(0)
  const recordsPerPage = 8;
  const lastIndex = currentpage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getproducts(result));
  });

  const addhandler = (product) => {
    dispatch(addtoCart(product));
  };

  const cards = records.filter(product=>{return product.price > parseInt(price)}).map((product) => (
    <div className="col-lg-3 col-md-4 col-sm-5 p-3  h-50">
      <Card
        style={{
          height: "360px",
          width: "250px",
          textAlign: "center",
          background: "#121212",
          color: "white",
        }}
      >
        <Card.Title style={{ height: "100px", width: "100%" }}>
          {product.title}
        </Card.Title>
        <div className="pro-2">
          <Card.Img
            src={product.image}
            style={{ width: "100%", height: "180px" }}
          ></Card.Img>
        </div>
        <div>
          <Card.Text style={{ height: "30px" }}>${product.price}</Card.Text>
        </div>
        <Card.Footer
          style={{ display: "flex", justifyContent: "center", padding: "5px" }}
        >
          <Button onClick={() => addhandler(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div>
        <img className="pro-1" src='image1.jpg' alt="" />
      </div>
      <div className="p-3">
      <input type="range" min="0" max='1001'  value={price} onChange={(e)=>setprice(e.target.value)}/>
      <h5>Price: ${price}</h5>
      </div>
      <div className="row">{cards}</div>
      <div className="d-flex justify-content-center p-5">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Perv</a>
          </li>
          {
            numbers.map((n,i)=>(
              <li className={`page-item ${currentpage===n ? 'active':''}`} key={i}>
                <a href="#" onClick={changeCpage} className="page-link">{n}</a>
              </li>
            ))
          }
           <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>     
    </div>
  );

  function prePage(){
    if(currentpage !== 1){
      setcurrentpage(currentpage-1)
    }
  }

  function changeCpage(id){
    setcurrentpage(id)
  }

  function nextPage(){
    if(currentpage !== npage){
      setcurrentpage(currentpage+1)
    }
  }
  
  
};

export default Product;
