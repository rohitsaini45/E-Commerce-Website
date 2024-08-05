import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotal, clearAlldata, removeAllproduct } from "../features/cart/cartSlice";
// import { deleteCart } from "../features/cart/cartSlice";


export default function Cart() {
  let CartDate = useSelector((state) => state.Allcart.cart);
  let cartPrice = useSelector((state)=> state.Allcart)
  const dispatch = useDispatch()
//   console.log(CartDate)

    dispatch(cartTotal())


  const deleteCart = () => {
    console.log("hii")
    dispatch(clearAlldata())
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {CartDate.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {
                        CartDate.length === 0 ? "No Record Found" : CartDate.map((value, index) => (
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={value.images[0]}
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              {value.title}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              {value.description}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <MDBInput
                              type="number"
                              min="0"
                              defaultValue={value.quantity}
                              size="sm"
                            />

                            <MDBBtn color="link" className="px-2">
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              {value.price*value.quantity}$
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" onClick={()=>{dispatch(deleteCart(value))}} />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      ))
                      }

                      <hr className="my-4" />

                      <div className="pt-5 d-flex justify-content-between" >
                        <Link to={"/homepage"}>
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                        </Link>
                        <MDBBtn color="danger" 
                        className="float-end" onClick={()=>{dispatch(removeAllproduct())}}
                         >
                        Remove All Products
                      </MDBBtn>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                    
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ {cartPrice.totalPrice}</MDBTypography>
                      </div>

                      <MDBBtn block size="lg" 
                      style={{backgroundColor:"#F2E426" , color:"black" , fontSize:"large"}}>
                        Place Order
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
