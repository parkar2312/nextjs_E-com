import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Link from "next/link";

function cart(props) {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <Navbar />
      <div>
        <h2>Cart</h2>
        <div className="cart_items">
          <img src={query.product_image} />
          <h4>
            {query.product_title} - ${query.product_price}
          </h4>
          <h4></h4>
          <h4 className="cart_qty">Quantity = {query.product_qty}</h4>
          <h4 className="cart_total">
            Total = {query.product_price * query.product_qty}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default cart;
