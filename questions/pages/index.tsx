import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    return res.json();
  };

  const { data, error, isLoading } = useQuery("fetchProducts", getProducts);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />

      <ul className="top_products">
        {data.map((product) => (
          <div className="all_products">
            <Link
              href={{
                pathname: "/product/[id]",
                query: {
                  product_id: product.id,
                  product_title: product.title,
                  product_price: product.price,
                  product_desc: product.description,
                  product_image: product.image,
                  product_rating: product.rating,
                },
              }}
              as={`/product/product_id=${product?.id}&product_title=${product?.title}&product_price=${product?.price}`}
            >
              <a>
                <Card sx={{ width: 305 }} className="product_cart">
                  <CardMedia sx={{ height: 300 }} image={product.image} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <li key={product.id} className="product_screen">
                        {product.title} - ${product.price}
                      </li>
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
