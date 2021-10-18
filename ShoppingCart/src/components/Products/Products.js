import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";
import smartphone from './smartphone.jpg'
import book from './book.jpg'
import speaker from './speaker.jpg'

const Products = ({products}) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    products : state.products
  }
}

export default connect(mapStateToProps)(Products)