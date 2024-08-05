import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import {addtoCart} from "../features/cart/cartSlice"
import {Button, Rating} from "@mui/material"

function SingleProduct() {
  const productId = useParams();
  // console.log(productId)
  const [productData, setProductData] = useState();

  const dispatch = useDispatch()

  

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductData(data);
      });
  });
  console.log(productData);

  return (
    <>
      <MDBContainer className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="5" lg="2" xl="4">
            <MDBCard style={{ borderRadius: "20px", backgroundColor:"papayawhip" }}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-overlay"
              >
                <MDBCardImage
                  src={productData && productData.images[0]}
                  fluid
                  className="w-100"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <a href="#!">
                  <div className="mask"></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>
                      <a href="#!" className="text-dark">
                        {productData && productData.title}
                      </a>
                    </p>
                    <p className="small text-muted">{productData && productData.brand
                    }</p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <Rating defaultValue={1} size="small" />
                    </div>
                    <p className="small text-muted">Rated {productData && productData.rating}/5</p>
                  </div>
                </div>
              </MDBCardBody>
              <hr class="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <p>
                    <a href="#!" className="text-dark">
                      Price
                      $ {productData && productData.price}
                    </a>
                  </p>
                  <p className="text-dark">Stock :- {productData && productData.availabilityStatus}</p>
                </div>
                <p className="small text-muted">{productData && productData.returnPolicy}</p>
              </MDBCardBody>
              <hr class="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <Link to={"/homepage"} className="text-dark fw-bold">
                  <MDBBtn color="danger">Cancel</MDBBtn>
                  </Link>
                  <Link to={"/cart"}>
                  <Button color="success" variant="contained" onClick={()=>{dispatch(addtoCart(productData))}}>Add To Cart</Button>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default SingleProduct;
