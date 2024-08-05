import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux"
import { addtoCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { addtofavorate } from "../features/wishlistSlice";

export default function Product({ Allproducts }) {
  const dispatch = useDispatch()
  // console.log(Allproducts);
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "pink" }}>
      <FavoriteIcon sx={{float:"right", margin:"10px", cursor:"pointer", "&:hover":{color:"red"}}} 
      onClick={()=>{dispatch(addtofavorate(Allproducts))}}
       />
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CardMedia
          sx={{
            width: "70%",
            height: "40vh",
          }}
          component="img"
          alt="green iguana"
          height="200"
          image={Allproducts.images[0]}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Allproducts.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Allproducts.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success" onClick={()=>{dispatch(addtoCart(Allproducts))}}>
          Add to Cart
        </Button>
        <Link to={`/singleproduct/${Allproducts.id}`}>
        <Button size="small" variant="contained">
          More Info
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
