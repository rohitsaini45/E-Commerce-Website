import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import Button from "@mui/material/Button";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from '../features/cart/cartSlice';

function Wishlist({Productall}) {
  let Favorate = useSelector((state) => state.Allfavorate.cart);
  const prodispatch = useDispatch()
//   console.log(Favorate);

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Favorite Best Product <FavoriteIcon style={{color:"red"}}/></strong> 
      </h4>
      <MDBRow>
      {Favorate.map((value, index) => (
        
          <MDBCol md="4" lg="4" className="mb-4">
            <MDBCard style={{backgroundColor:"#FADBD8"}}>
              <MDBRipple
              style={{backgroundColor:"orangered"}}
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={value.images[0]} fluid className="w-100" 
                style={{backgroundColor:"pink"}}/>
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">
                          {value.discountPercentage}%
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">{value.title}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>{value.category}</p>
                </a>
                <h6 className="mb-3">$ {value.price}</h6>
                <Button onClick={()=>{prodispatch(addtoCart(Productall))}}>Add to Cart</Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        
      ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Wishlist;
