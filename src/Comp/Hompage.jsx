import { Box } from "@mui/material";
import Product from "./Product";

function Hompage(props) {
    const {products} = props.productData
    return ( 
        <>  
            <Box
            sx={{
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                flexWrap:"wrap",
                gap:"20px",
                marginTop:"20px",
                marginBottom:"20px"
            }}>
                {
                    products && products.map((value,index)=>(
                        <Product Allproducts={value}/>
                    ))
                }
             </Box>
        </>
     );
}

export default Hompage;