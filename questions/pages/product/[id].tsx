import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();
  const { query } = useRouter();
  // const [product, setProduct] = useState([]);
  const [prod, setProd] = useState({});
  const [qty, setqty] = useState([]);

  const handleChange = (event) => {
    setqty(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="new_product">
        <div>
          <p>
            <img src={query.product_image} />
          </p>
          <h1>{query.product_title}</h1>
          <h3>${query.product_price}</h3>
        </div>
        <div className="new_product_right">
          <h4 className="product_desc">{query.product_desc}</h4>
          <h4>{query.product_rating}</h4>
          <Box sx={{ minWidth: 20 }} className="product_box">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Qty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={qty}
                label="Qty"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
              <Button variant="contained" className="button">
                <Link
                  href={{
                    pathname: "/cart/",
                    query: {
                      product_id: query.product_id,
                      product_title: query.product_title,
                      product_price: query.product_price,
                      product_desc: query.product_desc,
                      product_image: query.product_image,
                      product_rating: query.product_rating,
                      product_qty: qty,
                    },
                  }}
                >
                  <a>Add to cart</a>
                </Link>
              </Button>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
